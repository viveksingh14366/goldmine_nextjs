import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ee3158" />
        <link rel="icon" type="image/png" href="../favicon.png" />
        <meta name="msapplication-navbutton-color" content="#ee3158" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="../favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-transcluent" />
        <title>Goldmine Advertising Limited | Creative Advertising Agency | Digital Advertising Agency | BFSI </title>
        <meta name="title" content="Creative Advertising Agency In Mumbai | Branding & Design Company | Goldmine Advertising Limited" />
        <meta name="description" content="We are an Experienced and Mid-Sized
        creative, social media, and Integrated Digital Advertising Agency
        for the top Automobile, Agriculture, Banking, Financial, and Insurance Industries in Mumbai. We work each day to deliver your brand message that is creative, insightful, and impactful." />
        <meta name="keywords" content="digital, social media, advertising, india, mumbai, branding, media buying and planning, ad agency, btl activation, design, exhibitions, video development, production, digital marketing" />
        <link rel="canonical" href="http://www.goldmineltd.com" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          type="text/css"
          href={'slick/slick.css'} />
        <link
          rel="stylesheet"
          type="text/css"
          href={'slick/slick-theme.css'} />
      </Head>
      <body>
        <NextScript />
      </body>
    </Html>
  )
}
