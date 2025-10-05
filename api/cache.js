export default async function handler(req, res) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return res.status(500).json({ error: "Redis credentials not set" });
  }

  if (req.method === "POST") {
    const { key, value } = req.body;

    // Сохраняем значение в Redis
    await fetch(`${redisUrl}/set/${key}/${encodeURIComponent(value)}`, {
      headers: { Authorization: `Bearer ${redisToken}` }
    });

    res.json({ ok: true, set: { key, value } });
  } else if (req.method === "GET") {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
    const key = searchParams.get("key");

    // Достаём из Redis
    const response = await fetch(`${redisUrl}/get/${key}`, {
      headers: { Authorization: `Bearer ${redisToken}` }
    });
    const data = await response.json();

    res.json({ key, value: data.result });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

