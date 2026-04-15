import { motion } from "motion/react";

import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { caseStudies } from "../data/caseStudiesData";

export default function CaseStudies() {
  return (
    <div className="min-h-screen relative bg-primary text-secondary">
      <div className="grain-overlay" />
      <Navbar />
      <main className="pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">Our Work</span>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none mt-4">
            Case <span className="outline-text">Studies</span>
          </h1>
          <p className="max-w-xl text-secondary/60 mt-8">
            Explore our detailed case studies showcasing how we have transformed businesses, generated leads, and built authoritative brands across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer space-y-6"
            >
              <a href={`#/case-studies/${study.id}`} className="block">
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] border border-secondary/10">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-primary/80 backdrop-blur-md text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full border border-secondary/10">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-secondary">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-black text-2xl uppercase tracking-tighter mb-2">{study.title}</h4>
                  <p className="text-secondary/60 text-sm line-clamp-2">{study.overview}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
