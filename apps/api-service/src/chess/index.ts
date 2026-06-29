import type { VercelRequest, VercelResponse } from '@vercel/node';
import postHandler from './methods/post.js';

export default function handler(req: VercelRequest, res: VercelResponse) {
  switch (req.method) {
    case 'POST':
      return postHandler(req, res);

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
}
