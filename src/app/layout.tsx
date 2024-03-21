import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "HSL Timetables challenge",
   description:
      "A small challenge website for university students to play around with.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fi">
         <body className={inter.className}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
