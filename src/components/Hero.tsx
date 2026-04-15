import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yImage = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12 pt-20 bg-secondary">
      {/* Background Decorative Text */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
      >
        <h2 className="text-[25vw] font-black outline-text opacity-[0.03] leading-none uppercase">
          Artacy
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="lg:col-span-7 space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">
                Real Growth. No Fluff
              </span>
            </div>

            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.85] text-primary uppercase mt-10 mb-10">
              We build <br />
              <span className="text-accent bg-primary px-4 inline-block -rotate-1 text-secondary">brands</span> <br />
              people buy.
            </h1>

            <p className="text-xl text-primary/80 max-w-lg leading-relaxed font-medium">
              Most agencies sell you "engagement" and pretty pictures. We sell you revenue. We handle the strategy and the ads so you can focus on running your business.
            </p>

            <div className="flex flex-wrap gap-6 pt-10">
              <motion.a
                href="https://calendly.com/artacy-net/artacy-free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-secondary px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-transform cursor-pointer"
              >
                Let's talk growth
                <ArrowRight className="w-4 h-4 text-accent" />
              </motion.a>
              <motion.a
                href="#results"
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs cursor-pointer"
              >
                See our results
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          style={{ y: yImage }}
          className="lg:col-span-5 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative z-10 perspective-1000">
            <div className="curator-notch bg-primary/20 backdrop-blur-sm flex items-center justify-center overflow-hidden aspect-[4/5] shadow-[40px_40px_0px_0px_rgba(139,106,123,0.3)] border border-primary/10 rotate-y-12 relative group">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,106,123,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,106,123,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                  className="relative z-10 text-accent group-hover:scale-110 transition-transform duration-700"
                >
                  <motion.div
                    animate={{ y: [0, -20, 0], scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <TrendingUp className="w-48 h-48 drop-shadow-[0_0_30px_rgba(139,106,123,0.4)] md:w-64 md:h-64" strokeWidth={1} />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-12 -left-12 bg-primary p-10 rounded-2xl shadow-2xl max-w-[240px] z-20"
            >
              <div className="text-accent font-black text-6xl leading-none">100%</div>
              <p className="text-secondary/60 text-[10px] uppercase tracking-widest mt-4 leading-relaxed font-bold">
                Client retention. No guessing, just results.
              </p>
            </motion.div>

            {/* Decorative Vertical Text */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block">
              <span className="text-vertical text-[10px] font-bold uppercase tracking-[0.5em] text-primary/20">
                EST. 2024 — ARTACY DIGITAL
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
