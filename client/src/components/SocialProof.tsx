import { Star } from "lucide-react";

export function SocialProof({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex -space-x-3">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Étudiant" className="w-10 h-10 rounded-full border-2 border-[#ccf708] object-cover" />
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="Étudiante" className="w-10 h-10 rounded-full border-2 border-[#ccf708] object-cover" />
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" alt="Étudiant" className="w-10 h-10 rounded-full border-2 border-[#ccf708] object-cover" />
        </div>
        <span className="bg-[#ccf708] text-black text-xs font-bold px-2 py-1 rounded-full">+400</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-gray-300 text-sm">Rejoignez +407 élèves</span>
      </div>
    </div>
  );
}

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-gray-400 text-sm">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-[#ccf708]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        <span>Garantie 30 jours</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-[#ccf708]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        <span>Accès Immédiat</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-[#ccf708]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        <span>Mises à jour À VIE</span>
      </div>
    </div>
  );
}
