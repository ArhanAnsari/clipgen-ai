import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft } from "lucide-react";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 p-4">
      <div className="flex flex-col items-center space-y-8 max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="relative mb-4">
          <Search className="w-24 h-24 text-gray-900/20 stroke-[1.5]" />
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            We couldn't find the page you're looking for. 
            The page might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Link href="/">
            <Button className="flex items-center gap-2 px-6 py-5 rounded-lg shadow-sm transition-all duration-200">
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="px-6 py-5 border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-200">
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Error Reference */}
        <p className="text-sm text-gray-500 mt-8 font-mono">
          Error Reference: 404_PAGE_NOT_FOUND
        </p>
      </div>
    </div>
  );
}