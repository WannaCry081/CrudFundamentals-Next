import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CRUD Fundamentals",
  description: "A simple next app showcasing basic CRUD functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
