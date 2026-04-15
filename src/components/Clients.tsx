import { motion } from "motion/react";

const clientLogos = [
  { name: "Chicken Master", src: "/Chicken Master logo.jpg" },
  { name: "Divine Hair Studio", src: "/Divine Hair Studio.webp" },
  { name: "Dootsie's Kitchen", src: "/Dootsie_s Kitchen logo.webp" },
  { name: "Filed and Flourish", src: "/Filed and Flourish Logooo.jpg" },
  { name: "Just Led UK", src: "/Just Led Uk logo.jpg" },
  { name: "The Curated Pantry", src: "/The Curated Pantry Logo.jpg" },
];

export default function Clients() {
  return (
    <section className="py-40 bg-secondary overflow-hidden relative border-y border-primary/5">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <span className="text-[25vw] font-black uppercase tracking-tighter whitespace-nowrap">
          Our Partners — Our Partners
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 relative z-10">
        <div className="flex flex-col gap-4">
           <div className="h-[2px] w-20 bg-accent" />
           <p className="text-sm font-black uppercase tracking-[0.4em] text-primary">
             Trusted by global brands
           </p>
           <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter max-w-lg">
             We help local brands <span className="text-accent underline decoration-4">scale</span> globally.
           </h2>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex gap-10 animate-marquee-slow whitespace-nowrap items-center">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div 
              key={i} 
              className="group flex items-center justify-center shrink-0"
            >
              <img 
                src={encodeURI(logo.src)} 
                alt={logo.name} 
                className="w-48 lg:w-60 h-32 lg:h-40 object-contain filter grayscale hover:grayscale-0 transition-all duration-700 border border-primary/20 rounded-2xl bg-surface p-4 shadow-sm hover:border-accent/40"
              />
            </div>
          ))}
        </div>
        
        {/* Horizontal Fades */}
        <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-secondary to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-secondary to-transparent z-20 pointer-events-none" />
      </div>

      {/* Floating Decorative Element */}
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent/5 rounded-full blur-[60px] animate-pulse pointer-events-none" />
    </section>
  );
}
