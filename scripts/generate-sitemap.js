import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const baseUrl = "https://ultramotors.pro";

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  // { url: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: baseUrl });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  fs.writeFileSync("public/sitemap.xml", xml);
  console.log("✅ sitemap.xml создан");
}

generateSitemap();
