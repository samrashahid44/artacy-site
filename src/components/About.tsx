import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-40 px-6 lg:px-12 bg-primary text-secondary overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute -right-20 top-0 text-[400px] font-black text-secondary/[0.02] leading-none select-none pointer-events-none">
        &
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left: Founders Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent/20 rounded-[3rem] blur-2xl group-hover:bg-accent/40 transition-all duration-500" />
                <div className="relative rounded-[3rem] overflow-hidden aspect-[3/4] border border-secondary/10">
                  <img 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    src="https://picsum.photos/seed/founder1/600/800" 
                    alt="Humaira Junaid"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-secondary font-black text-2xl shadow-xl">
                  01
                </div>
              </div>
              <div>
                <p className="font-black text-2xl uppercase tracking-tighter">Humaira Junaid</p>
                <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Creative & Vibe</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 mt-24"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent/20 rounded-[3rem] blur-2xl group-hover:bg-accent/40 transition-all duration-500" />
                <div className="relative rounded-[3rem] overflow-hidden aspect-[3/4] border border-secondary/10">
                  <img 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    src="https://picsum.photos/seed/founder2/600/800" 
                    alt="Samra Fawad"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-secondary font-black text-2xl shadow-xl">
                  02
                </div>
              </div>
              <div>
                <p className="font-black text-2xl uppercase tracking-tighter">Samra Fawad</p>
                <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Strategy & Math</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:sticky lg:top-40 space-y-12"
          >
            <div className="space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">The Anti-Agency</span>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
                We’re not a <br />
                <span className="outline-text">"full-service"</span> <br />
                factory.
              </h2>
            </div>

            <div className="space-y-8 text-secondary/70 text-lg leading-relaxed font-medium max-w-xl">
              <p>
                We’re a small team that actually cares about your P&L. Humaira handles the creative—the stuff that makes people stop scrolling. Samra handles the math—the stuff that makes the ads actually work.
              </p>
              <p>
                Together, we’ve spent a decade figuring out what works in the UAE and Pakistan. We don't do fluff, we don't do "awareness" campaigns that lead nowhere, and we definitely don't waste your budget.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-secondary/10">
              <div>
                <p className="text-accent font-black text-4xl">10+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-2 opacity-50">Years Experience</p>
              </div>
              <div>
                <p className="text-accent font-black text-4xl">50M+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-2 opacity-50">Ad Spend Managed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
