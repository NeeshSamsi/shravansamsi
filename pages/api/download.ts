import type { NextApiRequest, NextApiResponse } from "next";

import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);

//  https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url) {
    return res.status(404).send({ error: "No url provided" });
  }

  const fileName = url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("?"));
  const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);

  const picRes = await fetch(url);

  console.log(
    picRes.headers.get("content-type"),
    picRes.headers.get("content-length")
  );

  const imageBlob = await picRes.blob();

  const chunks: any[] = [];

  for (const chunk of imageBlob.stream().read()) {
    chunks.push(chunk);
  }

  res.setHeader(
    "content-type",
    picRes.headers.get("content-type") || `image/${fileExtension}`
  );
  res.setHeader(
    "content-length",
    picRes.headers.get("content-length") || chunks.length
  );
  res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);

  res.write(Uint8Array.from(chunks));

  return res.status(200).end();
}
