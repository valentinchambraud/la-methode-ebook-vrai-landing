import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export function VideoPlaceholder({ label = "Vidéo", className = "", aspectRatio = "16/9" }: VideoPlaceholderProps) {
  return (
    <div
      className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-violet-500/20 group cursor-pointer ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-20 h-20 rounded-full bg-violet-600/80 flex items-center justify-center group-hover:bg-violet-500 transition-colors group-hover:scale-110 transition-transform duration-300">
          <Play className="w-8 h-8 text-white ml-1" fill="white" />
        </div>
        <span className="text-gray-400 text-sm">{label}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
