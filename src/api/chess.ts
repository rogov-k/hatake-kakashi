import type { VercelRequest, VercelResponse } from '@vercel/node';
import { execFile } from "child_process";
import path from "path";

const scriptPath = path.join(process.cwd(), "scripts/chess/bin/chess");

export default function fetch(request: VercelRequest, response: VercelResponse) {
  if (request.method === 'GET') {
    execFile("bash", [scriptPath], (_error, stdout) => {
      response.status(200).send(stdout);
    });
  } else {
    response.status(405).end();
  }
}
