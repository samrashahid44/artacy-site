import { motion } from "motion/react";

export default function Advantage() {
  return (
    <section id="why-us" className="py-40 px-6 lg:px-12 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary/40 font-bold uppercase tracking-[0.4em] text-[10px]">The Edge</span>
              <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">
                Why <br />
                <span className="outline-text">Us?</span>
              </h2>
            </div>
            <p className="text-primary/60 font-medium leading-relaxed max-w-sm">
              Because we actually show you the numbers. No hidden dashboards. No "proprietary" secrets. Just real data and a team that answers your WhatsApp messages.
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-primary text-secondary rounded-[2.5rem] space-y-8 relative overflow-hidden group"
            >
              <div className="text-accent font-black text-7xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">01</div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter">Total Transparency</h3>
                <p className="text-secondary/60 font-medium leading-relaxed">
                  You see what we see. Real-time dashboards and direct access to the people actually doing the work.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 bg-surface text-primary rounded-[2.5rem] space-y-8 border border-primary/5 relative overflow-hidden group"
            >
              <div className="text-primary font-black text-7xl opacity-10 group-hover:opacity-40 transition-opacity duration-500">02</div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter">Local Context</h3>
                <p className="text-primary/60 font-medium leading-relaxed">
                  We know why a campaign works in Dubai but fails in Karachi. We don't do "global" templates.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
