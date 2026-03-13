import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export function CTAButton({ text, className = "", onClick }: CTAButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-400 hover:from-emerald-400 hover:via-green-400 hover:to-emerald-300 text-black font-extrabold text-lg md:text-xl px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] cta-pulse w-full max-w-xl overflow-hidden ${className}`}
    >
      {/* Shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      <span className="relative flex items-center gap-3">
        {text}
        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
      </span>
    </button>
  );
}
