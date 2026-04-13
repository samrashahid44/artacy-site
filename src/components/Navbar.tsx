import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-6 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-accent rounded-full" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-primary uppercase font-headline">
            Artacy
          </span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-x-12">
          {["Services", "About", "Why Us", "Case Studies"].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[10px] tracking-[0.3em] uppercase font-black text-primary/60 hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-secondary px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:shadow-accent/20 transition-all border border-primary"
        >
          Book a Consultation
        </motion.button>
      </div>
    </nav>
  );
}
