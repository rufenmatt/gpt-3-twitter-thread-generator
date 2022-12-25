import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3-powered Twitter thread creator" key="title"/>
        <meta property="og:description" content="Create engaging and concise Twitter threads." key="description"/>
        <meta
          property="og:image"
          content=""
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
