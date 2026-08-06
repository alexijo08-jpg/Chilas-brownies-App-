import { getStore } from "@netlify/blobs";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });

export default async (req) => {
  const store = getStore("chilas-store");
  const url = new URL(req.url);

  try {
    if (req.method === "GET") {
      const prefix = url.searchParams.get("prefix");
      if (prefix !== null) {
        let keys = [];
        let cursor;
        do {
          const result = await store.list({ prefix, cursor });
          keys = keys.concat(result.blobs.map((b) => b.key));
          cursor = result.cursor;
        } while (cursor);
        return json({ keys });
      }

      const key = url.searchParams.get("key");
      if (!key) return json({ error: "missing key" }, 400);
      const value = await store.get(key);
      return json({ value: value ?? null });
    }

    if (req.method === "POST") {
      const body = await req.json();
      const { key, value } = body || {};
      if (!key) return json({ error: "missing key" }, 400);
      await store.set(key, value);
      return json({ ok: true });
    }

    if (req.method === "DELETE") {
      const key = url.searchParams.get("key");
      if (!key) return json({ error: "missing key" }, 400);
      await store.delete(key);
      return json({ ok: true });
    }

    return json({ error: "method not allowed" }, 405);
  } catch (err) {
    return json({ error: String(err) }, 500);
  }
};
