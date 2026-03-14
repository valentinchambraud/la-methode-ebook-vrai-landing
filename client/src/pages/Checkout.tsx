/*
 * Checkout.tsx — Page de paiement M3TA Stacking™
 * Design: Midnight Premium — inspiré de thepdfmethod.com/checkout
 * Layout: fond noir, formulaire centré, récapitulatif, upsell, garantie
 */

import { useState } from "react";
import { Shield, Lock, Star, Check, ChevronDown, CreditCard, Zap } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/VBlJUskbXMvQgTZU.png";

const TESTIMONIALS_MINI = [
  { name: "Emmanuelle", letter: "E", color: "#ccf708" },
  { name: "Alice", letter: "A", color: "#ec4899" },
  { name: "Louis", letter: "L", color: "#3b82f6" },
  { name: "Jacques", letter: "J", color: "#10b981" },
];

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [upsellChecked, setUpsellChecked] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");

  const total = upsellChecked ? 74 : 27;

  const formatCard = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + " / " + digits.slice(2);
    return digits;
  };

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f", fontFamily: "'Outfit', sans-serif" }}>

      {/* Header minimal */}
      <header className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0a0a0f" }}>
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={LOGO_URL} alt="La Méthode EBOOK" className="h-10" />
          </a>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Lock size={12} className="text-[#ccf708]" />
            <span>Paiement sécurisé SSL</span>
          </div>
        </div>
      </header>

      {/* Progress steps */}
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center justify-center gap-0">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: step >= 1 ? "#ccf708" : "rgba(255,255,255,0.1)",
                color: "white",
              }}
            >
              {step > 1 ? <Check size={14} /> : "1"}
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Vos infos</div>
              <div className="text-xs text-gray-500">Résumé de commande</div>
            </div>
          </div>

          {/* Connector */}
          <div
            className="w-16 h-px mx-4"
            style={{ background: step >= 2 ? "#ccf708" : "rgba(255,255,255,0.1)" }}
          />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: step >= 2 ? "#ccf708" : "rgba(255,255,255,0.1)",
                color: step >= 2 ? "white" : "#6b7280",
              }}
            >
              2
            </div>
            <div>
              <div className={`text-xs font-bold uppercase tracking-wider ${step >= 2 ? "text-white" : "text-gray-500"}`}>Paiement</div>
              <div className="text-xs text-gray-500">Checkout sécurisé</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 pb-16">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            Rejoindre le M3TA Stacking™
          </h1>
          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex">
              {TESTIMONIALS_MINI.map((t, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white text-xs font-bold"
                  style={{
                    background: t.color,
                    borderColor: "#0a0a0f",
                    marginLeft: i > 0 ? "-8px" : "0",
                    zIndex: 4 - i,
                    position: "relative",
                  }}
                >
                  {t.letter}
                </div>
              ))}
            </div>
            <div className="flex">
              {[1,2,3,4,5].map(s => <Star key={s} size={13} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-gray-400 text-sm">Rejoignez +407 élèves</span>
          </div>
        </div>

        {/* Card container */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#111118",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* ORDER SUMMARY */}
          <div className="p-6 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Récapitulatif de commande
            </h2>

            {/* Main product */}
            <div
              className="flex items-center justify-between p-4 rounded-xl mb-3"
              style={{ background: "rgba(204,247,8,0.08)", border: "1px solid rgba(204,247,8,0.2)" }}
            >
              <div>
                <div className="text-white font-bold text-sm">M3TA Stacking™ : Méthode Complète</div>
                <div className="text-gray-400 text-xs mt-0.5">Accès immédiat, 8 modules, Outils IA inclus</div>
              </div>
              <div className="text-right">
                <div className="text-white font-black text-lg">27€</div>
                <div className="text-gray-500 text-xs line-through">197€</div>
              </div>
            </div>

            {/* Upsell */}
            <div
              className="p-4 rounded-xl cursor-pointer transition-all"
              style={{
                background: upsellChecked ? "rgba(22,163,74,0.08)" : "rgba(255,255,255,0.03)",
                border: upsellChecked ? "1px solid rgba(22,163,74,0.3)" : "1px dashed rgba(255,255,255,0.1)",
              }}
              onClick={() => setUpsellChecked(!upsellChecked)}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: upsellChecked ? "#ccf708" : "rgba(255,255,255,0.1)",
                    border: upsellChecked ? "none" : "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {upsellChecked && <Check size={12} className="text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(239,68,68,0.15)", color: "#f87171" }}
                    >
                      87% choisissent ceci
                    </span>
                  </div>
                  <div className="text-white font-bold text-sm">
                    Coaching Groupe + Templates IA Premium
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                    3 sessions de coaching en groupe avec Valentin + 47 templates IA prêts à l'emploi pour créer votre offre en 5 minutes.
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <span className="text-gray-400 text-xs">Alice : "Ma première vente en 48h grâce aux templates"</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-white font-black">+47€</div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPLETE YOUR ORDER */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Finaliser votre commande
              </h2>
              <div className="flex items-center gap-1 text-xs text-[#ccf708]">
                <Lock size={11} />
                <span>Checkout sécurisé</span>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(204,247,8,0.5)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(204,247,8,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Payment method */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                  Moyen de paiement
                </label>
                <div
                  className="flex items-center gap-2 px-4 py-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(204,247,8,0.3)" }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: "#ccf708" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#ccf708" }} />
                  </div>
                  <CreditCard size={16} className="text-gray-400" />
                  <span className="text-white text-sm font-medium">Carte bancaire</span>
                  <div className="ml-auto flex gap-1">
                    {["VISA", "MC", "CB"].map(b => (
                      <span
                        key={b}
                        className="text-xs px-1.5 py-0.5 rounded font-bold"
                        style={{ background: "rgba(255,255,255,0.1)", color: "#9ca3af" }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card info */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                  Informations de carte
                </label>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCard(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 text-white placeholder-gray-600 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  />
                  <div className="flex">
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      placeholder="MM / AA"
                      className="flex-1 px-4 py-3 text-white placeholder-gray-600 text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.08)" }}
                    />
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))}
                      placeholder="CVC"
                      className="flex-1 px-4 py-3 text-white placeholder-gray-600 text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Billing address */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                  Adresse de facturation
                </label>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 text-white placeholder-gray-600 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  />
                  <select
                    className="w-full px-4 py-3 text-gray-400 text-sm outline-none appearance-none"
                    style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <option value="">Pays</option>
                    <option value="FR">France</option>
                    <option value="BE">Belgique</option>
                    <option value="CH">Suisse</option>
                    <option value="CA">Canada</option>
                    <option value="LU">Luxembourg</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Adresse"
                    className="w-full px-4 py-3 text-white placeholder-gray-600 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  />
                </div>
              </div>

              {/* Promo code */}
              <button
                type="button"
                onClick={() => setPromoOpen(!promoOpen)}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-4"
              >
                <ChevronDown
                  size={14}
                  style={{ transform: promoOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                />
                Ajouter un code promo
              </button>
              {promoOpen && (
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Code promo"
                    className="flex-1 px-4 py-2.5 rounded-xl text-white placeholder-gray-600 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
                    style={{ background: "rgba(204,247,8,0.2)", border: "1px solid rgba(204,247,8,0.3)" }}
                  >
                    Appliquer
                  </button>
                </div>
              )}

              {/* Total */}
              <div
                className="flex items-center justify-between py-3 mb-4 border-t border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="text-gray-300 font-semibold">Total dû aujourd'hui</span>
                <span className="text-white font-black text-2xl">{total}€</span>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-black text-lg text-black flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: "linear-gradient(135deg, #ccf708, #b8e006)",
                  boxShadow: "0 4px 24px rgba(204,247,8,0.4), 0 0 0 1px rgba(204,247,8,0.3)",
                  letterSpacing: "-0.01em",
                }}
              >
                <Zap size={20} />
                Rejoindre le M3TA Stacking™
              </button>

              <p className="text-center text-gray-600 text-xs mt-3">
                En cliquant, vous acceptez nos <a href="#" className="text-gray-400 underline">CGV</a> et notre <a href="#" className="text-gray-400 underline">politique de confidentialité</a>.
              </p>
            </form>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-8 text-center">
          <div
            className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl"
            style={{
              background: "rgba(22,163,74,0.06)",
              border: "1px solid rgba(22,163,74,0.2)",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "rgba(22,163,74,0.15)", border: "2px solid rgba(22,163,74,0.4)" }}
            >
              <Shield size={24} className="text-[#ccf708]" />
            </div>
            <div>
              <h3 className="text-white font-black text-lg mb-1">Garantie 30 Jours Remboursé</h3>
              <p className="text-[#ccf708] text-sm font-semibold mb-2">Investissement 100% sans risque</p>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Testez le M3TA Stacking™ pendant 30 jours complets. Si vous n'êtes pas satisfait pour quelque raison que ce soit, nous vous remboursons intégralement. Sans questions.
              </p>
            </div>
            <p className="text-gray-500 text-xs italic">
              "Nous sommes tellement confiants dans la méthode que nous prenons tout le risque à votre place."
            </p>
          </div>
        </div>

        {/* What's included reminder */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "8 modules vidéo complets",
            "Outils IA inclus",
            "Templates prêts à l'emploi",
            "Accès à vie",
            "Mises à jour gratuites",
            "Communauté privée",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Check size={14} className="text-[#ccf708] shrink-0" />
              <span className="text-gray-300 text-xs">{item}</span>
            </div>
          ))}
        </div>

        {/* Footer disclaimers */}
        <div className="mt-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4 text-xs text-gray-600">
            <a href="/" className="hover:text-gray-400 transition-colors">La Méthode EBOOK</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Conditions Générales</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Confidentialité</a>
          </div>
          <p className="text-gray-700 text-xs max-w-2xl mx-auto leading-relaxed">
            <strong className="text-gray-600">Avertissement sur les gains :</strong> Le M3TA Stacking™ ne garantit aucun revenu spécifique. Les témoignages présentés représentent des résultats exceptionnels qui ne s'appliquent pas à l'acheteur moyen. Chaque succès dépend de l'implication, de la motivation et du contexte de chacun. Ce site n'est pas affilié à META Platforms, Inc.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            © {new Date().getFullYear()} La Méthode EBOOK. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
