import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi, I'm Neeraj - I Build the Web",
  description: "Hi, I'm Neeraj — a passionate Full-Stack Developer skilled in the MERN stack. I specialize in building scalable, responsive web applications that solve real-world problems. From crafting sleek frontends to architecting powerful backends, I bring ideas to life through clean and efficient code.",
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
