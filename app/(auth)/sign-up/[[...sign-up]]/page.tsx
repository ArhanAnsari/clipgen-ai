"use client";

import PasskeyButton from "@/components/PasskeyButton";
import { cn } from "@/lib/utils";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-in";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  GalleryVerticalEnd,
  Github,
  LoaderIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SignUpPage() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "/landing/transcript-feature.png",
      text: "All I need to do is upload a video and the AI will generate a transcript.",
      author: "Arhan Aansari",
      role: "Small YouTube Creator",
    },
    {
      image: "/landing/analysis-feature.png",
      text: "All my team needed to do was focus on the content and let the AI handle the rest.",
      author: "Jessica Kumar",
      role: "Professional Video Editor",
    },
  ];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid min-h-svh lg:grid-cols-2 h-screen overflow-hidden">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium font-spaceGrotesk">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            ClipGen AI
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs space-y-8 font-spaceGrotesk">
            <div id="clerk-captcha" />

            <SignUp.Root>
              {/* Start Step */}
              <SignUp.Step name="start" className="w-full space-y-8">
                {/* Logo */}
                <div className="flex justify-center">
                  <img
                    src="/logo.png"
                    alt="ClipGen AI"
                    className="h-10 rounded-full"
                  />
                </div>

                {/* Header */}
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Create an account
                  </h1>
                  <p className="text-gray-600">Join ClipGen AI today</p>
                </div>

                <Clerk.GlobalError className="text-sm text-red-500 text-center" />

                {/* Email Field */}
                <div className="space-y-2">
                  <Clerk.Field name="emailAddress">
                    <Clerk.Label className="block text-sm font-medium text-gray-700 mb-2">
                      Email address
                    </Clerk.Label>
                    <Clerk.Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 text-sm text-gray-900 rounded-md border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
                    />
                    <Clerk.FieldError className="mt-1 text-sm text-rose-600" />
                  </Clerk.Field>
                </div>

                <SignUp.Action
                  submit
                  onClick={() => console.log("Button clicked")}
                  className="w-full py-2 text-sm text-white bg-rose-600 hover:bg-rose-700 rounded-md font-medium"
                >
                  Sign Up
                </SignUp.Action>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">Or</span>
                  </div>
                </div>

                {/* OAuth Buttons */}
                <div className="space-y-3">
                  <Clerk.Connection
                    name="google"
                    className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Clerk.Loading scope="provider:google">
                      {(isLoading) =>
                        isLoading ? (
                          <LoaderIcon className="size-4 animate-spin" />
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <path d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z" />
                            </svg>
                            Sign up with Google
                          </>
                        )
                      }
                    </Clerk.Loading>
                  </Clerk.Connection>
                  <Clerk.Connection
                    name="github"
                    className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Clerk.Loading scope="provider:github">
                      {(isLoading) =>
                        isLoading ? (
                          <LoaderIcon className="size-4 animate-spin" />
                        ) : (
                          <>
                            <Github className=" size-4" />
                            Sign up with GitHub
                          </>
                        )
                      }
                    </Clerk.Loading>
                  </Clerk.Connection>
                </div>

                {/* Terms and Policy */}
                <p className="text-xs text-center text-gray-500">
                  By signing up for an account you agree to the{" "}
                  <a href="#" className="text-rose-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-rose-600 hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>

                {/* Login Link */}
                <p className="text-sm text-center text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="/sign-in"
                    className="text-rose-600 font-medium hover:underline"
                  >
                    Sign In
                  </a>
                </p>
              </SignUp.Step>

              {/* Verifications Step */}
              <SignUp.Step name="verifications" className="w-full space-y-8">
                {/* Header */}
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Verify your email
                  </h1>
                  <p className="text-gray-600">
                    Enter the code sent to your email
                  </p>
                </div>

                <Clerk.GlobalError className="text-sm text-red-500 text-center" />

                <SignUp.Strategy name="email_code">
                  <div className="space-y-2">
                    <Clerk.Field name="code">
                      <Clerk.Label className="block text-sm font-medium text-gray-700 mb-2">
                        Verification code
                      </Clerk.Label>
                      <Clerk.Input
                        type="otp"
                        placeholder="Enter code"
                        autoSubmit
                        className="w-full flex justify-between gap-2 has-[:disabled]:opacity-50"
                        render={({ value, status }) => (
                          <div
                            data-status={status}
                            className={cn(
                              "relative flex size-12 items-center justify-center rounded-lg border border-gray-300 bg-white text-lg font-medium text-gray-900 shadow-sm transition-all",
                              {
                                "ring-2 ring-rose-500 ring-offset-2":
                                  status === "cursor" || status === "selected",
                              }
                            )}
                          >
                            {value}
                            {status === "cursor" && (
                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="h-5 w-px animate-caret-blink bg-rose-600" />
                              </div>
                            )}
                          </div>
                        )}
                      />
                      <Clerk.FieldError className="mt-1 text-sm text-rose-600" />
                    </Clerk.Field>
                  </div>

                  {/* Verify Button */}
                  <SignUp.Action
                    submit
                    className="w-full py-2 text-sm text-white bg-rose-600 hover:bg-rose-700 rounded-md font-medium"
                  >
                    Verify
                  </SignUp.Action>
                </SignUp.Strategy>

                {/* Login Link */}
                <p className="text-sm text-center text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="/sign-in"
                    className="text-rose-600 font-medium hover:underline"
                  >
                    Sign In
                  </a>
                </p>
              </SignUp.Step>
              <SignUp.Step name="sso-callback">
                <div className="w-full flex flex-col items-center justify-center space-y-8 py-8">
  {/* Logo */}
  <div className="flex justify-center">
    <img src="/logo.png" alt="ClipGen AI" className="h-10 rounded-full" />
  </div>

  {/* Header */}
  <div className="space-y-2 text-center">
    <h1 className="text-2xl font-semibold text-gray-900">Verifying your identity</h1>
    <p className="text-gray-600">Please wait while we complete the sign-in process</p>
  </div>

  {/* Loading Spinner */}
  <div className="flex justify-center py-6">
    <div className="relative h-16 w-16">
      {/* Outer circle animation */}
      <div className="absolute inset-0 rounded-full border-4 border-t-rose-600 border-r-rose-300 border-b-rose-200 border-l-rose-400 animate-spin"></div>
      
      {/* Inner circle */}
      <div className="absolute inset-3 rounded-full bg-white"></div>
      
      {/* Center dot */}
      <div className="absolute inset-6 rounded-full bg-rose-600"></div>
    </div>
  </div>

  {/* Status message */}
  <p className="text-sm text-gray-600 animate-pulse">
    Securely connecting your account...
  </p>

  {/* Error message (conditionally rendered) */}
  <Clerk.GlobalError className="text-sm text-red-500 text-center max-w-xs" />

  {/* Help text */}
  <p className="text-xs text-center text-gray-500 max-w-xs mt-8">
    If you're not automatically redirected within a few seconds, please 
    <a href="/sign-in" className="text-rose-600 hover:underline"> return to sign in</a>
  </p>
  </div>
</SignUp.Step>
            </SignUp.Root>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-rose-600 to-rose-700 text-white px-16 py-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Image Container */}
        <div className="relative w-[600px] h-[400px] rounded-2xl shadow-2xl overflow-hidden ring-4 ring-white/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={slides[current].image}
                alt={slides[current].author}
                fill
                className="object-cover opacity-90"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quote Content */}
        <div className="mt-12 max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-medium leading-relaxed font-spaceGrotesk">
                "{slides[current].text}"
              </h2>
              <div className="mt-6 space-y-1">
                <p className="text-lg font-semibold">
                  {slides[current].author}
                </p>
                <p className="text-sm text-white/80">{slides[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
