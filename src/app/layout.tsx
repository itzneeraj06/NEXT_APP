import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neeraj Chouhan | Full Stack Developer",
  description: "Neeraj Chouhan — a passionate Full-Stack Developer skilled in the MERN stack. I specialize in building scalable, responsive web applications that solve real-world problems. From crafting sleek frontends to architecting powerful backends, I bring ideas to life through clean and efficient code.",
  keywords: [
    "Neeraj",
    "Neeraj Chouhan",
    "neerajchouhan",
    "Neeraj Developer",
    "Neeraj Portfolio",
    "Full-Stack Developer",
    "MERN Developer",
    "Web Developer India",
    "Portfolio Website Developer",
  ],
  authors: [{ name: "Neeraj Chouhan" }],
  creator: "Neeraj Chouhan",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
