import { Html, Head, Main, NextScript } from "next/document";

export default function Doucment() {
    return (
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link href="css/globals.css"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <div className="container">
                    <Main />
                    <NextScript />
                </div>
            </body>
        </Html>
    );
}
