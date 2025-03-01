"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  ChartLine,
  LineChart,
  Newspaper,
  Timer
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { name: "Product", hash: "#product" },
    { name: "Pricing", hash: "#pricing" },
    { name: "FAQ", hash: "#faq" },
  ];

  const isLinkActive = (hash: string) => {
    if (hash === pathname) return true;
    return false;
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string
  ) => {
    e.preventDefault();
  
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const target = document.querySelector(hash);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 30,
          behavior: "smooth",
        });
      }
    }
  };
  

  return (
    <header className="relative backdrop-blur-md bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Hedge AI Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-medium text-xl text-black font-spaceGrotesk">
            ClipGen AI
          </span>
        </Link>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.hash}
                onClick={(e) => handleScroll(e, link.hash)}
                className={`text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                  isLinkActive(link.hash)
                    ? "text-black font-medium bg-gray-200"
                    : "text-black hover:text-black hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Sign Up Button - Always visible when user is not signed in*/}
        <SignedOut>
        <Button asChild>
          <Link href="/sign-up">
            Sign Up
          </Link>
        </Button>
        </SignedOut>

        <div className="flex items-center gap-4">
        <SignedIn>
            <Link href="manage-plan">
            <Button>
              Manage Plan
            </Button>
            </Link>
          <div>
            <UserButton />
          </div>
        </SignedIn>
        </div>
      </nav>
    </header>
  );
}