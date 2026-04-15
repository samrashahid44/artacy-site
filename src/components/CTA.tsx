import { motion } from "motion/react";
import { PhoneCall, CalendarCheck, Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 lg:px-12 pb-20 md:pb-40 mt-10 md:mt-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden bg-primary shadow-2xl p-8 lg:p-32 relative group"
      >
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-80 pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none transition-transform duration-1000 group-hover:scale-110">
          <h2 className="text-[20vw] font-black text-secondary/[0.04] leading-none uppercase">
            Growth
          </h2>
        </div>

        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-accent animate-pulse font-bold uppercase tracking-[0.4em] text-[10px]">
              <Sparkles size={14} />
              <span>Strictly Limited Slots</span>
            </div>
            <h2 className="text-secondary">
              Let's map out your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary/80">Profit Engine.</span>
            </h2>
          </div>

          <p className="text-secondary/70 text-lg md:text-xl max-w-3xl font-medium leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            Stop wasting your budget on campaigns that don't yield results. Book a <strong className="text-white">100% Free, No-Obligation Growth Strategy Call</strong>. We'll audit your current approach and engineer a clear roadmap to scale your brand aggressively.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center lg:items-center pt-8 justify-center lg:justify-start">
            <motion.a
              href="https://calendly.com/artacy-net/artacy-free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-accent text-secondary px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 hover:shadow-[0_0_40px_rgba(97,64,81,0.5)] border border-accent/50 transition-shadow"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Your Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>

            <div className="flex items-center gap-6 text-secondary/80 group-hover:text-secondary transition-colors cursor-pointer lg:ml-2">
              <div className="w-16 h-16 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all shrink-0">
                <PhoneCall size={22} className="text-secondary" />
              </div>
              <div className="space-y-1 text-left">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Direct Line (UAE)</p>
                <a href="tel:+971567692421" className="text-xl md:text-2xl font-black tracking-tighter hover:text-accent transition-colors block">
                  +971 56 769 2421
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
