import Header from "@/components/containers/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Header />
      <body className="bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
