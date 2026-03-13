import { ImageIcon } from "lucide-react";

interface ScreenshotPlaceholderProps {
  label: string;
  className?: string;
}

export function ScreenshotPlaceholder({ label, className = "" }: ScreenshotPlaceholderProps) {
  return (
    <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-violet-500/20 p-6 flex flex-col items-center justify-center gap-3 min-h-[200px] ${className}`}>
      <ImageIcon className="w-10 h-10 text-violet-400/50" />
      <span className="text-gray-500 text-sm text-center">{label}</span>
    </div>
  );
}
