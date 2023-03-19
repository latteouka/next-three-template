import { Contents } from "@/gl/parts/contents";
import "@/styles/style.scss";
import type { AppProps } from "next/app";
import { useLayoutEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useLayoutEffect(() => {
    new Contents(document.querySelector(".l-canvas"));
  }, []);
  return <Component {...pageProps} />;
}
