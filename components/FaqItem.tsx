import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "lucide-react";

export default function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: any, onClick: any }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-b border-zinc-100 last:border-none"
      >
        <motion.button
          className="w-full py-6 flex justify-between items-center text-left"
          onClick={onClick}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <span className="text-lg font-medium text-black">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDownIcon className="h-5 w-5 text-zinc-800 relative" />
          </motion.div>
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                transition: {
                  height: {
                    duration: 0.3,
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 0.1
                  }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.3,
                  },
                  opacity: {
                    duration: 0.2
                  }
                }
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                className="pb-6 text-zinc-600"
              >
                {answer}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };