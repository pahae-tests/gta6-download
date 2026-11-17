import { useEffect, useState } from "react";
import { Timer, DownloadCloud } from "lucide-react";
import Shell from "../components/Shell";
import ActionButton from "../components/ActionButton";

export default function Gta() {
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);
  return <Shell><section className="mx-auto flex min-h-[78vh] max-w-4xl items-center justify-center px-5 py-16 text-center">
    <div className="w-full rounded-[2rem] border border-white/10 bg-[#21102f] p-8 md:p-14">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-orange-300/10 text-orange-200"><DownloadCloud size={28}/></div>
      <p className="mt-7 text-[10px] font-black uppercase tracking-[.3em] text-orange-200">Your next step</p>
      <h1 className="mt-3 text-4xl font-black uppercase">Almost there.</h1>
      <p className="mt-4 text-sm text-white/50">Your demo package is being prepared. Keep this page open.</p>
      <div className="mx-auto mt-9 grid h-28 w-28 place-items-center rounded-full border border-pink-300/30 bg-pink-400/5"><div><Timer className="mx-auto text-pink-300" size={20}/><p className="mt-2 text-3xl font-black tabular-nums">{seconds}</p></div></div>
      {seconds === 0 ? <div className="mt-9"><ActionButton href="/extensions">Continue to package options</ActionButton></div> : <p className="mt-7 text-[10px] uppercase tracking-[.2em] text-white/30">Preparing secure connection…</p>}
    </div>
  </section></Shell>;
}