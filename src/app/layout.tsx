import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css"

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
  const headersList = headers();
  const isAdmin= headersList.get("x-is-admin");

  return (
    <html lang="en">
      <body className={`${inter.className} ${!isAdmin ? 'pt-20' : ''}`}>
        {!isAdmin && <Navigation />}
        <main>{children}</main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}