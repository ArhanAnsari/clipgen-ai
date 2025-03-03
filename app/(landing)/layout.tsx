import type { Metadata } from "next";
import Banner from "@/components/Banner";
//import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Content Creator for YouTubers | ClipGen AI",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Banner />
      {/*<Navbar />*/}
      <main>{children}</main>
      <Footer />
    </>
  );
}
