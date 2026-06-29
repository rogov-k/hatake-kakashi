import type { VercelRequest, VercelResponse } from '@vercel/node';
import getHandler from "./methods/get.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  switch (req.method) {
    case 'GET':
      return getHandler(req, res);

    default:
      res.status(405).json({error: 'Method Not Allowed'});
  }
}
