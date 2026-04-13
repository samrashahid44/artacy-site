import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12 pt-20 bg-secondary">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <h2 className="text-[25vw] font-black outline-text opacity-[0.03] leading-none uppercase">
          Artacy
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">
              Real Growth. No Fluff.
            </span>
          </div>

          <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.85] text-primary uppercase">
            We build <br />
            <span className="text-accent bg-primary px-4 inline-block -rotate-1">brands</span> <br />
            people buy.
          </h1>

          <p className="text-xl text-primary/80 max-w-lg leading-relaxed font-medium">
            Most agencies sell you "engagement" and pretty pictures. We sell you revenue. We handle the strategy and the ads so you can focus on running your business.
          </p>

          <div className="flex flex-wrap gap-6 pt-6">
            <motion.button 
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-secondary px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-transform"
            >
              Let's talk growth
              <ArrowRight className="w-4 h-4 text-accent" />
            </motion.button>
            <motion.button 
              whileHover={{ x: 5 }}
              className="group flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs"
            >
              See our results
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 perspective-1000">
            <div className="curator-notch overflow-hidden aspect-[4/5] shadow-[40px_40px_0px_0px_rgba(97,64,81,1)] rotate-y-12">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://picsum.photos/seed/agency/800/1000" 
                alt="High-end creative workspace"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Floating Stat Card */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-12 -left-12 bg-primary p-10 rounded-2xl shadow-2xl max-w-[240px] z-20"
          >
            <div className="text-accent font-black text-6xl leading-none">10X</div>
            <p className="text-secondary/60 text-[10px] uppercase tracking-widest mt-4 leading-relaxed font-bold">
              Average ROAS for our ECOM clients in 2024. No guessing, just math.
            </p>
          </motion.div>

          {/* Decorative Vertical Text */}
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block">
            <span className="text-vertical text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20">
              EST. 2024 — ARTACY DIGITAL
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
