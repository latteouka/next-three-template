import { Contents } from "@/gl/parts/contents";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import { useLayoutEffect } from "react";
import { Noto_Sans_JP } from "next/font/google";
const font = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--noto-font",
});

export default function App({ Component, pageProps }: AppProps) {
  useLayoutEffect(() => {
    new Contents(document.querySelector(".l-canvas"));
  }, []);
  return (
    <main className={font.variable}>
      <Component {...pageProps} />
    </main>
  );
}
