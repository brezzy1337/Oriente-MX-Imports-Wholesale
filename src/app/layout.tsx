import type { Metadata } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
// import "../app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deli Asya - Thai Food Wholesale",
  description: "Thai food and goods importer, wholesaler, and distributor",
};

const Navigation = dynamic(() => import("@/components/Navigation"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Deli Asiya</title>
      </Head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer>
          <p>@ 2024 Delu Asiya. All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}
