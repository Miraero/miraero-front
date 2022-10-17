import Head from "next/head";

const HeadMeta = ({ title }) => {
  return (
    <Head>
      <title>{title || "미래로 보내는 편지"}</title>
      <meta
        name="description"
        content="미래의 당신에게 전할 이야기가 있나요?"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "미래로 보내는 편지"} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://miraero-front.azurewebsites.net/"
      />
      <meta property="og:image" href="/asset/og_img" />
      <meta property="og:article:author" content="미래로 보내는 편지" />
      <link rel="icon" href="/asset/favicon_96px.png" />
    </Head>
  );
};

export default HeadMeta;
