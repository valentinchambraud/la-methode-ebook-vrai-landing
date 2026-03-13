/**
 * M3TA Stacking Landing Page — Paramétrable par persona (Homme / Femme)
 * Design: "Long-Form Sales Letter" — Inspired by thepdfmethod.com
 * Dark bg (#0a0a0f), purple dashed section borders, green lime CTA, left-aligned text
 * Font: Outfit (headings) + Inter (body)
 * 
 * VSL elements integrated: dashboard 624K€, Trustpilot 4.6/5 512 avis,
 * real student proofs, Systeme.io trophies, 84% IA stat, WhatsApp support
 */

import { useState } from "react";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SocialProof, TrustBadges } from "@/components/SocialProof";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import {
  LOGO_URL, BUNDLE_MOCKUP_IMG, FAQ_DATA,
  PREUVE_CLIENT_1, PREUVE_CLIENT_2, PREUVE_IG,
  HOMME, FEMME,
  DASHBOARD_624K, TRUSTPILOT_SCREENSHOT, TROPHEES_SYSTEMEIO,
  PREUVE_EMMANUELLE, PREUVE_LOUIS, PREUVE_BERARD, PREUVE_DYLAN,
} from "@/lib/constants";
import type { Persona } from "@/lib/constants";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import {
  ChevronDown, Lock, Target, Cpu, FileText,
  BarChart3, Megaphone, Rocket, Settings, TrendingUp, Zap, DollarSign, ArrowRight,
  Star, MessageCircle, Shield, Clock, Users
} from "lucide-react";

/* ==================== SHARED COMPONENTS ==================== */

function SectionDivider() {
  return <div className="border-t-2 border-dashed border-purple-500/60 my-0" />;
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white border border-white/30 rounded-full px-4 py-1.5 mb-5">
      {text}
    </span>
  );
}

function GreenCTA({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full bg-[#00e64d] hover:bg-[#00ff55] text-black font-extrabold text-lg md:text-xl py-5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
      style={{ fontFamily: "'Outfit', sans-serif", boxShadow: "0 0 30px rgba(0,230,77,0.3)" }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      <span className="relative flex items-center justify-center gap-3">
        {text}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
}

function ProofBar() {
  return (
    <div className="mt-5 flex flex-col items-center gap-3">
      <SocialProof />
      <TrustBadges />
    </div>
  );
}

function Narrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-2xl mx-auto px-4 sm:px-6 ${className}`}>{children}</div>;
}

function DashedImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`border-2 border-dashed border-purple-500/50 rounded-xl p-2 ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto rounded-lg" loading="lazy" />
    </div>
  );
}

/* ==================== TESTIMONIAL DATA ==================== */
const TESTIMONIAL_GRID = [
  { url: PREUVE_CLIENT_1, alt: "Résultat élève - 30,1K€ en 4 semaines" },
  { url: PREUVE_CLIENT_2, alt: "Résultat élève - 8 568€ en 1 semaine" },
];

/* ==================== LANDING PAGE COMPONENT ==================== */

interface LandingPageProps {
  persona: Persona;
}

export function LandingPage({ persona }: LandingPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const p = persona;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <EmailCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* HEADER */}
      <header className="relative z-50 bg-[#0a0a0f] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center">
          <a href="#" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="La Méthode EBOOK" className="h-9 md:h-11" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-8 pb-6 md:pt-12 md:pb-8">
        <div className="absolute inset-0 z-0">
          <img src={p.images.heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/80 to-[#0a0a0f]" />
        </div>
        <Narrow className="relative z-10">
          <div className="text-center mb-4">
            <div className="inline-block bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 mb-4">
              <p className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wide">
                Dans les 5 prochaines minutes, je vais te montrer comment copier ce système...
              </p>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-left">
            {p.heroTitle.split("IA").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>{part}<em className="text-violet-400 not-italic">IA</em></span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-6 text-left">
            Sans créer de contenu chaque jour, sans dépenser en publicité, et sans jamais montrer son visage.
          </p>
          <VideoPlaceholder
            label={`VSL de ${p.name} : La Méthode M3TA Stacking`}
            className="purple-glow mb-6"
            aspectRatio="2.5/1"
          />
          <GreenCTA text="Je Veux Accéder au Système Maintenant" onClick={openModal} />
          <ProofBar />

          {/* TRUSTPILOT BADGE */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 inline-flex items-center gap-3">
              <img src={TRUSTPILOT_SCREENSHOT} alt="Trustpilot 4,6/5 - 512 avis" className="h-12 md:h-14 rounded-lg" />
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i <= 4 ? "text-green-500 fill-green-500" : "text-green-500/50 fill-green-500/50"}`} />
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">4,6/5 pour +512 avis vérifiés</p>
              </div>
            </div>
          </div>
        </Narrow>
      </section>

      <TestimonialsCarousel />
      <SectionDivider />

      {/* PREUVES RAPIDES — VSL STYLE */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <Badge text="Preuves" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight">
            Des Gens Ordinaires Font Leur Première Vente en Moins de 72 Heures
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-6">
            Juste en se branchant sur un système qui fonctionne déjà. Voici ce que nos élèves disent :
          </p>

          {/* Real student proof screenshots from VSL */}
          <div className="space-y-4 mb-8">
            <DashedImage src={PREUVE_EMMANUELLE} alt="Emmanuelle — Première vente à 27€" />
            <p className="text-gray-400 text-sm italic text-center">Emmanuelle : "Je viens de réaliser ma toute première vente à 27€. La preuve que c'est possible."</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <DashedImage src={PREUVE_LOUIS} alt="Louis — Résultats" />
            <DashedImage src={PREUVE_DYLAN} alt="Dylan — 8 ventes" />
          </div>

          <p className="text-gray-300 text-base md:text-lg mb-4">
            Certains gagnent même <strong className="text-white">300€ ou plus dans leurs premières semaines</strong>. Comme Bérard (4 ventes), Michel (3 ventes), Sofian (4 ventes), ou Dylan (8 ventes).
          </p>

          <DashedImage src={PREUVE_BERARD} alt="Bérard — 4 ventes" className="mb-6" />

          <p className="text-gray-400 text-sm mb-8">
            Et vous pourrez vérifier par vous-même et discuter avec eux quand vous aurez rejoint notre communauté.
          </p>

          <GreenCTA text="Je Veux Rejoindre la Communauté" onClick={openModal} />
          <ProofBar />
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* REALITY CHECK */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <Badge text="Mise au point" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight">
            Avant que tu te dises "encore un truc trop beau pour être vrai"...
          </h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>Laissez-moi être très clair{p.pronoun === "elle" ? "e" : ""}.</p>
            <p>Ces 12 derniers mois, j'ai généré <strong className="text-white">plus de 624 523€</strong> en vendant des produits digitaux.</p>
          </div>

          {/* Real dashboard screenshot from VSL */}
          <DashedImage src={DASHBOARD_624K} alt="Dashboard Systeme.io — 624 523€ de ventes totales" className="my-6" />

          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>Pas en jouant au gourou. Pas en dansant sur TikTok.</p>
            <p>En utilisant un <strong className="text-white">système simple que n'importe qui peut copier</strong>.</p>
            <p>Le système exact que je vais te partager, c'est celui qui m'a rapporté cet argent.</p>
          </div>

          {/* Trophées Systeme.io */}
          <div className="mt-6 mb-6">
            <DashedImage src={TROPHEES_SYSTEMEIO} alt="5 Trophées Systeme.io M3TA STACKING™" />
            <p className="text-gray-500 text-xs text-center mt-2">5 trophées Systeme.io reçus pour M3TA STACKING™ (50K€, 100K€, 200K€...)</p>
          </div>

          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>Et si aujourd'hui, j'ai décidé de vous partager ce système exact, c'est parce qu'en le partageant, je peux gagner bien plus !</p>
            <p>Nous proposons ensuite à nos meilleurs élèves de <strong className="text-white">s'associer</strong>, et de les aider à croître et faire grossir leur business ensemble.</p>
          </div>
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* POURQUOI LES AUTRES MODÈLES ÉCHOUENT — VSL STYLE */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <DashedImage src={p.images.comparison} alt="Comparaison business models" className="mb-8" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Mais Si Tu Regardes Cette Page, Tu As Probablement Déjà Essayé...</h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>Peut-être que c'était le <strong className="text-white">dropshipping</strong>. Des marges ridicules. Des fournisseurs qui ne te répondent même pas. Des clients qui te harcèlent : "Où est mon colis ? Ça fait 4 semaines."</p>
            <p>Peut-être l'<strong className="text-white">affiliation</strong>, du coaching, faire des webinaires, du closing ou du copywriting.</p>
            <p>Peut-être une formation qui t'a promis la liberté financière. Et qui ne t'a rien livré de concret.</p>
            <p>Si t'es comme la plupart des gens, ça n'a probablement pas marché.</p>
            <p><strong className="text-white">Pas parce que t'as pas essayé. Pas parce que t'es pas assez intelligent{p.pronoun === "elle" ? "e" : ""}.</strong></p>
            <p>Ça n'a pas marché parce que <strong className="text-red-400">ces modèles sont cassés</strong>.</p>

            {/* Le closing / coaching */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4 mt-4">
              <p className="font-bold text-white mb-2">Le closing et le coaching ?</p>
              <p>Tu ne veux plus que ton planning ressemble à un enfer. T'en as marre de passer ta vie à faire des appels de vente, d'avoir autant de clients à coacher.</p>
            </div>

            {/* Le copywriting / freelancing */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4">
              <p className="font-bold text-white mb-2">Le copywriting ou le freelancing ?</p>
              <p>Tu galères de plus en plus à trouver des clients. Et tu sais très bien que c'est à cause de l'<strong className="text-white">Intelligence Artificielle</strong> et des prestataires pas chers.</p>
            </div>

            <p className="mt-4">Les cartes sont littéralement truquées contre toi.</p>
            <p>Tous ces modèles te demandent de faire la chose la plus difficile : <strong className="text-white">créer quelque chose que tu n'es pas sûr{p.pronoun === "elle" ? "e" : ""} de vendre</strong>.</p>
          </div>
          <div className="mt-8">
            <GreenCTA text="Je Veux Un Vrai Système Qui Marche" onClick={openModal} />
            <ProofBar />
          </div>
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* MON HISTOIRE */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <Badge text="Mon Parcours" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight">{p.storyTitle}</h2>

          <DashedImage src={p.images.portrait} alt={`${p.name} - portrait`} className="mb-4" />
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-2">{p.name}</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-400">
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">{p.handle}</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">74K Instagram</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">11.4K YouTube</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">14K Newsletter</span>
            </div>
          </div>

          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>{p.storyIntro}</p>
            <p>Ça fait <strong className="text-white">9 ans</strong> que je travaille sur internet.</p>
            <p>{p.storyP1}</p>
            <p>{p.storyP2}</p>
            <p>{p.storyP3}</p>

            {/* Ancienneté — preuve VSL */}
            <div className="bg-violet-500/5 border border-violet-500/20 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-400">Nos plus vieux avis positifs datent de <strong className="text-white">2021</strong>. Nos élèves étaient déjà satisfaits de la qualité de nos produits il y a 5 ans.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-white mt-8 mb-3">J'ai Décidé de Tout Remettre à Plat</h3>
            <p>{p.storyDecision}</p>
            <p>J'ai vu ce qui fonctionnait. Et surtout, ce qui ne fonctionnait pas.</p>
            <p>J'ai compris que 99% des gens utilisent la plateforme de la mauvaise manière. Ils se compliquent la vie, perdent de l'argent et finissent par abandonner.</p>

            <h3 className="text-xl md:text-2xl font-extrabold text-white mt-8 mb-3">Et Puis, Tout a Basculé...</h3>
            <p>{p.storyTurning}</p>
            <p>Les résultats étaient stupéfiants. Des campagnes rentables en quelques jours, pas en quelques mois. Des coûts d'acquisition qui chutaient, tandis que la valeur par client explosait.</p>

            <h3 className="text-xl md:text-2xl font-extrabold text-white mt-8 mb-3">La Découverte Qui a Tout Changé</h3>
            <p>Ce n'était pas une technique secrète ou un "hack" temporaire. C'était un <strong className="text-white">système</strong>. Un empilement (un "stacking") de stratégies simples qui, une fois combinées, créaient un effet de levier surpuissant.</p>

            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span><strong>Pas besoin de créer un produit complexe</strong></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span><strong>Pas besoin d'une grosse audience</strong></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span><strong>Pas besoin d'être un expert technique</strong></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span><strong>Pas besoin de montrer son visage</strong></li>
            </ul>

            <p className="mt-4">{p.storyResult}</p>
            <p>Puis j'ai généré des centaines de milliers d'euros avec ce système :</p>
          </div>

          <DashedImage src={p.images.dashboard} alt="Dashboard revenus" className="mt-6 mb-8" />
          <GreenCTA text="Je Veux Accéder au Système" onClick={openModal} />
          <ProofBar />
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* POURQUOI CE MODÈLE */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]" id="methode">
        <Narrow>
          <Badge text="Le Système" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">"C'est Quoi la Différence ?" "C'est Juste une Formation de Plus ?"</h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>Voilà la vérité.</p>
            <p>C'est un <strong className="text-white">business de produits digitaux entièrement fait pour toi</strong>.</p>
            <p>Tu ne reçois pas un lien avec un "bonne chance".</p>

            <div className="space-y-3 mt-4">
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <p>Tu reçois les <strong className="text-white">idées de produits digitaux qui se vendent déjà</strong>.</p>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <p>Tu reçois les <strong className="text-white">stratégies exactes qui fonctionnent déjà</strong>.</p>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 flex items-start gap-3">
                <span className="text-green-400 mt-0.5">✓</span>
                <p>Tu reçois une <strong className="text-white">formation pas à pas pour lancer en moins d'une heure</strong>.</p>
              </div>
            </div>

            <p className="mt-6">Et tu n'es pas seul{p.pronoun === "elle" ? "e" : ""} :</p>

            {/* Assistance personnalisée — VSL argument */}
            <div className="bg-violet-500/5 border border-violet-500/20 rounded-xl p-5 mt-2">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-5 h-5 text-violet-400" />
                <h4 className="font-bold text-white">Assistance Personnalisée 7/7</h4>
              </div>
              <p className="text-gray-400 text-sm">Nous prenons le temps de vous répondre par <strong className="text-white">WhatsApp et Emails</strong>. Parce que vos résultats, ce sont nos résultats !</p>
            </div>

            <p className="mt-6">Tu n'as pas besoin d'audience. Tu n'as pas besoin de montrer ton visage. Et à chaque vente, tu es payé{p.pronoun === "elle" ? "e" : ""} directement.</p>
          </div>
        </Narrow>
      </AnimatedSection>

      {/* LE SECRET — FLOWCHART */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Comment Ça Marche Concrètement</h2>
          <p className="text-gray-400 mb-10 text-base md:text-lg">Le Processus M3TA Stacking en 6 Étapes</p>

          <div className="flex justify-center mb-10">
            <img src={p.images.sixSteps} alt="Les 6 étapes" className="max-w-[200px] md:max-w-[260px]" />
          </div>

          {(() => {
            const steps = [
              { icon: Target, title: "Choisis une idée", desc: "Tu choisis une idée de produit digital dans la liste que je propose. Des produits dans plusieurs niches qui génèrent des centaines de ventes chaque jour.", color: "bg-red-500/20" },
              { icon: Cpu, title: "Crée avec l'IA", desc: "Tu récupères les stratégies qui fonctionnent déjà. Tu copies et tu lances.", color: "bg-blue-500/20" },
              { icon: Megaphone, title: "Lance ta pub", desc: "L'algorithme Meta identifie les personnes qui cherchent activement cette solution.", color: "bg-violet-500/20" },
              { icon: DollarSign, title: "Encaisse", desc: "Tu es payé(e) sur chaque vente. Tu postes et tu encaisses. C'est tout.", color: "bg-green-500/20" },
              { icon: Rocket, title: "Upsells automatiques", desc: "Le système propose automatiquement des offres complémentaires qui triplent ton revenu.", color: "bg-orange-500/20" },
              { icon: TrendingUp, title: "Scale", desc: "Tu augmentes le budget ou tu dupliques dans d'autres niches.", color: "bg-emerald-500/20" },
            ];
            return (
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-violet-600/40" />
                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <div key={i} className="relative flex items-start gap-5 pl-14">
                      <div className={`absolute left-3 w-7 h-7 rounded-full ${step.color} border-2 border-violet-500/60 flex items-center justify-center`}>
                        <step.icon className="w-3.5 h-3.5 text-violet-300" />
                      </div>
                      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 flex-1 hover:border-violet-500/20 transition-colors">
                        <h3 className="font-bold text-white mb-1">Étape {i + 1} : {step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="mt-10 space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p><strong className="text-white">C'est vraiment aussi simple que ça.</strong></p>
          </div>
        </Narrow>
      </AnimatedSection>

      {/* L'IA — ARGUMENT VSL : 84% N'UTILISENT PAS L'IA */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">"Est-ce Que C'est Encore Possible en 2026 ?"</h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>L'industrie des produits digitaux est en <strong className="text-white">pleine explosion</strong>. On parle de milliards d'euros chaque année en France !</p>

            {/* 84% stat — VSL argument */}
            <div className="bg-violet-500/5 border border-violet-500/20 rounded-xl p-6 my-6 text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-violet-400 mb-2">84%</p>
              <p className="text-gray-300">des personnes <strong className="text-white">n'utilisent pas l'IA</strong></p>
              <p className="text-gray-500 text-sm mt-2">Vous pensez peut-être que tout le monde utilise ChatGPT... Alors qu'en réalité, très peu de personnes l'utilisent. C'est votre avantage.</p>
            </div>

            <p>Et puis un produit digital bien fait fait gagner du temps, de la clarté, et résout un vrai problème que l'IA seule ne pourrait pas résoudre !</p>

            <h3 className="text-xl font-extrabold text-white mt-6 mb-3">Pourquoi ça marche aussi bien aujourd'hui ?</h3>
            <p>Parce que les gens pensent que ça ne marche pas ou plus... <strong className="text-white">Et tant mieux, comme ça nous on en profite !</strong></p>
            <p>En le faisant avec la façon intelligente, qui est de se brancher sur un système qui a fait ses preuves.</p>
          </div>
        </Narrow>
      </AnimatedSection>

      {/* OPPORTUNITY CTA */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">L'Opportunité Est Là. Maintenant.</h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            <p>Ce n'est pas une question de "si" ça marche. C'est une question de "quand" VOUS allez commencer.</p>
            <p>Chaque jour que vous attendez, c'est un jour de revenus potentiels que vous laissez sur la table.</p>
          </div>
          <GreenCTA text="Je Saisis l'Opportunité Maintenant" onClick={openModal} />
          <ProofBar />
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* RÉSULTATS ÉTUDIANTS */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]" id="resultats">
        <Narrow>
          <Badge text="Résultats" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Nos Étudiants Parlent Mieux Que Nous</h2>
          <DashedImage src={p.images.studentResults} alt="Nos élèves réussissent" className="mb-8" />
          <div className="space-y-6 mb-10">
            {TESTIMONIAL_GRID.map((t, i) => (
              <DashedImage key={i} src={t.url} alt={t.alt} />
            ))}
          </div>
          <h3 className="text-xl font-extrabold mb-6">Les Messages de la Communauté</h3>
          <DashedImage src={PREUVE_IG} alt="Preuve Instagram" />

          {/* Trustpilot reminder */}
          <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
            <Shield className="w-8 h-8 text-green-500 shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">Vérifiable sur Trustpilot</p>
              <p className="text-gray-400 text-xs">4,6/5 avec +512 avis vérifiés — "Les Programmes™ de Valentin Chambraud"</p>
            </div>
          </div>
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* RISQUE VS RÉCOMPENSE */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Le Ratio Risque/Récompense est juste FOU</h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>La partie la plus dure d'un business en ligne ? Ce n'est pas la technique. Ce n'est pas la page de vente.</p>
            <p><strong className="text-white">C'est le produit que tu vends.</strong> Avoir un produit que les gens veulent vraiment acheter.</p>
            <p>Tu n'as pas besoin de rechercher l'idée toi-même. Il existe déjà des produits prouvés qui se vendent chaque jour.</p>

            <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4 mt-4">
              <p><strong className="text-red-400">Si votre boutique de dropshipping fait un flop :</strong> Vous avez perdu des milliers d'euros en formation et en publicités.</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4">
              <p><strong className="text-red-400">Si votre produit Amazon ne se vend pas :</strong> Même chose.</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
              <p><strong className="text-green-400">Mais avec le M3TA Stacking ?</strong> Au lieu de passer des mois à créer ton propre produit, tu prends une idée qu'on te donne, tu le crées avec nos modèles et l'IA, et tu le vends aujourd'hui.</p>
            </div>
          </div>
          <div className="mt-8">
            <GreenCTA text="Je Veux un Risque Minimal" onClick={openModal} />
            <ProofBar />
          </div>
        </Narrow>
      </AnimatedSection>

      {/* LES 8 ÉTAPES */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <Badge text="La Méthode" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Les 8 Étapes Exactes du M3TA Stacking™</h2>
          <p className="text-gray-400 mb-10 text-base md:text-lg">Voici exactement ce que vous allez apprendre et implémenter :</p>
          <div className="space-y-4">
            {[
              { icon: Target, num: "#1", title: "Trouver une Niche Ultra-Rentable", desc: "C'est là que TOUT le monde se trompe. On vous apprend à choisir des niches basées sur vos passions. C'est une erreur. Je vous montre ma méthode pour trouver des problèmes que des milliers de personnes cherchent activement à résoudre MAINTENANT." },
              { icon: FileText, num: "#2", title: "Créer un Produit Digital Irrésistible avec l'IA", desc: "Même si vous ne connaissez RIEN au sujet, mes prompts IA vous aideront à créer un contenu de grande valeur qui résout un vrai problème." },
              { icon: BarChart3, num: "#3", title: "Construire une Page de Vente Qui Convertit", desc: "Votre page de vente est votre commercial qui travaille 24/7. Je vous donne mes propres templates qui transforment des inconnus en acheteurs." },
              { icon: Rocket, num: "#4", title: "Configurer le Tunnel de Vente Automatisé", desc: "C'est le cœur du \"Stacking\". Je vous montre comment mettre en place les order bumps et les upsells qui peuvent tripler votre revenu par client." },
              { icon: Megaphone, num: "#5", title: "Créer des Publicités Meta Simples et Efficaces", desc: "L'algorithme de Meta est magique. Je vous montre comment créer des publicités ridiculement simples qui ciblent les bonnes personnes au bon moment." },
              { icon: Zap, num: "#6", title: "Lancer des Campagnes Rentables (Même avec 5€/jour)", desc: "Pas besoin d'un budget énorme. Je vous montre la structure de campagne exacte pour être rentable rapidement." },
              { icon: Settings, num: "#7", title: "Mettre en Place la Livraison Automatique", desc: "Quand quelqu'un achète, il reçoit son produit instantanément. Votre business tourne 24/7, que vous dormiez ou que vous soyez à la plage." },
              { icon: TrendingUp, num: "#8", title: "Analyser et Scaler à 100k€/mois", desc: "Une fois que votre premier système est rentable, vous pouvez augmenter le budget ou dupliquer dans d'autres niches." },
            ].map((step, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-violet-500/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">{step.num}</span>
                      <h3 className="font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* CURRICULUM */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]" id="curriculum">
        <Narrow>
          <Badge text="Curriculum" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Voici Ce Que Tu Reçois Aujourd'hui</h2>
          <DashedImage src={BUNDLE_MOCKUP_IMG} alt="La Méthode Ebook - Bundle complet" className="mb-8 mt-6" />

          {/* What you get — VSL style */}
          <div className="space-y-3 mb-8">
            {[
              { icon: Target, text: "Un accès instantané à des idées de produits digitaux prouvés" },
              { icon: FileText, text: "Des modèles prêts à l'emploi pour être lancés dans l'heure" },
              { icon: Rocket, text: "Une formation complète pour vous lancer pas à pas" },
              { icon: MessageCircle, text: "Assistance personnalisée WhatsApp & Email 7/7" },
              { icon: Cpu, text: "27 Prompts IA Persuasifs (valeur 97€)" },
              { icon: BarChart3, text: "Template Page de Vente Haute Performance (valeur 97€)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                <item.icon className="w-5 h-5 text-green-400 shrink-0" />
                <p className="text-gray-300 text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-300 text-base md:text-lg mb-8">Accès immédiat à la formation vidéo complète de 8 modules :</p>
          <div className="space-y-4">
            {[
              { num: "MODULE 1", title: "Trouver Votre Idée Rentable (Validée par les Données)", desc: "Pas de devinettes. Je vous montre exactement comment identifier les problèmes que des milliers de personnes cherchent activement à résoudre." },
              { num: "MODULE 2", title: "Créer Votre Produit Digital en 5 Minutes avec l'IA", desc: "Pas d'expérience en écriture ? Parfait. Je vous guide pas à pas, prompt par prompt, pour utiliser l'IA et créer une offre à haute valeur perçue." },
              { num: "MODULE 3", title: "Construire Votre Page de Vente à Haute Conversion", desc: "Je vous donne ma structure de page de vente et ma formule de copywriting. Pas besoin d'être un pro des mots, il suffit de remplir les trous." },
              { num: "MODULE 4", title: "Mettre en Place Votre Tunnel de Vente (Order Bumps & Upsells)", desc: "Le secret des hauts revenus. Vous apprendrez à configurer les offres additionnelles qui financent vos pubs et génèrent le profit." },
              { num: "MODULE 5", title: "Créer des Visuels Publicitaires Qui Stoppent le Défilement", desc: "Je vous montre comment créer des visuels publicitaires simples mais percutants, sans compétences en design." },
              { num: "MODULE 6", title: "Lancer Vos Campagnes Meta Ads de A à Z", desc: "Le cœur technique, simplifié à l'extrême. Business Manager, pixel, audiences, tests... Je vous montre chaque clic." },
              { num: "MODULE 7", title: "Optimiser pour la Rentabilité", desc: "Une fois les pubs lancées, comment s'assurer qu'elles restent rentables ? Je vous apprends à lire les 3 métriques clés (CPA, AOV, ROAS)." },
              { num: "MODULE 8", title: "Scaler et Automatiser Votre Empire Digital", desc: "C'est ici que vous passez de \"side-project\" à véritable entrepreneur du digital." },
            ].map((mod, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-violet-500/20 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 text-xs font-bold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full mt-0.5">{mod.num}</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{mod.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Micro-entreprise — VSL argument */}
          <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-gray-300 text-sm">Et dans la formation, on te montre aussi comment <strong className="text-white">créer facilement ta micro-entreprise</strong>, une fois les premiers paiements arrivés ! Ça prend 30 minutes pour être en règle.</p>
          </div>

          <div className="mt-8">
            <GreenCTA text="Je Veux Tout Ça pour 27€" onClick={openModal} />
            <ProofBar />
          </div>
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* OBJECTIONS */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <Badge text="Les Vraies Questions" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Adressons les Doutes</h2>
          <div className="flex justify-center mb-8">
            <img src={p.images.objections} alt="Personnage qui se pose des questions" className="w-full max-w-[200px]" />
          </div>
          <p className="text-gray-300 text-base md:text-lg mb-8">Je sais que vous avez des doutes. Franchement, j'en aurais aussi.</p>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3 italic">"Si ça marche si bien, pourquoi vendez-vous une formation dessus ?"</h3>
              <p className="text-gray-300 text-base leading-relaxed">Question juste. La vérité ? Il y a des MILLIERS de niches potentielles, et je ne peux pas toutes les exploiter moi-même. Et surtout, en partageant ce système, je peux ensuite proposer à mes meilleurs élèves de s'associer et de faire grossir leur business ensemble. C'est ce qu'on sait faire de mieux !</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3 italic">"Je ne suis pas à l'aise avec la technique ou avec l'IA..."</h3>
              <p className="text-gray-300 text-base leading-relaxed">Si vous savez utiliser Facebook et suivre une vidéo, vous pouvez le faire. Tout est montré clic par clic, et l'IA fait le plus dur. Pas besoin de savoir coder, ni d'être un designer. Et on a une assistance personnalisée pour vous aider à chaque étape.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3 italic">"J'ai déjà échoué avec d'autres business en ligne..."</h3>
              <p className="text-gray-300 text-base leading-relaxed">C'est PRÉCISÉMENT pour ça que ce modèle est différent. Ce n'est pas tous les formateurs qui ont <strong className="text-white">4,6/5 avec +500 avis</strong> comme nous ! Le M3TA Stacking élimine toutes les causes d'échec habituelles.</p>
            </div>
          </div>
        </Narrow>
      </AnimatedSection>

      {/* OFFRE PRINCIPALE */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]" id="offre">
        <Narrow>
          <Badge text="Passez à l'Action" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Le M3TA Stacking™ pour Seulement 27€</h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            <p>La valeur totale ? Largement plus de <strong className="text-white">800€</strong>.</p>
            <p>Le prix normal de cette formation complète est plutôt de <span className="line-through text-gray-500">97€</span>.</p>
          </div>

          {/* Prix — VSL style */}
          <div className="bg-violet-500/5 border-2 border-violet-500/30 rounded-2xl p-8 text-center mb-6">
            <p className="text-gray-400 text-sm mb-2">Ce mois-ci, nous allons descendre le prix à :</p>
            <p className="text-5xl md:text-6xl font-extrabold text-white mb-2">27€</p>
            <p className="text-gray-500 text-xs">C'est moins cher qu'un resto. C'est le prix d'un mauvais fast-food.</p>
          </div>

          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            <p>Oui je sais c'est rien du tout. Mais je sais que mettre un prix, même petit, va surtout attirer des personnes <strong className="text-white">motivées et sérieuses</strong>.</p>
            <p>Une fois qu'on aura le nombre suffisant de bons profils, <strong className="text-red-400">on coupera automatiquement la promotion</strong>. Et soit on fermera les portes, soit le prix repassera à 97€.</p>
            <p>Et sache que ça peut se passer à n'importe quel moment !</p>
          </div>
          <GreenCTA text="Oui, Je Veux un Accès Immédiat pour 27€" onClick={openModal} />
          <ProofBar />
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* GARANTIE */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Garantie 30 Jours Satisfait ou Remboursé</h2>
          <div className="flex justify-center mb-6">
            <img src={p.images.guarantee} alt="Garantie 30 jours" className="w-40 md:w-48" />
          </div>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p><strong className="text-white">Oui, on te rembourse intégralement. Sans poser de questions.</strong></p>
            <p>On prend tout le risque à ta place.</p>
            <p>Parce qu'on sait que notre produit est tellement bon.</p>
            <p>Parce qu'on ne veut pas passer à côté de bons profils, juste parce qu'ils étaient trop méfiants...</p>
            <p>Et je le comprends ! Certains ont pu se faire avoir par des formateurs mal intentionnés et incompétents !</p>
            <p><strong className="text-white">Ce n'est pas tous les formateurs qui ont 4,6/5 avec +500 avis comme nous !</strong></p>
          </div>
        </Narrow>
      </AnimatedSection>

      {/* AVERTISSEMENT */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Ce N'est PAS Pour Tout le Monde</h2>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>Si vous cherchez un bouton magique pour gagner de l'argent sans rien faire, ce n'est pas ça.</p>
            <p>Le M3TA Stacking fonctionne, mais vous devez suivre les étapes et faire le travail. Vous devrez passer quelques heures à créer votre première offre. Vous devrez mettre en place une page de vente. Vous devrez lancer quelques publicités.</p>
            <p>Si vous n'êtes pas prêt{p.pronoun === "elle" ? "e" : ""} à faire ces quelques actions simples, s'il vous plaît, n'achetez pas ce programme.</p>
          </div>
        </Narrow>
      </AnimatedSection>

      {/* LE CHOIX */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <Badge text="Votre Décision" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Continuer à Stagner ou Enfin Réussir ?</h2>
          <DashedImage src={p.images.twoPaths} alt="Deux chemins" className="mb-8" />
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p><strong className="text-white">Le choix est simple :</strong></p>
            <p>Continuer à sauter d'un business à l'autre, à gérer des stocks, des fournisseurs et des maux de tête, en voyant vos rêves de liberté s'éloigner...</p>
            <p>Ou investir 27€ aujourd'hui dans un système prouvé.</p>

            {/* Timing — VSL style */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-violet-400" />
                <p className="font-bold text-white">Quand tu cliques sur le bouton :</p>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-400">→</span>Tu obtiens un accès instantané</li>
                <li className="flex items-start gap-2"><span className="text-green-400">→</span>Dans les 60 prochaines minutes, ton business est lancé</li>
                <li className="flex items-start gap-2"><span className="text-green-400">→</span>Et dans les 24 à 72 heures, ta première vente</li>
              </ul>
            </div>

            <p className="font-extrabold text-white text-xl mt-4">C'est la puissance d'un système qui est déjà prouvé.</p>
          </div>
        </Narrow>
      </AnimatedSection>

      {/* CTA FINAL */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center">Rejoignez Le M3TA Stacking™</h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-6">
            <Lock className="w-4 h-4" />
            <span>PAIEMENT SÉCURISÉ</span>
          </div>
          <GreenCTA text="Je Démarre Mon Premier Système Maintenant" onClick={openModal} />
          <ProofBar />

          {/* Final Trustpilot + community reminder */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <Star className="w-5 h-5 text-green-500 shrink-0" />
              <p className="text-gray-400 text-xs">4,6/5 sur Trustpilot avec +512 avis</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-violet-400 shrink-0" />
              <p className="text-gray-400 text-xs">Communauté active + assistance 7/7</p>
            </div>
          </div>
        </Narrow>
      </AnimatedSection>

      <SectionDivider />

      {/* FAQ */}
      <FAQSection persona={p} />

      {/* BONUS */}
      <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
        <Narrow>
          <Badge text="Bonus pour Action Rapide" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Votre Empire Digital Commence Aujourd'hui.</h2>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-4 bg-white/5 border border-purple-500/20 rounded-xl px-6 py-4">
              {["02", "14", "37"].map((val, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-red-600/20 rounded-lg px-3 py-2">
                    <span className="text-2xl font-bold text-red-400">{val}</span>
                  </div>
                  {i < 2 && <span className="text-red-400 text-xl">:</span>}
                </div>
              ))}
              <div className="text-xs text-gray-400 ml-2">
                <div>heures</div>
                <div>restantes</div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
            Ta première vente pourrait arriver dans les 24 à 72 prochaines heures. Comme la plupart de nos élèves.
          </p>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Je suis tellement confiant{p.pronoun === "elle" ? "e" : ""} dans cette méthode que si vous ne faites pas de vente dans les 30 jours suivant l'implémentation exacte, je vous rembourse intégralement. Sans poser de questions.
          </p>
          <GreenCTA text="Je Lance Mon Empire Digital (27€)" onClick={openModal} />
          <ProofBar />

          <p className="text-center text-gray-500 text-sm mt-6 italic">On se retrouve de l'autre côté.</p>
        </Narrow>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="py-12 bg-[#050508] border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <img src={LOGO_URL} alt="M3TA Stacking" className="h-12 mx-auto mb-6" />
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-500 mb-8">
            <a href="#methode" className="hover:text-gray-300 transition-colors">La Méthode</a>
            <span className="text-gray-700">|</span>
            <a href="#resultats" className="hover:text-gray-300 transition-colors">Résultats Étudiants</a>
            <span className="text-gray-700">|</span>
            <a href="#curriculum" className="hover:text-gray-300 transition-colors">Ce qui est inclus</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">CGV</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Confidentialité</a>
          </nav>
          <p className="text-gray-600 text-xs mb-6">© M3TA Stacking™. Tous Droits Réservés.</p>
          <div className="space-y-4 text-gray-600 text-[10px] leading-relaxed">
            <p>M3TA Stacking™ ne vous promet en aucun cas que vous gagnerez une somme spécifique ou atteindrez un certain niveau de revenu. Votre succès dépend de votre parcours, de votre dévouement, de votre désir et de votre motivation. Les témoignages présentés sont des résultats exceptionnels qui ne s'appliquent pas à l'acheteur moyen et ne garantissent pas que quiconque obtiendra des résultats identiques ou similaires.</p>
            <p>Ce site ne fait pas partie des plateformes META (Facebook, Instagram) ou de META Platforms, Inc. De plus, ce site n'est en aucun cas approuvé par META. META, FACEBOOK et INSTAGRAM sont des marques déposées de META Platforms, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ==================== FAQ (with persona-aware creator question) ==================== */
function FAQSection({ persona }: { persona: Persona }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Replace the creator FAQ question with persona-specific version
  const faqData = FAQ_DATA.map((item) => {
    if (item.q.includes("créateur") || item.q.includes("créatrice")) {
      return { q: persona.faqCreator, a: persona.faqCreatorAnswer };
    }
    return item;
  });

  return (
    <AnimatedSection className="py-14 md:py-20 bg-[#0a0a0f]">
      <Narrow>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Foire Aux Questions</h2>
        <p className="text-gray-400 mb-10">Vous avez des questions ? Nous avons les réponses.</p>
        <div className="space-y-3">
          {faqData.map((item, i) => (
            <div key={i} className="border border-white/5 rounded-xl overflow-hidden bg-white/[0.02]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-medium text-white text-sm md:text-base pr-4">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-violet-400 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Narrow>
    </AnimatedSection>
  );
}

/* ==================== DEFAULT EXPORT (backward compat — shows homme by default) ==================== */
export default function Home() {
  return <LandingPage persona={HOMME} />;
}
