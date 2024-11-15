import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import { TRPCProvider } from "@/app/api/_trpc/providers/client";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deli Asya - Thai Food Wholesale",
  description: "Thai food and goods importer, wholesaler, and distributor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCProvider>
        <ClientLayout>{children}</ClientLayout>
        </TRPCProvider>
      </body>
    </html>
  );
}
