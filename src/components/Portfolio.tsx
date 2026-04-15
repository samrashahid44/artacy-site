import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../data/caseStudiesData";

export default function Portfolio() {
  const displayStudies = caseStudies.slice(0, 4);

  return (
    <section id="case-studies" className="py-40 px-6 lg:px-12 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="space-y-6">
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">Proof of concept</span>
            <h2 className="text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              Selected <br />
              <span className="outline-text">Works</span>
            </h2>
          </div>
          <div className="max-w-xs space-y-8">
            <p className="text-secondary/60 font-medium leading-relaxed">
              We don't hide behind "confidentiality." We show the numbers because the numbers don't lie.
            </p>
            <Link to="/case-studies" className="flex items-center gap-3 text-accent font-bold uppercase tracking-widest text-xs group">
              View all case studies
              <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {displayStudies.map((study, idx) => {
            const size = idx % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5";
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${size} group cursor-pointer space-y-6`}
              >
                <Link to={`/case-studies/${study.id}`} className="block h-full w-full space-y-6">
                  <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] lg:aspect-auto lg:h-[500px] border border-secondary/10">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-8 left-8">
                      <span className="px-4 py-2 bg-primary/80 backdrop-blur-md text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full border border-secondary/10">
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-secondary">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h4 className="font-black text-3xl uppercase tracking-tighter">{study.title}</h4>
                      <p className="text-secondary/60 text-sm max-w-md font-medium">{study.overview}</p>
                    </div>
                    <span className="text-4xl font-black opacity-10">0{idx + 1}</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
