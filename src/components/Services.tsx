import { motion } from "motion/react";
import { Target, MousePointer2, Palette, Search, BrainCircuit, Globe } from "lucide-react";

const services = [
  {
    title: "Digital Strategy",
    description: "Data-driven marketing roadmaps that align every channel to one goal — revenue growth.",
    deliverables: ["Market & competitor analysis", "90-day growth roadmap", "KPI frameworks & reporting"],
    icon: Target,
    size: "col-span-12 md:col-span-6 lg:col-span-4",
    color: "bg-primary text-secondary",
    iconBg: "bg-accent text-primary",
  },
  {
    title: "Paid Advertising",
    description: "High-performance Meta & Google Ads campaigns engineered for maximum ROAS.",
    deliverables: ["Campaign strategy & setup", "Audience targeting & retargeting", "Conversion tracking & optimization"],
    icon: MousePointer2,
    size: "col-span-12 md:col-span-6 lg:col-span-4",
    color: "bg-surface text-primary",
    iconBg: "bg-primary text-secondary",
  },
  {
    title: "AI Automation",
    description: "Intelligent systems that handle the repetitive work — so your team focuses on what matters.",
    deliverables: ["AI chatbots & lead qualification", "Automated email & CRM workflows", "Smart reporting dashboards"],
    icon: BrainCircuit,
    size: "col-span-12 md:col-span-6 lg:col-span-4",
    color: "bg-accent text-secondary",
    iconBg: "bg-primary text-secondary",
  },
  {
    title: "SEO & Organic Growth",
    description: "Long-term search visibility that drives qualified traffic without paying per click.",
    deliverables: ["Technical SEO audits & fixes", "Content strategy & creation", "Local SEO & Google Business"],
    icon: Search,
    size: "col-span-12 md:col-span-6 lg:col-span-4",
    color: "bg-primary text-secondary",
    iconBg: "bg-accent text-primary",
  },
  {
    title: "Creative & Content",
    description: "Scroll-stopping visuals and copy that build brand authority and drive engagement.",
    deliverables: ["Brand identity & guidelines", "Social media content", "Ad creatives & video production"],
    icon: Palette,
    size: "col-span-12 md:col-span-6 lg:col-span-4",
    color: "bg-surface text-primary",
    iconBg: "bg-primary text-secondary",
  },
  {
    title: "Web Design & Development",
    description: "Conversion-optimized websites that look premium and load fast on every device.",
    deliverables: ["UI/UX design & prototyping", "Responsive development", "Landing pages & funnels"],
    icon: Globe,
    size: "col-span-12 md:col-span-6 lg:col-span-4",
    color: "bg-primary text-secondary",
    iconBg: "bg-accent text-primary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-40 px-6 lg:px-12 bg-secondary relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-quill-gradient opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 text-center lg:text-left items-center lg:items-end">
          <div className="space-y-4">
            <span className="text-primary/40 font-bold uppercase tracking-[0.4em] text-[10px]">What We Do</span>
            <h2 className="">
              Our <br />
              <span className="outline-text">Services</span>
            </h2>
          </div>
          <p className="text-primary/60 max-w-md font-medium leading-relaxed mx-auto lg:mx-0">
            End-to-end digital growth — from strategy and creative to ads, SEO, and AI-powered automation. Everything your brand needs under one roof.
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
                staggerChildren: 0.12
              }
            }
          }}
          className="grid grid-cols-12 gap-5"
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
              className={`${service.size} ${service.color} p-8 md:p-10 rounded-[2rem] group relative overflow-hidden flex flex-col justify-between min-h-[420px] border border-primary/5 shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl ${service.iconBg}`}
                  >
                    <service.icon size={30} />
                  </motion.div>
                  <span className="text-7xl font-black opacity-[0.04] select-none font-headline leading-none group-hover:opacity-[0.1] transition-opacity duration-700">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-tighter leading-none">{service.title}</h3>
                <p className="text-base opacity-60 leading-relaxed font-medium mb-6 max-w-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold opacity-50">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.color.includes('bg-primary') ? 'bg-accent' : 'bg-primary'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
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
