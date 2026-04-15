import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { caseStudies } from "../data/caseStudiesData";

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen relative bg-primary text-secondary flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black mb-4">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-accent hover:underline">Return to Case Studies</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-primary text-secondary">
      <div className="grain-overlay" />
      <Navbar />

      <main className="pt-40 pb-20 px-6 lg:px-12 max-w-4xl mx-auto">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-secondary/60 hover:text-accent mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="uppercase tracking-widest text-xs font-bold">Back to case studies</span>
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full">
              {study.category}
            </span>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">
              Client: {study.business}
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
            {study.title}
          </h1>
        </header>

        <div className="w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 border border-secondary/10">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-12 lg:gap-24 items-start">
          <article className="max-w-none">
            {study.content.split('\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('##')) {
                return (
                  <h2 key={index} className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-16 mb-6 text-secondary first:mt-0">
                    {trimmed.replace(/^##\s*/, '')}
                  </h2>
                );
              }
              if (trimmed === '') return null;
              return (
                <p key={index} className="text-lg md:text-xl text-secondary/70 leading-relaxed mb-8 font-light">
                  {trimmed}
                </p>
              );
            })}
          </article>

          <aside className="sticky top-32 space-y-8 bg-secondary/5 rounded-3xl p-8 border border-secondary/10">
            <div>
              <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Overview</h3>
              <p className="text-sm text-secondary/80 leading-relaxed">{study.overview}</p>
            </div>
            <div>
              <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Strategy</h3>
              <p className="text-sm text-secondary/80 leading-relaxed">{study.strategy}</p>
            </div>
            <div>
              <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Results</h3>
              <p className="text-sm text-secondary/80 leading-relaxed font-medium">{study.results}</p>
            </div>
          </aside>
        </div>

        <div className="mt-32 pt-16 border-t border-secondary/10 flex justify-center">
          <Link to="/" className="flex items-center gap-3 text-accent font-bold uppercase tracking-widest text-sm group">
            Start Your Digital Transformation
            <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
