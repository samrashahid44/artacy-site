import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../data/caseStudiesData";

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} id="case-studies" className="relative h-[180vh] bg-primary">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 lg:px-12 mb-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">Selected Works</span>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-secondary">
              The <span className="outline-text">Proof</span>
            </h2>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-6 lg:px-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              className="group relative h-[60vh] w-[80vw] md:w-[600px] shrink-0"
            >
              <a href={`#/case-studies/${study.id}`} className="block h-full w-full">
                <div className="relative h-full w-full overflow-hidden rounded-[3rem] border border-secondary/10">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 flex flex-col justify-end">
                    <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4">{study.category}</span>
                    <h4 className="text-4xl font-black text-secondary uppercase tracking-tighter mb-4">{study.title}</h4>
                    <p className="text-secondary/60 text-sm max-w-xs font-medium line-clamp-2">{study.overview}</p>
                  </div>

                  <div className="absolute top-8 right-8">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-secondary transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}

          {/* Last Card: Call to Action */}
          <motion.div className="h-[60vh] w-[80vw] md:w-[600px] shrink-0 flex items-center justify-center">
            <a href="#/case-studies" className="group text-center space-y-8">
              <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-secondary leading-none">
                See <br /> All <span className="text-accent">Results</span>
              </h3>
              <div className="w-24 h-24 rounded-full border-2 border-accent/20 flex items-center justify-center mx-auto group-hover:bg-accent transition-all duration-500">
                <ArrowUpRight className="w-10 h-10 text-accent group-hover:text-primary" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
