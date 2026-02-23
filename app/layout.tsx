import type { Metadata } from "next";
import "./layout.css";
import { Racing_Sans_One } from "next/font/google";
export const metadata: Metadata = {
  title: "RR's Dealership",
  description: "A car dealership that sells cars and provides good moments.",
};
const racingSansOne = Racing_Sans_One({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={racingSansOne.className}>
      <body >{children}</body>
    </html>
  );
}
