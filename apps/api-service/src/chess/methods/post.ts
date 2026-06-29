import type {VercelRequest, VercelResponse} from '@vercel/node';
import {execFile} from "child_process";
import path from "path";

const scriptPath = path.join(process.cwd(), "scripts/chess/bin/chess");
export default function postHandler(req: VercelRequest, res: VercelResponse) {
  execFile(
    "bash",
    [scriptPath, req.body],
    (_error, _stdout) => {
      res.status(200).json("stdout");
    }
  );
}
