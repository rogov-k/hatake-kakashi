import type { VercelRequest, VercelResponse } from '@vercel/node';
import {Pastebin} from "pastedeno";
import { RandomOrgClient } from '@randomorg/core';

let roc = new RandomOrgClient(process.env.RANDOM_API_KEY!);
const pastebin: Pastebin = new Pastebin({api_dev_key: process.env.PASTEBIN_API_DEV_KEY});

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const {key, value} = req.body;

    return res.json({ok: true, set: {key, value}});
  } else {
    res.status(405).end();
  }
}
