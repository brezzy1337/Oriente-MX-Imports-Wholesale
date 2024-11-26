import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import { TRPCProvider } from "@/app/api/_trpc/providers/client";
import Providers from './api/qureyClient/provider';
import React from 'react';

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
          <Providers>
            <ClientLayout>{children}</ClientLayout>
          </Providers>
        </TRPCProvider>
      </body>
    </html>
  );
}
