import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PerfusionProduct } from "@/data/perfusionProducts";

interface Action {
  label: string;
  to: string;
}

interface ProductShowcaseHeroProps {
  product: PerfusionProduct;
  primary: Action;
  secondary: Action;
  /** Use "h2" where the page already has its own h1 (e.g. the homepage). */
  headingAs?: "h1" | "h2";
  /** Show the "New · Now available" tag. */
  isNew?: boolean;
  /** Extra classes for the section, e.g. room for carousel controls. */
  className?: string;
}

/**
 * Dark hero with a product-tinted particle video and three glass cards of
 * real output (middle card featured). Used on the product page and, for the
 * featured product, at the top of the homepage.
 */
export const ProductShowcaseHero = ({
  product,
  primary,
  secondary,
  headingAs = "h1",
  isNew = false,
  className = "",
}: ProductShowcaseHeroProps) => {
  const navigate = useNavigate();
  const Heading = headingAs;
  const showcase = product.heroShowcase ?? [];

  return (
      <section className={`relative overflow-hidden bg-black flex flex-col justify-center min-h-[calc(100svh-6rem)] py-8 lg:py-10 [@media(max-height:760px)]:py-4 ${className}`}>
        {/* Particle video, greyscaled then tinted with the product colour.
            Scaled up so the stock footage's corner watermark is cropped out. */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-125 grayscale brightness-150 contrast-125 opacity-70"
        >
          <source src="/images-bg2.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 mix-blend-multiply pointer-events-none"
          style={{ backgroundColor: product.heroTint ?? "#2563eb" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[70rem] h-[28rem] rounded-full blur-[140px] opacity-40 pointer-events-none"
          style={{ backgroundColor: product.heroTint ?? "#2563eb" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 [@media(max-height:760px)]:mb-2 flex flex-wrap items-center justify-center gap-2">
              {isNew && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-[11px] font-bold uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  New · Now available
                </span>
              )}
              <Badge className="bg-white/10 text-white border border-white/20 hover:bg-white/15">
                {product.badge}
              </Badge>
            </div>
            <Heading className="text-3xl md:text-4xl [@media(min-width:1280px)_and_(min-height:761px)]:text-5xl [@media(max-height:760px)]:text-3xl font-bold tracking-tight leading-[1.1]">
              <span className="text-white">{product.heroHeadline}</span>{" "}
              <span
                className={`bg-gradient-to-r ${product.heroHighlightClass ?? "from-sky-300 via-cyan-200 to-blue-200"} bg-clip-text text-transparent`}
              >
                {product.heroHighlight}
              </span>
            </Heading>
            <p className="text-sm [@media(min-width:768px)_and_(min-height:761px)]:text-base text-gray-300 mt-4 [@media(max-height:760px)]:mt-2 leading-relaxed max-w-3xl mx-auto">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 [@media(max-height:760px)]:mt-4">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-200 px-8 py-3 rounded-full"
                onClick={() => navigate(primary.to)}
              >
                {primary.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full"
                onClick={() => navigate(secondary.to)}
              >
                {secondary.label}
              </Button>
            </div>
          </div>

          {/* Glass cards: real output, middle card featured */}
          <div className="mt-8 [@media(min-width:1024px)_and_(min-height:761px)]:mt-10 [@media(max-height:760px)]:mt-5 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.35fr_1fr] gap-5 md:gap-6 items-center">
            {showcase.map((card, i) => {
              const featured = i === 1;
              return (
                <figure
                  key={card.src}
                  className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-md shadow-2xl transition-transform duration-500 hover:-translate-y-1 ${
                    featured ? "p-3 md:p-4" : "p-3 md:scale-95"
                  }`}
                >
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/2 opacity-40 pointer-events-none"
                    style={{
                      background: `linear-gradient(to top, ${product.heroTint ?? "#2563eb"}, transparent)`,
                    }}
                  />
                  <img
                    src={card.src}
                    alt={`${product.title} — ${card.label}`}
                    className={`relative mx-auto w-full object-contain rounded-xl ${
                    featured
                      ? "max-h-[40vh] [@media(min-width:768px)_and_(min-height:761px)]:max-h-[36vh] [@media(min-width:768px)_and_(max-height:760px)]:max-h-[30vh]"
                      : "max-h-[32vh] [@media(min-width:768px)_and_(min-height:761px)]:max-h-[26vh] [@media(min-width:768px)_and_(max-height:760px)]:max-h-[22vh]"
                  }`}
                  />
                  <figcaption className="relative mt-3 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-slate-900 text-[11px] font-semibold uppercase tracking-wide">
                      {card.label}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
  );
};
