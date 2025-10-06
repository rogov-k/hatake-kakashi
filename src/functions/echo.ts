import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      ok: true,
      hash: process.env.VERCEL_DEPLOYMENT_ID ?? 'local'
    });
  } else {
    res.status(405).end();
  }
}
