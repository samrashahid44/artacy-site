import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleNavigation = () => setIsOpen(false);
    window.addEventListener("hashchange", handleNavigation);
    return () => window.removeEventListener("hashchange", handleNavigation);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#/case-studies" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-primary/5 shadow-sm">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-3 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a href="#">
            <img src="/logo.png" alt="Artacy Logo" className="h-16 md:h-[4.5rem] w-auto object-contain" />
          </a>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-x-10">
          {navLinks.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[10px] tracking-[0.3em] uppercase font-black text-primary/60 hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://calendly.com/artacy-net/artacy-free-consultation"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex bg-primary text-secondary px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:shadow-accent/20 transition-all border border-primary items-center"
          >
            Book a Consultation
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-secondary z-[60] flex flex-col p-10 md:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <img src="/logo.png" alt="Artacy Logo" className="h-16 w-auto object-contain" />
              <button
                onClick={toggleMenu}
                className="p-2 text-primary"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-primary hover:text-accent transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pb-10">
              <motion.a
                href="https://calendly.com/artacy-net/artacy-free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full bg-primary text-secondary py-6 rounded-3xl text-sm font-black uppercase tracking-widest flex items-center justify-center shadow-2xl"
              >
                Book a Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
