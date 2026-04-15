import { motion } from "motion/react";
import { Sparkles, MousePointer2, Brush, BarChart3, Share2, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "The Blueprint",
    description: "Finding your angle. We build a 90-day roadmap based on data, not 'vibes'.",
    icon: Sparkles,
    size: "col-span-12 lg:col-span-8",
    color: "bg-primary text-secondary",
  },
  {
    title: "Paid Growth",
    description: "Meta and Google ads that actually convert. We don't just spend budget; we buy customers.",
    icon: MousePointer2,
    size: "col-span-12 lg:col-span-4",
    color: "bg-accent text-secondary",
  },
  {
    title: "Scroll-Stoppers",
    description: "Visuals that make people stop. If it looks like an ad, people skip it. We make it look like a recommendation.",
    icon: Brush,
    size: "col-span-12 lg:col-span-4",
    color: "bg-surface text-primary",
  },
  {
    title: "Organic Search",
    description: "Getting you found without paying for every click. Real SEO for real humans.",
    icon: BarChart3,
    size: "col-span-12 lg:col-span-4",
    color: "bg-primary text-secondary",
  },
  {
    title: "Efficiency",
    description: "Replacing manual grunt work with smart systems. More growth, less overhead.",
    icon: BrainCircuit,
    size: "col-span-12 lg:col-span-4",
    color: "bg-surface text-primary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 px-6 lg:px-12 bg-secondary relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-quill-gradient opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-primary/40 font-bold uppercase tracking-[0.4em] text-[10px]">Our Roadmap to Success</span>
            <h2 className="text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              Our <br />
              <span className="outline-text">Playbook</span>
            </h2>
          </div>
          <p className="text-primary/60 max-w-sm font-medium leading-relaxed">
            We don't offer 50 different services. We offer the 5 things that actually move the needle for your business.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-12 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }
                }
              }}
              className={`${service.size} ${service.color} p-12 rounded-[2.5rem] group relative overflow-hidden flex flex-col justify-between min-h-[400px] border border-primary/5 shadow-2xl hover:shadow-accent/20 transition-all duration-500`}
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`w-20 h-20 mb-10 flex items-center justify-center rounded-[2rem] ${service.color.includes('primary') ? 'bg-accent text-primary' : 'bg-primary text-secondary'}`}
                >
                  <service.icon size={36} />
                </motion.div>
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter leading-none">{service.title}</h3>
                <p className="text-xl opacity-70 leading-relaxed font-medium max-w-[280px]">{service.description}</p>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-12 right-12 text-8xl font-black opacity-[0.03] select-none group-hover:opacity-[0.1] transition-opacity duration-700">
                0{idx + 1}
              </div>

              {/* Hover Grain Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
