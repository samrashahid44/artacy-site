import { motion } from "motion/react";

const advantages = [
  {
    number: "01",
    title: "A Partner, Not Just a Provider",
    description: "We don’t treat you like a line item in a spreadsheet. We partner with you for your long-term success, meaning we’re just as invested in your ROI as you are. Your wins are our wins.",
    bg: "bg-primary text-secondary",
    accent: "text-accent"
  },
  {
    number: "02",
    title: "Round-the-Clock Dedication",
    description: "Our hardworking team operates with a 'results never sleep' mindset. We work tirelessly to ensure your brand shines, staying ahead of trends and algorithm shifts so you don't have to.",
    bg: "bg-surface text-primary border border-primary/5",
    accent: "text-primary/10"
  },
  {
    number: "03",
    title: "Global Strategy, Local Execution",
    description: "With deep roots in the UAE and Pakistan and experience spanning the US, UK, and Canada, we combine international standards with local market nuances. We know what makes people click in Dubai just as well as we do in London.",
    bg: "bg-surface text-primary border border-primary/5",
    accent: "text-primary/10"
  },
  {
    number: "04",
    title: "Radical Transparency & Fast Communication",
    description: "Tired of 'ghost' agencies? We pride ourselves on lightning-fast communication. You’ll receive detailed monthly reports that skip the fluff and focus on the data that actually impacts your P&L.",
    bg: "bg-primary text-secondary",
    accent: "text-accent"
  },
  {
    number: "05",
    title: "Creative Meets Mathematics",
    description: "Most agencies offer one or the other. We give you both: high-end, thumb-stopping creative work backed by rigorous data analysis and 'math-first' ad strategies that ensure every dollar spent is working for you.",
    bg: "bg-accent text-secondary",
    accent: "text-primary/20",
    full: true
  }
];

export default function Advantage() {
  return (
    <section id="why-us" className="py-40 px-6 lg:px-12 bg-secondary relative overflow-hidden text-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 space-y-8 text-center"
          >
            <div className="space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">The Edge</span>
              <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
                Why Choose <br />
                <span className="outline-text">Artacy?</span>
              </h2>
            </div>
            <p className="text-primary/60 font-medium leading-relaxed max-w-2xl mx-auto text-lg">
              We don’t believe in being "just another vendor." We’re a lean, high-impact team that functions as an extension of your own office. Here is why businesses choose to grow with us:
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div 
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 lg:p-14 ${adv.bg} rounded-[3rem] space-y-10 relative overflow-hidden group ${adv.full ? 'md:col-span-2' : ''}`}
            >
              <div className={`${adv.accent} font-black text-8xl opacity-20 group-hover:opacity-100 transition-opacity duration-500`}>
                {adv.number}
              </div>
              <div className="space-y-6 relative z-10">
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-tight max-w-md">
                  {adv.title}
                </h3>
                <p className="opacity-70 font-medium leading-relaxed text-lg lg:text-xl">
                  {adv.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
