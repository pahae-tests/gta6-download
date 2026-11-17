import Head from "next/head";
import Link from "next/link";
import { Gamepad2, Menu, ArrowUpRight } from "lucide-react";

export default function Shell({ children, active = "" }) {
  return <>
    <Head>
      <title>Vice City — The Next Chapter</title>
      <meta name="description" content="GTA6 download experience concept." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="min-h-screen overflow-hidden bg-[#10051e]">
      <header className="relative z-20 border-b border-white/10 bg-[#10051e]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <Link href="/home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 shadow-neon"><Gamepad2 size={21}/></span>
            <span className="text-sm font-black uppercase tracking-[.22em]">Vice City<span className="text-pink-400">.06</span></span>
          </Link>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[.2em] text-white/60 md:flex">
            <Link className={active === "home" ? "text-white" : "hover:text-pink-300"} href="/home">Discover</Link>
            <Link className={active === "downloads" ? "text-white" : "hover:text-pink-300"} href="/downloads">Downloads</Link>
            <a href="#about" className="hover:text-pink-300">About</a>
          </nav>
          <Link href="/downloads" className="flex items-center gap-2 rounded-full border border-pink-300/40 px-5 py-3 text-[10px] font-black uppercase tracking-[.18em] text-pink-100 transition hover:bg-pink-500 hover:text-white">
            Get access <ArrowUpRight size={14}/>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer id="about" className="border-t border-white/10 px-5 py-8 text-center text-[10px] uppercase tracking-[.18em] text-white/35">
        GTA6 interface concept · Not affiliated with Rockstar Games · Download games for free
      </footer>
    </div>
  </>;
}