import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import Footer from "@/app/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deli Asya - Thai Food Wholesale",
  description: "Thai food and goods importer, wholesaler, and distributor",
};

const Navigation = dynamic(() => import("@/app/components/Navigation"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const isAdmin = headersList.get("x-is-admin");
  const pathname = headersList.get("x-url") || "";
  const isAdminRoute = pathname.includes("/admin");

  return (
    <html lang="en">
      <body className={`${inter.className} ${!isAdminRoute ? 'pt-20' : ''}`}>
        {!isAdminRoute && <Navigation />}
        <main>{children}</main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
