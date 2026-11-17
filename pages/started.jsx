import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Shell from "../components/Shell";
import ActionButton from "../components/ActionButton";

export default function Started() {
  return <Shell><section className="mx-auto flex min-h-[78vh] max-w-4xl items-center justify-center px-5 py-16 text-center">
    <div className="w-full rounded-[2rem] border border-emerald-300/20 bg-gradient-to-b from-[#17352f] to-[#171027] p-8 md:p-14">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-300/10 text-emerald-300"><CheckCircle2 size={40}/></div>
      <p className="mt-7 text-[10px] font-black uppercase tracking-[.3em] text-emerald-300">Transfer initiated</p>
      <h1 className="mt-3 text-4xl font-black uppercase md:text-5xl">Download started.</h1>
      <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/55">Your demo file download has been triggered. Thanks for trying interface concept.</p>
      <div className="mt-9"><ActionButton href="/home">Back to home</ActionButton></div>
      <p className="mt-8 inline-flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/30">No official game files provided <ArrowUpRight size={12}/></p>
    </div>
  </section></Shell>;
}