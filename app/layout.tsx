import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5B21F4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Rohit Rambade | Software Engineer & Full-Stack Developer",
  description:
    "Full-Stack .NET Developer with 2 years of hands-on experience building scalable, high-performance web applications using C#, ASP.NET Core, React.js, and SQL Server.",
  keywords: [
    "Rohit Rambade",
    "Rohit Narayan Rambade",
    "Full Stack Developer",
    ".NET Developer",
    "ASP.NET Core",
    "C# Developer",
    "React Developer",
    "TypeScript",
    "Software Engineer",
    "Mumbai Developer",
    "Thane",
  ],
  authors: [{ name: "Rohit Narayan Rambade" }],
  creator: "Rohit Rambade",
  metadataBase: new URL("https://rohit-rambade.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohit-rambade.dev",
    title: "Rohit Rambade | Software Engineer & Full-Stack Developer",
    description:
      "Full-Stack .NET Developer with hands-on experience in C#, ASP.NET Core, React.js, and SQL Server.",
    siteName: "Rohit Rambade Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Rambade | Software Engineer & Full-Stack Developer",
    description:
      "Full-Stack .NET Developer with hands-on experience in C#, ASP.NET Core, React.js, and SQL Server.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-surface-bg text-text-main font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
