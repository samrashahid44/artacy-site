import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Samra and her team are a rare find. They actually understand the math behind the ads. Our cost-per-lead for the Canada copier campaigns dropped to $1.32, which is unheard of in our niche.",
    author: "David Miller",
    role: "Director of Operations"
  },
  {
    quote: "Working with Artacy felt like having an in-house team. The personalized attention and constant communication meant we were never in the dark about our growth.",
    author: "Zainab Ahmed",
    role: "Founder & CEO"
  },
  {
    quote: "Finally, an agency that doesn't sell 'fluff.' They scaled our business from two branches to five successful franchises by focusing on what actually drives revenue.",
    author: "Fawad Raza",
    role: "Managing Director"
  },
  {
    quote: "The creative content Humaira produces is incredible. People actually stop scrolling and engage. Our TikTok views jumped by over 280% in just one month!",
    author: "Sarah Jenkins",
    role: "Marketing Lead"
  },
  {
    quote: "I was skeptical about SEO, but Artacy’s '28-day sprint' delivered. We went from being invisible to ranking for high-intent keywords in the UAE market.",
    author: "Hamza Malik",
    role: "E-commerce Store Owner"
  },
  {
    quote: "The strategic hype they built for our grand opening was a game-changer. We had a full house on day one and sold out our initial membership tier within a week.",
    author: "Robert Thompson",
    role: "Facility Manager"
  },
  {
    quote: "What I love about Samra is her transparency. If a campaign isn't working, she tells you and fixes it. They genuinely care about our P&L.",
    author: "Ayesha Khan",
    role: "Retail Brand Owner"
  },
  {
    quote: "Artacy handled our 10th-anniversary campaign across 20 locations. The foot traffic was massive, and the UGC they coordinated felt so authentic to our brand.",
    author: "James Wilson",
    role: "Franchise Group Owner"
  },
  {
    quote: "Their knowledge of both the UAE and Pakistan markets is a massive advantage. They know exactly how to tailor the message for each audience to get the best ROI.",
    author: "Bilal Sheikh",
    role: "Real Estate Investor"
  },
  {
    quote: "Fast communication, detailed monthly reports, and a team that works round the clock—Artacy is the partner every small business needs to scale.",
    author: "Emily Richardson",
    role: "Boutique Agency Owner"
  }
];

export default function Testimonials() {
  return (
    <section id="results" className="py-40 bg-primary text-secondary overflow-hidden">
      <div className="px-6 lg:px-12 mb-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">What they say</span>
            <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
              Client <br />
              <span className="outline-text text-secondary">Love</span>
            </h2>
          </div>
          <p className="text-secondary/40 max-w-xs font-medium leading-relaxed mb-4">
            Real feedback from businesses building their empires with Artacy. No stage-managed PR, just real partnership.
          </p>
        </div>
      </div>

      {/* Testimonials Grid/Marquee */}
      <div className="relative">
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div 
                key={i} 
                className="inline-block w-[400px] bg-secondary/5 border border-secondary/10 p-10 rounded-[2.5rem] whitespace-normal flex flex-col justify-between shrink-0"
              >
                <div className="space-y-6">
                  <Quote className="text-accent w-8 h-8 opacity-50" />
                  <p className="text-xl font-medium leading-relaxed italic opacity-90">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-black uppercase tracking-tighter text-lg">{t.author}</p>
                  <p className="text-accent text-[10px] font-bold uppercase tracking-widest mt-1 opacity-60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Branding Line */}
      <div className="mt-32 border-y border-secondary/5 py-12 overflow-hidden bg-accent/5">
         <div className="flex gap-20 animate-marquee-slow whitespace-nowrap items-center">
            {Array(10).fill(0).map((_, i) => (
               <div key={i} className="flex gap-20 items-center">
                  <span className="text-4xl font-black uppercase tracking-tighter opacity-10">Real Growth</span>
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-4xl font-black uppercase tracking-tighter opacity-10">Artacy Digital</span>
                  <div className="w-2 h-2 rounded-full bg-accent" />
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
