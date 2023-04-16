import { Contents } from "@/gl/parts/contents";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import { Noto_Sans_JP } from "next/font/google";
import Head from "next/head";
const font = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--noto-font",
});

export default function App({ Component, pageProps }: AppProps) {
  let three = useRef<Contents>();
  useEffect(() => {
    if (three.current) return;
    three.current = new Contents(document.querySelector(".l-canvas"));
  }, []);
  return (
    <main className={font.variable}>
      <Head>
        <title>Next Template</title>
      </Head>
      <canvas className="l-canvas"></canvas>
      <Component {...pageProps} />
    </main>
  );
}
