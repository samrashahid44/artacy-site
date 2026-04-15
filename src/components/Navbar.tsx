import { motion } from "motion/react";


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-2 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a href="#">
            <img src="/logo.png" alt="Artacy Logo" className="h-32 w-auto object-contain" />
          </a>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-x-12">
          {["Services", "About", "Case Studies"].map((item, idx) => (
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
        
        <motion.a
          href="https://calendly.com/artacy-net/artacy-free-consultation"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-secondary px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:shadow-accent/20 transition-all border border-primary inline-flex items-center"
        >
          Book a Consultation
        </motion.a>
      </div>
    </nav>
  );
}
