/*
 * EmailCaptureModal — Pop-up de capture d'email
 * Design: Midnight Premium — fond sombre, accents violets, CTA vert
 * S'affiche quand l'utilisateur clique sur un bouton CTA principal
 */

import { useState } from "react";
import { X, Lock, Star, ArrowRight, Zap } from "lucide-react";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailCaptureModal({ isOpen, onClose }: EmailCaptureModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Redirect to checkout after short delay
      setTimeout(() => {
        window.location.href = "/checkout";
      }, 1200);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #111111 0%, #0a0a0f 100%)",
          border: "1px solid rgba(204,247,8,0.3)",
          boxShadow: "0 0 60px rgba(204,247,8,0.2), 0 25px 50px rgba(0,0,0,0.6)",
        }}
      >
        {/* Glow top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #ccf708, transparent)" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              {/* Badge */}
              <div className="flex justify-center mb-5">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(204,247,8,0.15)", color: "#ccf708", border: "1px solid rgba(204,247,8,0.3)" }}
                >
                  <Zap size={11} />
                  Accès Immédiat
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-2xl font-black text-center text-white mb-2 leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Accédez au M3TA Stacking™
              </h2>
              <p className="text-center text-gray-400 text-sm mb-6 leading-relaxed">
                Entrez votre email pour accéder à la méthode complète.<br />
                <span className="text-[#ccf708] font-semibold">Accès immédiat</span>, seulement <span className="text-white font-bold">27€</span> aujourd'hui.
              </p>

              {/* Social proof mini */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex">
                  {["bg-[#ccf708]", "bg-[#ccf708]", "bg-[#ccf708]"].map((c, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full ${c} border-2 border-[#111111] flex items-center justify-center text-white text-xs font-bold`}
                      style={{ marginLeft: i > 0 ? "-8px" : "0" }}
                    >
                      {["E", "A", "L"][i]}
                    </div>
                  ))}
                </div>
                <div className="flex">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-gray-400 text-xs">+407 élèves</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-gray-500 text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => {
                      e.target.style.border = "1px solid rgba(204,247,8,0.6)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(204,247,8,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-base text-black flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #ccf708, #b8e006)",
                    boxShadow: "0 4px 20px rgba(204,247,8,0.4), 0 0 0 1px rgba(204,247,8,0.3)",
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Accéder au Système pour 27€
                  <ArrowRight size={18} />
                </button>
              </form>

              {/* Security note */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                <Lock size={11} className="text-gray-500" />
                <p className="text-gray-500 text-xs text-center">
                  Paiement 100% sécurisé · Garantie 30 jours remboursé
                </p>
              </div>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(204,247,8,0.15)", border: "1px solid rgba(204,247,8,0.4)" }}
              >
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Parfait !
              </h3>
              <p className="text-gray-400 text-sm">
                Redirection vers la page de paiement...
              </p>
              <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #ccf708, #d9ff33)",
                    animation: "progress-fill 1.2s ease-out forwards",
                  }}
                />
              </div>
              <style>{`
                @keyframes progress-fill {
                  from { width: 0% }
                  to { width: 100% }
                }
              `}</style>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
