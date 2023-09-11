import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import Layout from "@/components/Layout/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}
      </style> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
