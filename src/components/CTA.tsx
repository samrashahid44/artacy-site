import { motion } from "motion/react";
import { PhoneCall, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 lg:px-12 pb-40">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden bg-primary p-12 lg:p-32 relative"
      >
        {/* Background Decorative Text */}
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none">
          <h2 className="text-[20vw] font-black text-secondary/[0.03] leading-none uppercase">
            Scale
          </h2>
        </div>

        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6">
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">Ready to grow?</span>
            <h2 className="text-6xl md:text-8xl font-black text-secondary leading-[0.85] uppercase tracking-tighter">
              Stop guessing. <br />
              <span className="outline-text">Start scaling.</span>
            </h2>
          </div>
          
          <p className="text-secondary/60 text-xl max-w-xl font-medium leading-relaxed">
            We don't work with everyone. We only work with brands we know we can scale. Let's see if you're one of them.
          </p>

          <div className="flex flex-wrap gap-10 items-center pt-6">
            <motion.button 
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-secondary px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <div className="flex items-center gap-6 text-secondary group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-accent group-hover:text-secondary transition-all">
                <PhoneCall size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Direct Line</p>
                <span className="text-2xl font-black tracking-tighter">+971 50 123 4567</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
