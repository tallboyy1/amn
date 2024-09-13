import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/components/navbar/navbar";
import Footer from "./ui/components/footer/footer";

export const metadata: Metadata = {
  title: "Kind Hearts Service LLC",
  description: "Transforming Lives, By Transforming Minds.",
  keywords: "",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Aligning Minds Network",
    description: "Transforming Lives, By Transforming Minds.",
    url: "https://aligningmn.vercel.app",
    siteName: "Aligning Minds Network",
    images: [
      {
        url: "/og.png",
        alt: "Aligning Minds Network",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aligning Minds Network",
    description: "ransforming Lives, By Transforming Minds.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar /> 
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
