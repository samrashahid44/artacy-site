export default function Footer() {
  return (
    <footer className="bg-secondary w-full py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <h2 className="text-[30vw] font-black text-primary/[0.02] leading-none uppercase">
          Artacy
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-4">
            <div className="flex items-center -ml-4">
              <img src="/logo.png" alt="Artacy Logo" className="h-24 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-primary/60 max-w-xs font-medium">
              We build brands people actually buy from. Real growth, no fluff, just math.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Offices</p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-black uppercase tracking-tighter">UAE</p>
                <a href="tel:+971567692421" className="text-xs text-accent font-bold mt-2 block hover:underline transition-all">
                  +971 56 769 2421
                </a>
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-tighter">Pakistan</p>
                <a href="tel:+923703364720" className="text-xs text-accent font-bold mt-2 block hover:underline transition-all">
                  +92 370 3364720
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Connect</p>
            <div className="space-y-3 flex flex-col">
              {[
                { name: "Instagram", url: "https://www.instagram.com/artacy.uae/" },
                { name: "LinkedIn", url: "https://www.linkedin.com/company/artacy-uae/" },
                { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61573698080937" },
                { name: "WhatsApp", url: "https://wa.me/971567692421" }
              ].map((link) => (
                <a 
                  key={link.name}
                  className="text-sm font-black uppercase tracking-tighter text-primary/60 hover:text-accent transition-colors flex items-center gap-2 group" 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-0 h-[1px] bg-accent group-hover:w-4 transition-all" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Legal</p>
            <div className="space-y-4">
              <a className="text-sm font-black uppercase tracking-tighter text-primary/60 hover:text-accent transition-colors block" href="mailto:artacy.net@gmail.com">
                artacy.net@gmail.com
              </a>
              <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest mt-12">
                © 2024 Artacy Digital. <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
