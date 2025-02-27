"use client";

import { Plug, ImagePlus, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import cx from "classnames";
import classNames from "classnames";
import { Input } from "@/components/ui/input";

export default function ChatInput() {
  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative overflow-hidden h-16 w-16 rounded-full">
              <img
                alt="logo"
                loading="lazy"
                className="relative h-full w-full object-cover"
                src="/logo.png"
              />
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100">
                How can I help you?
              </p>
              {/* <p className="text-sm text-gray-500 mt-1">
                Usage: <span className="font-bold">2/2 Chats</span>
              </p> */}
              <Link href="/manage-plan" className="">View Usage</Link>
            </div>
          </div>
          {/* <Button
            variant="outline"
            className="gap-2 text-gray-700 border-gray-200 hover:bg-gray-50"
          >
            <Plug className="h-4 w-4" />
            <span>Connect your API Key</span>
          </Button> */}
        </div>
      </div>

      {/* Chat Input Fixed at Bottom */}
      <div className="w-full px-4 pb-4">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-t from-dark to-transparent" />
          <div className="relative w-full bg-white rounded-md border shadow-sm mb-6 font-dmSans">
            <Input
              type="url"
              placeholder="Enter YouTube URL..."
              className="w-full sm:w-500 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-full"
             />
            {/* <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 hover:bg-gray-100 rounded-full"
              >
                <ImagePlus className="h-5 w-5 text-gray-500" />
              </Button>
              <Button
                size="icon"
                className="h-9 w-9 bg-rose-600 hover:bg-rose-700 rounded-full"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div> */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <Button
                size="icon"
                className="h-9 w-9 hover:bg-gray-100 rounded-full"
              >
                <Send className="h-1 w-2 text-gray-500" />
              </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
