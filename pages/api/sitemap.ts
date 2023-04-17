import { glob } from "glob";
import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = "https://shravansamsi.com";

const pagesDir = "pages/**/*.tsx";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let staticPaths = await glob.sync(pagesDir);

  staticPaths = staticPaths
    .map((path) => path.replace("pages\\", ""))
    .filter((path) => !path.startsWith("["))
    .filter((path) => !path.startsWith("_"))
    .filter((path) => !path.startsWith("404"))
    .map((path) => path.replace(".tsx", "").replace("index", ""))
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  console.log(staticPaths);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // Generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      ${staticPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>`;
  try {
    res.end(xml);
  } catch (error) {
    res.send(error);
  }
}
