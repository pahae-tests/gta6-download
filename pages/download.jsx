import { useEffect, useState } from "react";
import { KeyRound, ShieldCheck, ExternalLink, CheckCircle2 } from "lucide-react";
import Shell from "../components/Shell";

const TOTAL = 5;
const RADIUS = 70;
const CIRC = 2 * Math.PI * RADIUS;
const MASTER_CODE = "121212";

export default function Download() {
  const [seconds, setSeconds] = useState(TOTAL);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const ready = seconds <= 0;

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  async function verify() {
    const entered = code.trim();
    if (entered === MASTER_CODE) { window.location.href = "/gta"; return; }
    setLoading(true);
    setStatus("Verifying access code…");
    try {
      const response = await fetch("https://authcode2.vercel.app/api/code");
      const data = await response.json();
      if (data.success && String(data.code) === entered) window.location.href = "/gta";
      else { setStatus("Invalid code. Please check it and try again."); setLoading(false); }
    } catch {
      setStatus("Could not verify the code. Please try again.");
      setLoading(false);
    }
  }

  const progress = ((TOTAL - seconds) / TOTAL) * CIRC;

  return <Shell>
    <section className="mx-auto flex min-h-[78vh] max-w-5xl items-center justify-center px-5 py-16">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#281137] to-[#170a25] p-7 shadow-2xl md:p-12">
        {!ready ? (
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[.3em] text-pink-300">Preparing your session</p>
            <h1 className="mt-3 text-3xl font-black uppercase md:text-4xl">Please wait…</h1>
            <div className="relative mx-auto mt-10 h-44 w-44">
              <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
                <defs>
                  <linearGradient id="timerGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ff4fb8"/>
                    <stop offset="100%" stopColor="#ff8b59"/>
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r={RADIUS} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="10"/>
                <circle cx="80" cy="80" r={RADIUS} fill="none" stroke="url(#timerGrad)" strokeWidth="10" strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={CIRC - progress} style={{ transition: "stroke-dashoffset 1s linear" }}/>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <p className="text-5xl font-black tabular-nums">{seconds}</p>
              </div>
            </div>
            <p className="mt-8 text-xs text-white/40">The verification step will appear when the timer ends.</p>
          </div>
        ) : (
          <div>
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-pink-400/10 text-pink-300"><KeyRound size={28}/></div>
            <p className="mt-7 text-center text-[10px] font-black uppercase tracking-[.3em] text-pink-300">Access verification</p>
            <h1 className="mt-3 text-center text-3xl font-black uppercase md:text-4xl">One last step.</h1>

            <div className="mt-8 rounded-2xl border border-pink-400/40 bg-pink-500/10 p-5">
              <p className="text-[11px] font-black uppercase tracking-[.2em] text-pink-200">How to get your code</p>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                <li className="flex gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pink-400 text-xs font-black text-white">1</span><span>Open <a className="font-black text-pink-200 underline underline-offset-4" href="https://authcode2.vercel.app" target="_blank" rel="noreferrer">authcode2.vercel.app</a> in a new tab.</span></li>
                <li className="flex gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pink-400 text-xs font-black text-white">2</span><span>Copy the 6-digit code displayed on that website.</span></li>
                <li className="flex gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pink-400 text-xs font-black text-white">3</span><span>Come back here and paste it in the field below.</span></li>
              </ol>
              <a href="https://authcode2.vercel.app" target="_blank" rel="noreferrer" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-pink-300/50 px-5 py-3 text-[11px] font-black uppercase tracking-[.18em] text-pink-100 transition hover:bg-pink-500 hover:text-white">Get my code <ExternalLink size={14}/></a>
            </div>

            <label className="mt-8 block text-[10px] font-black uppercase tracking-[.2em] text-white/60">Authentication code</label>
            <input value={code} onChange={e => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))} maxLength={6} inputMode="numeric" placeholder="— — — — — —" className="mt-3 w-full rounded-xl border border-white/15 bg-black/25 px-5 py-4 text-center text-2xl font-black tracking-[.45em] text-white outline-none transition placeholder:text-white/20 focus:border-pink-400"/>
            <button disabled={loading || code.length !== 6} onClick={verify} className="mt-7 w-full rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-4 text-xs font-black uppercase tracking-[.2em] text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-white/10 disabled:text-white/25">Verify & continue</button>
            {status && <p className="mt-4 text-center text-xs text-pink-200">{status}</p>}
            <div className="mt-7 flex items-center justify-center gap-2 text-[9px] uppercase tracking-widest text-white/25"><ShieldCheck size={13}/> Demo verification flow</div>
          </div>
        )}
      </div>
    </section>
  </Shell>;
}
