import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function Banner() {
  return (
    <Alert variant="default" className="relative border-none bg-rose-600 rounded-none py-3 font-inter">
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full relative">
          <AlertDescription className="flex items-center justify-center flex-wrap gap-4 text-white">
            <p className="text-sm">
              This project was built during Sonny Sangha's 2025 <Link href="https://www.papareact.com/challenge" target="_blank" className="text-gray-100 underline">AI Agent SaaS Challenge</Link>
            </p>
            
          </AlertDescription>
        </div>
      </div>
    </Alert>
  )
}