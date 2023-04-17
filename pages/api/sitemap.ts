import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = "https://shravansamsi.com";

const staticPaths = fs
  .readdirSync("pages")
  .filter((staticPage) => {
    return !["api", "_app.tsx", "_document.tsx", "404.tsx"].includes(
      staticPage
    );
  })
  .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath
      .replace(".tsx", "")
      .replace("index", "")}`;
  });

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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

  res.end(xml);
}
