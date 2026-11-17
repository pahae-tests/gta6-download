import { useEffect, useState } from "react";
import { ArrowDownRight, Sparkles, Waves, ShieldCheck } from "lucide-react";
import Shell from "../components/Shell";
import ActionButton from "../components/ActionButton";

export default function Home() {
  const [error, setError] = useState(false);
  useEffect(() => { setError(new URLSearchParams(window.location.search).get("error") === "true"); }, []);
  return <Shell active="home">
    {error && <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-5 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-red-400/40 bg-[#260b25] p-8 text-center shadow-[0_0_70px_rgba(255,40,90,.22)]">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-red-500/15 text-2xl text-red-300">!</div>
        <p className="text-xs font-black uppercase tracking-[.25em] text-red-300">Download interrupted</p>
        <h2 className="mt-3 text-2xl font-black">Something went wrong, retry</h2>
        <button onClick={() => { setError(false); window.history.replaceState({}, "", "/home"); }} className="mt-7 rounded-full border border-red-300/40 px-7 py-3 text-xs font-bold uppercase tracking-widest text-red-100 hover:bg-red-500/20">Close</button>
      </div>
    </div>}
    <section className="relative isolate min-h-[790px] overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[url('/vice-city-art.jpg')] bg-cover bg-[center_38%] opacity-35"/>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10051e] via-[#10051e]/80 to-[#10051e]/25"/>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10051e] via-transparent to-[#10051e]/20"/>
      <div className="mx-auto grid min-h-[790px] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.05fr_.95fr] md:px-10">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-300/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.23em] text-pink-200"><Sparkles size={13}/> The city is calling</div>
          <p className="mb-4 text-xs font-black uppercase tracking-[.45em] text-orange-200">Welcome to the next chapter</p>
          <h1 className="font-display text-6xl font-black uppercase leading-[.86] tracking-[-.07em] sm:text-8xl md:text-[108px]">
            Make<br/><span className="bg-gradient-to-r from-[#ff6bb9] via-[#ff9a86] to-[#ffd17b] bg-clip-text text-transparent">waves</span><br/>in the city.
          </h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-white/65">Neon nights. Endless horizons. A city built on ambition, where every street has a story and every choice leaves a mark. Your next adventure starts here.</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <ActionButton href="/downloads">Explore downloads</ActionButton>
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-white/40">GTA6 concept experience</span>
          </div>
          <div className="mt-16 flex gap-8 border-t border-white/15 pt-7">
            <div><p className="text-2xl font-black text-white">01</p><p className="mt-1 text-[9px] uppercase tracking-[.2em] text-white/40">New horizons</p></div>
            <div><p className="text-2xl font-black text-white">24/7</p><p className="mt-1 text-[9px] uppercase tracking-[.2em] text-white/40">City energy</p></div>
            <div><p className="text-2xl font-black text-white">∞</p><p className="mt-1 text-[9px] uppercase tracking-[.2em] text-white/40">Possibilities</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-pink-500/25 via-purple-500/10 to-orange-400/20 blur-3xl"/>
          <div className="relative rotate-2 overflow-hidden rounded-[2rem] border border-white/20 bg-[#241036] p-3 shadow-2xl">
            <img src="/vice-city-art.jpg" alt="Colorful Vice City inspired illustrated collage" className="h-[490px] w-full rounded-[1.4rem] object-cover object-center"/>
            <div className="absolute inset-x-3 bottom-3 rounded-b-[1.4rem] bg-gradient-to-t from-[#13051f] via-[#13051f]/85 to-transparent p-7 pt-24">
              <p className="text-[10px] font-black uppercase tracking-[.3em] text-pink-300">Beyond the ordinary</p>
              <p className="mt-2 text-3xl font-black uppercase tracking-tight">Own the night.</p>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-8 hidden rounded-2xl border border-white/15 bg-[#21102f]/90 p-5 backdrop-blur-xl sm:block"><Waves className="text-pink-300"/><p className="mt-3 text-[9px] font-bold uppercase tracking-widest text-white/50">Coastal state of mind</p></div>
          <div className="absolute -right-5 top-10 rounded-2xl border border-white/15 bg-[#21102f]/90 p-4 backdrop-blur-xl"><ShieldCheck className="text-orange-200"/><p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-white/50">GTA6 concept</p></div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[.25em] text-white/35 md:flex">Scroll to explore <ArrowDownRight size={14}/></div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
      <div className="grid gap-5 md:grid-cols-3">
        {[["A living world","Discover a vibrant coastal playground shaped by light, sound and movement."],["Stories everywhere","From quiet streets to electric nights, every corner has its own atmosphere."],["Your next chapter","Explore this GTA 6 interface concept and its download flow."]].map(([title, body], i) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[.035] p-7"><p className="text-xs font-black text-pink-300">0{i+1}</p><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{body}</p></div>)}
      </div>
    </section>
  </Shell>;
}