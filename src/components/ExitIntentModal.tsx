import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Download, CheckCircle2 } from "lucide-react";

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen it this session
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the window
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-primary/95 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-secondary rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(97,64,81,0.3)] border border-primary/5"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-8 right-8 text-primary/40 hover:text-primary transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="bg-accent p-12 text-secondary flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-8">
                    <Download className="text-secondary" />
                  </div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">
                    Wait! <br />
                    Don't leave <br />
                    empty handed.
                  </h2>
                  <p className="text-secondary/70 font-medium leading-relaxed">
                    Get our "90-Day Scaling Blueprint" used by the top 1% of digital agencies to dominate their niche.
                  </p>
                </div>

                <div className="space-y-4 pt-8 border-t border-secondary/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-secondary/40" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">Data-Driven Strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-secondary/40" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">AD Copy Hacks</span>
                  </div>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center bg-secondary">
                {!isSubmitted ? (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black uppercase tracking-tighter">Enter your email</h3>
                      <p className="text-primary/60 text-sm font-medium">We'll send the PDF directly to your inbox. No spam, just value.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
                        <input
                          type="email"
                          required
                          placeholder="you@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-primary/5 border border-primary/10 rounded-2xl py-5 pl-16 pr-6 focus:outline-none focus:border-accent text-primary font-medium transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-primary text-secondary py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                      >
                        Send me the blueprint
                        <ArrowRight size={16} className="text-accent" />
                      </button>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-accent text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">It's on the way!</h3>
                    <p className="text-primary/60 font-medium">Check your inbox for the blueprint. Let's build something massive.</p>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="text-accent font-bold uppercase tracking-widest text-[10px] hover:underline pt-4"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Internal icons needed
function ArrowRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
