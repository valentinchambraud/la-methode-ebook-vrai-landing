/*
 * TestimonialsCarousel — Carrousel défilant automatiquement en continu
 * Design: Midnight Premium — fond sombre, marges alignées sur le contenu, fondu renforcé
 * - Défilement lent (70s) pour une lecture confortable
 * - Marges latérales identiques au contenu texte (max-w-5xl centré)
 * - Effet de fondu fort sur 15% de chaque côté
 */

const TESTIMONIAL_IMAGES = [
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/FxXxpvtuINSwbqGk.png",
    alt: "Emmanuelle : Première vente à 27€",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/DuHbUuNUOqyCMWMX.png",
    alt: "Jacques : Première vente",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/DqPUPhEFdAlaeETi.png",
    alt: "Séb : Victoire du jour : une nouvelle vente",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/gGdeSsFZZcoyzGew.png",
    alt: "Mp : Première vente !",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/IuqezYDDcqxJMbAa.png",
    alt: "Alice : Ma journée à 1500€",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/SSodsXJDDalUivjn.png",
    alt: "Steven : PREMIÈRE VENTE !",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/XHXGXHXKPZyHFkYP.png",
    alt: "Alice : 25 ventes ce soir",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/kMoFkSPEIBxhgLJF.png",
    alt: "Alice : 3 ventes ce matin !",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/AHtfeLHNmMcYPGzb.png",
    alt: "Louis : Deuxièmes ventes aujourd'hui",
  },
  {
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305920105/fVRjUXRfzPCWDOAE.png",
    alt: "Louis : Première vente d'un PDF à 16,99€",
  },
];

// Duplication pour boucle infinie seamless
const DOUBLED = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];

export function TestimonialsCarousel() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-[#0b0b0f] to-[#0b0b0f]">
      {/* Label centré aligné sur le contenu */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mb-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500">
          Ils ont fait leur première vente en quelques jours : témoignages réels de la communauté
        </p>
      </div>

      {/*
        Conteneur avec marges latérales identiques au reste du contenu.
        Le overflow:hidden est sur ce conteneur interne, pas sur toute la section,
        ce qui permet d'avoir les marges visibles.
        Le masque de fondu s'applique uniquement sur la zone de défilement.
      */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div
          className="relative overflow-hidden rounded-xl"
          style={{
            /* Fondu fort sur 15% de chaque côté — aligné avec les bords du conteneur */
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          {/* Piste défilante — 70s pour un rythme lent et lisible */}
          <div
            className="flex gap-4 w-max"
            style={{
              animation: "carousel-scroll 70s linear infinite",
            }}
          >
            {DOUBLED.map((img, i) => (
              <div
                key={i}
                className="shrink-0 rounded-xl overflow-hidden border border-white/5 hover:border-[#ccf708]/30 transition-colors duration-300 shadow-md"
                style={{ width: "700px" }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
