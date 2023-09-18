import { randomBytes } from 'crypto'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const nonce = randomBytes(128).toString('base64')
  const csp = `object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'`

  return (
    <Html lang="en">
      <Head nonce={nonce}>
        <meta httpEquiv='Content-Security-Policy' content={csp} />
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  )
}
