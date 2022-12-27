import type { NextApiRequest, NextApiResponse } from "next";

//  https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url) {
    return res.status(404).send({ error: "No url provided" });
  }

  let fileWithID;

  if (url.includes("?")) {
    fileWithID = url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("?"));
  } else {
    fileWithID = url.slice(url.lastIndexOf("/") + 1);
  }

  const fileName = fileWithID.slice(fileWithID.indexOf("_") + 1);

  const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);

  console.log(fileName);

  //@ts-ignore
  const picRes = await fetch(url);

  const imageBlob = await picRes.blob();

  const chunks: any[] = [];

  // @ts-ignore
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
