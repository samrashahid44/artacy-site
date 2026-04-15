import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-40 px-6 lg:px-12 bg-secondary text-primary overflow-hidden relative">
      {/* Background Decorative Element */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -right-20 top-0 text-[150px] md:text-[400px] font-black text-primary/[0.03] leading-none select-none pointer-events-none"
      >
        &
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

          {/* Left: Founders Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent/10 rounded-[3rem] blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
                <div className="relative rounded-[3rem] overflow-hidden aspect-[3/4] border border-primary/5">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="/humaira.jpeg"
                    alt="Humaira Junaid"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-secondary font-black text-2xl shadow-xl">
                  01
                </div>
              </div>
              <div>
                <p className="font-black text-2xl uppercase tracking-tighter">Humaira Junaid</p>
                <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Owner & Founder</p>
              </div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 md:mt-24"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent/10 rounded-[3rem] blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
                <div className="relative rounded-[3rem] overflow-hidden aspect-[3/4] border border-primary/5">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="/samra.jpeg"
                    alt="Samra Fawad"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-secondary font-black text-2xl shadow-xl">
                  02
                </div>
              </div>
              <div>
                <p className="font-black text-2xl uppercase tracking-tighter">Samra Fawad</p>
                <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mt-1">CEO & Founder</p>
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
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">We’re not a factory</span>
              <h2 className="">
                Personalized <br />
                <span className="outline-text text-primary">attention</span> <br />
                to detail.
              </h2>
            </div>

            <div className="space-y-8 text-primary/70 text-lg leading-relaxed font-medium max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              <p>
                We aren't just another agency; we are your one-stop solution and dedicated partners in digital success. As a lean, agile team, we offer the personalized attention your brand deserves, focusing on what truly matters: your P&L.
              </p>
              <p>
                <strong>Humaira</strong> brings deep UAE market exposure and a localized creative edge, crafting the thumb-stopping content that captures attention in a crowded feed. <strong>Samra</strong> backs that creativity with a global perspective, drawing from extensive marketing experience across the <strong>US, Canada, UK, UAE, and Pakistan</strong>. While Humaira masters the "scroll-stop," Samra masters the math—the data-driven strategies that ensure your ads actually convert.
              </p>
              <p>
                Together, we’ve spent a decade decoding the nuances of the UAE and Pakistani markets. We don't do fluff, we don't do "awareness" campaigns that lead nowhere, and we never waste a cent of your budget. We’re here to make your business grow, period.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
