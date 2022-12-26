import Head from "next/head";

interface HeadProps {
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

export default function HeadComponent({
  title,
  description,
  imageUrl,
  path,
}: HeadProps) {
  const domain = "shravansamsi";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={`${domain}/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Meta Tags */}
      <meta property="twitter:domain" content={domain} />
      <meta property="twitter:url" content={`${domain}/${path}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
