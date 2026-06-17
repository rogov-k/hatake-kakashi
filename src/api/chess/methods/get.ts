import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function getHandler(_req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ method: 'GET', ok: true });
}
