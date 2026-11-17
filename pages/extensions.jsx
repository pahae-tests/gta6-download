import { FileArchive, FileCode2, FileCog, FileType, MonitorDown } from "lucide-react";
import Shell from "../components/Shell";

const formats = [
  ["ZIP archive","Compressed package","ZIP",FileArchive,false],
  ["MMT package","Alternative package format","MMT",FileCode2,false],
  ["BIN image","Binary package","BIN",FileType,false],
  ["MSI installer","Windows installer package","MSI",FileCog,false],
  ["Windows EXE","Demo launcher package","EXE",MonitorDown,true]
];

export default function Extensions() {
  return <Shell><section className="mx-auto max-w-6xl px-5 py-20 md:px-10">
    <p className="text-[10px] font-black uppercase tracking-[.3em] text-pink-300">Package selector</p>
    <h1 className="mt-4 text-5xl font-black uppercase tracking-tight md:text-7xl">Choose your <span className="text-pink-400">format.</span></h1>
    <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">Select the Windows demo package to continue. Other format tiles are inactive in this interface concept.</p>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {formats.map(([title, desc, ext, Icon, active]) => <a key={ext} href={active ? "/startdownload" : "/home?error=true"} className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${active ? "border-pink-400/50 bg-gradient-to-br from-pink-500/15 to-orange-400/5 shadow-neon" : "border-white/10 bg-white/[.03] hover:border-white/20"}`}>
        <div className={`flex items-center justify-between ${active ? "text-pink-300" : "text-white/35"}`}><Icon size={30}/><span className="rounded-full border border-current/30 px-3 py-1 text-[9px] font-black tracking-widest">{ext}</span></div>
        <h2 className="mt-9 text-xl font-black">{title}</h2><p className="mt-2 text-xs text-white/40">{desc}</p>
        <p className={`mt-8 text-[10px] font-black uppercase tracking-[.2em] ${active ? "text-pink-300" : "text-white/25"}`}>{active ? "Select format →" : "Unavailable"}</p>
      </a>)}
    </div>
    <p className="mt-8 text-[10px] leading-5 text-white/30">The EXE option downloads a harmless text demo file, not GTA 6 or an installer.</p>
  </section></Shell>;
}