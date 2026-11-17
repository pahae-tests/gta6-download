import { Gamepad2, ChevronRight } from "lucide-react";
import Shell from "../components/Shell";

const games = [
  ["Grand Theft Auto VI","The next chapter","2026","featured",true],
  ["Grand Theft Auto V","Los Santos · Enhanced edition","2013","classic"],
  ["Grand Theft Auto IV","Liberty City stories","2008","classic"],
  ["Grand Theft Auto: San Andreas","The definitive journey","2004","classic"],
  ["Grand Theft Auto: Vice City","A neon-soaked classic","2002","classic"],
  ["Grand Theft Auto III","The city is yours","2001","classic"],
  ["Grand Theft Auto: Liberty City Stories","Portable city stories","2005","classic"],
  ["Grand Theft Auto: Chinatown Wars","A different perspective","2009","classic"]
];

export default function Downloads() {
  return <Shell active="downloads">
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-10">
      <p className="text-[10px] font-black uppercase tracking-[.35em] text-pink-300">The collection</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <div><h1 className="text-5xl font-black uppercase tracking-[-.05em] md:text-7xl">Choose your <span className="text-pink-400">world.</span></h1><p className="mt-5 max-w-xl text-sm leading-6 text-white/50">Pick a title to explore its download experience. This is a game interface; no commercial game files are hosted here.</p></div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40"><Gamepad2 size={17}/> Game library</div>
      </div>
      <div className="mt-12 space-y-3">
        {games.map(([name, subtitle, year, style, featured], i) => <a key={name} href={featured ? "/download?game=gta6" : "/home?error=true"} className={`group flex items-center justify-between gap-4 overflow-hidden rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5 ${featured ? "border-pink-400/50 bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-orange-400/10 shadow-neon" : "border-white/10 bg-white/[.03] hover:border-white/25 hover:bg-white/[.06]"}`}>
          <div className="flex min-w-0 items-center gap-5">
            <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl ${featured ? "bg-gradient-to-br from-pink-500 to-orange-400 text-white" : "bg-white/5 text-white/35"}`}><Gamepad2 size={25}/></div>
            <div className="min-w-0"><div className="flex flex-wrap items-center gap-3"><h2 className={`truncate text-lg font-black md:text-xl ${featured ? "text-white" : "text-white/80"}`}>{name}</h2>{featured && <span className="rounded-full bg-pink-400/20 px-3 py-1 text-[8px] font-black uppercase tracking-widest text-pink-200">Featured</span>}</div><p className="mt-1 text-xs text-white/40">{subtitle}</p></div>
          </div>
          <div className="flex shrink-0 items-center gap-4"><span className="hidden text-xs text-white/30 sm:block">{year}</span><ChevronRight className={`transition group-hover:translate-x-1 ${featured ? "text-pink-300" : "text-white/40 group-hover:text-white/70"}`}/></div>
        </a>)}
      </div>
      <p className="mt-8 text-center text-[10px] leading-5 text-white/30">All titles and trademarks belong to their respective owners. This page is an independent visual demo.</p>
    </section>
  </Shell>;
}