import { useEffect, useState } from "react";
import { Download, FileCheck2 } from "lucide-react";
import Shell from "../components/Shell";

export default function StartDownload() {
  const [started, setStarted] = useState(false);
  function begin() {
    const link = document.createElement("a");
    link.href = "/gta6-demo.txt";
    link.download = "gta6-demo.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setStarted(true);
    setTimeout(() => { window.location.href = "/started"; }, 1200);
  }
  return <Shell><section className="mx-auto flex min-h-[78vh] max-w-4xl items-center justify-center px-5 py-16 text-center">
    <div className="w-full rounded-[2rem] border border-white/10 bg-[#21102f] p-8 md:p-14">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-pink-400/10 text-pink-300"><Download size={28}/></div>
      <p className="mt-7 text-[10px] font-black uppercase tracking-[.3em] text-pink-300">Ready to transfer</p>
      <h1 className="mt-3 text-4xl font-black uppercase">Your file is ready.</h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">Click to start download</p>
      <button onClick={begin} disabled={started} className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-9 py-4 text-xs font-black uppercase tracking-[.18em] text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-white/10 disabled:text-white/30"><FileCheck2 size={16}/>{started ? "Download started" : "Start download"}</button>
    </div>
  </section></Shell>;
}