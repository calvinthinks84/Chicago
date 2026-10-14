// CTA live-times relay for the Chicago Trip App — OPTIONAL but the most reliable path.
// Why: CTA's Train/Bus Tracker APIs don't send browser CORS headers, so the app
// can't call them directly. This tiny free Cloudflare Worker sits in between.
//
// SETUP (about 5 minutes, free, no card):
// 1. dash.cloudflare.com → Workers & Pages → Create → Worker → name it (e.g. cta-relay) → Deploy.
// 2. Open the worker → Edit code → delete what's there → paste this whole file → Deploy.
// 3. Worker → Settings → Variables and Secrets → add two SECRETS:
//      CTA_TRAIN_KEY  = your Train Tracker API key
//      CTA_BUS_KEY    = your Bus Tracker API key
// 4. Copy the worker's URL (looks like https://cta-relay.yourname.workers.dev)
//    into the app: Plan a ride → Live times → Edit → Relay URL → Save.
// The app then sends keyless CTA URLs to the relay; the relay adds the right key.
//
// PACKING-LIST SYNC (optional, powers multi-device packing on weather.html):
// 5. Worker → Settings → Bindings → Add → KV namespace → create one
//    (e.g. name it "pack-kv") and bind it with the variable name: PACK_KV
// 6. Re-deploy this updated code. The app then syncs the packing list at
//    GET/POST /pack?c=<sync code> under that code. Without the binding,
//    /pack returns 501 and the page simply stays device-local.

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    };
    const json = (obj, status) => new Response(JSON.stringify(obj), { status: status || 200, headers: { ...cors, "Content-Type": "application/json" } });
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    const reqUrl = new URL(request.url);
    if (reqUrl.pathname === "/pack") {
      const code = reqUrl.searchParams.get("c") || "";
      if (!/^[A-Za-z0-9_-]{4,32}$/.test(code)) return json({ error: "bad code" }, 400);
      if (!env.PACK_KV) return json({ error: "kv not bound" }, 501);
      const k = "pack:" + code;
      if (request.method === "GET") {
        const v = await env.PACK_KV.get(k);
        return new Response(v || "{\"empty\":true}", { headers: { ...cors, "Content-Type": "application/json" } });
      }
      if (request.method === "POST") {
        const body = await request.text();
        if (body.length > 32768) return json({ error: "too big" }, 413);
        await env.PACK_KV.put(k, body);
        return json({ ok: true }, 200);
      }
      return json({ error: "method not allowed" }, 405);
    }
    const u = reqUrl.searchParams.get("u");
    if (!u) return new Response(JSON.stringify({ error: "missing u" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
    let target;
    try { target = new URL(u); } catch { return new Response(JSON.stringify({ error: "bad u" }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } }); }
    if (target.hostname === "lapi.transitchicago.com") {
      if (!env.CTA_TRAIN_KEY) return new Response(JSON.stringify({ error: "CTA_TRAIN_KEY not set" }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
      target.searchParams.set("key", env.CTA_TRAIN_KEY);
    } else if (target.hostname === "www.ctabustracker.com") {
      if (!env.CTA_BUS_KEY) return new Response(JSON.stringify({ error: "CTA_BUS_KEY not set" }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
      target.searchParams.set("key", env.CTA_BUS_KEY);
    } else {
      return new Response(JSON.stringify({ error: "host not allowed" }), { status: 403, headers: { ...cors, "Content-Type": "application/json" } });
    }
    const r = await fetch(target.toString());
    const body = await r.text();
    return new Response(body, { status: r.status, headers: { ...cors, "Content-Type": "application/json; charset=utf-8" } });
  },
};
