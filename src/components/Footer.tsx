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
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-accent rounded-full" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-primary uppercase font-headline">
                Artacy
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary/60 max-w-xs font-medium">
              We build brands people actually buy from. Real growth, no fluff, just math.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Offices</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-black uppercase tracking-tighter">UAE</p>
                <p className="text-xs text-primary/60 mt-1">Dubai Design District, D3</p>
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-tighter">Pakistan</p>
                <p className="text-xs text-primary/60 mt-1">DHA Phase 6, Karachi</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Connect</p>
            <div className="space-y-3 flex flex-col">
              {["Instagram", "LinkedIn", "Twitter", "WhatsApp"].map((link) => (
                <a 
                  key={link}
                  className="text-sm font-black uppercase tracking-tighter text-primary/60 hover:text-accent transition-colors flex items-center gap-2 group" 
                  href="#"
                >
                  <span className="w-0 h-[1px] bg-accent group-hover:w-4 transition-all" />
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Legal</p>
            <div className="space-y-4">
              <a className="text-sm font-black uppercase tracking-tighter text-primary/60 hover:text-accent transition-colors block" href="mailto:hello@artacy.agency">
                hello@artacy.agency
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
