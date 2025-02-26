import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  isPopular,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-white p-8 shadow-lg flex flex-col border-2 border-gray-200",
        isPopular && "border-2 border-rose-500 shadow-rose-100"
      )}
    >
      {isPopular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-1 bg-rose-500 text-white text-sm font-medium rounded-full">
          Recommended
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-500 text-sm">{description}</p>
      </div>

      <div className="mb-5">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {price !== "Free" && <span className="text-gray-500 ml-2">/month</span>}
      </div>

      <ul className="mb-8 space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-rose-500 flex-shrink-0" />
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={cn(
          "w-full relative z-10",
          isPopular
            ? "bg-rose-600 hover:bg-rose-700"
            : "bg-gray-900 hover:bg-gray-800"
        )}
      >
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </div>
  );
}
