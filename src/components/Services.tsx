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
            <span className="text-primary/40 font-bold uppercase tracking-[0.4em] text-[10px]">How we get you paid</span>
            <h2 className="text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              Our <br />
              <span className="outline-text">Playbook</span>
            </h2>
          </div>
          <p className="text-primary/60 max-w-sm font-medium leading-relaxed">
            We don't offer 50 different services. We offer the 5 things that actually move the needle for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${service.size} ${service.color} p-12 rounded-[2.5rem] group relative overflow-hidden flex flex-col justify-between min-h-[320px] border border-primary/5`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 mb-8 flex items-center justify-center rounded-2xl ${service.color.includes('primary') ? 'bg-accent text-primary' : 'bg-primary text-secondary'}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed font-medium">{service.description}</p>
              </div>
              
              {/* Decorative Number */}
              <div className="absolute bottom-8 right-12 text-6xl font-black opacity-10 select-none">
                0{idx + 1}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
