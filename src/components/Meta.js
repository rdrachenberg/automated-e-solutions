import Head from "next/head";
import { randomBytes } from "crypto";



export default function Meta() {
    const nonce = randomBytes(128).toString('base64');
    return (
        <Head nonce={nonce}>
            <title>Automated Ecommerce Investments</title>
            <link rel='icon' type='image/x-icon' href='/favicon.ico?v=1'/>
        </Head>
    )
}