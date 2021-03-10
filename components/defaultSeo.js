import React from "react";
import Head from "next/head";

export default function DefaultSeo({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogType,
  twitterTitle,
  twitterDescription,
  twitterUrl,
  twitterImage,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:url" content={twitterUrl} />
      <meta name="twitter:image" content={twitterImage} />
    </Head>
  );
}
