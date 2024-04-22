import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StartBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ronin-verse",
  description: "Portfolio@Hrishikesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{duration:2000}}
        
        />
        <StarsCanvas />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
