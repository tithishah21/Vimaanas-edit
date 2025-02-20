import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";

export const metadata: Metadata = {
  title: "Vimaanas Inc.",
  description: "Vimaanas Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
