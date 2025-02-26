import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureCard({
  image,
  title,
  index,
}: {
  image: any;
  title: any;
  index: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.2,
        },
      }}
      viewport={{ once: true }}
      className="rounded-3xl bg-rose-600 p-8 flex flex-col h-[420px] relative overflow-hidden group"
    >
      <div className="flex-1 mb-auto relative z-10">
        <div className="h-48 flex items-center justify-center">
          <Image
            src={image}
            alt="Feature visualization"
            width={360}
            height={270}
            className="object-contain rounded-lg opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>
      </div>

      <div className="mt-auto relative z-10">
        <h3 className="text-2xl font-bold mb-2 text-white font-spaceGrotesk">
          {title}
        </h3>
        <Link href="/sign-up">
          <motion.button
            className="mt-4 p-3 rounded-full bg-white hover:bg-gray-100 transition-colors"
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <PlusIcon className="h-5 w-5" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
