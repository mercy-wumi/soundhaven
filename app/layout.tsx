'use client';

import { WalletContextProvider } from "@/context/WalletContextProvider";
import { Provider } from "react-redux";
import { store } from "@/store";

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const metadata = {
//   title: "Soundhaven - Enjoy the beauty of music",
//   description: "A music dapp built on the solana blockchain by Mercy Adams :)",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <WalletContextProvider>
          {children}
          </WalletContextProvider>
        </Provider>
      </body>
    </html>
  );
}
