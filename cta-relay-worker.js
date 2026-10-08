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

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    const u = new URL(request.url).searchParams.get("u");
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
