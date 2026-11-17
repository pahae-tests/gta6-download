import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ActionButton({ href, children, disabled = false, onClick, className = "" }) {
  const base = "inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff4fb8] via-[#f34cae] to-[#ff8b59] px-8 py-4 text-xs font-black uppercase tracking-[.18em] text-white shadow-[0_12px_45px_rgba(245,65,170,.28)] transition duration-300 hover:-translate-y-1 hover:brightness-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-white/10 disabled:text-white/30 disabled:shadow-none disabled:hover:translate-y-0";
  if (href) return <Link href={href} className={`${base} ${className}`}>{children}<ArrowRight size={16}/></Link>;
  return <button disabled={disabled} onClick={onClick} className={`${base} ${className}`}>{children}<ArrowRight size={16}/></button>;
}