import type { NextApiRequest, NextApiResponse } from "next";

import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);

//  https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { url, fileType } = req.body;

    if (!url || !fileType) {
      return res.status(404).send({ error: "Incomplete request body" });
    }

    const fileName = url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("?"));
    const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
  }
  return res.status(405).send({ error: "Unauthorised request method." });
}
