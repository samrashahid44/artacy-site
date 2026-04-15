import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The floating toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-accent text-primary rounded-full shadow-2xl flex items-center justify-center hover:shadow-[0_0_30px_rgba(97,64,81,0.5)] transition-all"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-secondary" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="w-6 h-6 text-secondary p-0.5" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulsing ring behind the button */}
        {!isOpen && (
           <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-50" />
        )}
      </motion.button>

      {/* The Widget Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-6 z-50 w-80 bg-primary border border-secondary/10 rounded-3xl shadow-2xl overflow-hidden glass-nav"
          >
            <div className="p-6 bg-secondary text-primary">
              <h3 className="font-black uppercase tracking-tighter text-xl">Let's scale.</h3>
              <p className="text-xs mt-2 font-medium opacity-80 leading-relaxed">
                Ready to stop guessing and start running profitable campaigns?
              </p>
            </div>
            <div className="p-6 space-y-4">
              <a
                href="https://calendly.com/artacy-net/artacy-free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent text-secondary px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-between hover:bg-accent/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book a call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@artacy.net"
                className="w-full border border-secondary/20 text-secondary px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center hover:bg-secondary/10 transition-colors"
              >
                Email us instead
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
