import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { perfusionProducts } from "@/data/perfusionProducts";
import { ProductShowcaseHero } from "@/components/ProductShowcaseHero";

const SLIDE_MS = 7000;

// Every product that has a three-card showcase, in catalogue order (NCCT first).
const slides = perfusionProducts.filter((p) => p.heroShowcase?.length === 3);
const NEW_SLUGS = new Set(["ncct-nwu-insightz"]);

/**
 * Homepage carousel of product showcase heroes. Advances every SLIDE_MS with a
 * page-turn transition: the outgoing page swings away around its edge while
 * the next one settles in underneath. Pauses on hover/focus; cross-fades only
 * when the user prefers reduced motion.
 */
export const HomeProductCarousel = () => {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = useCallback((next: number, dir: number) => {
    setSlide([(next + slides.length) % slides.length, dir]);
  }, []);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = setTimeout(() => go(index + 1, 1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, paused, go]);

  if (slides.length === 0) return null;
  const product = slides[index];

  const variants: Variants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: { opacity: 0.35, scale: 0.97, rotateY: 0, zIndex: 0 },
        center: { opacity: 1, scale: 1, rotateY: 0, zIndex: 1 },
        // Forward: the page folds away into the screen around its left edge;
        // backward: around its right edge.
        exit: (dir: number) => ({
          rotateY: dir > 0 ? 100 : -100,
          originX: dir > 0 ? 0 : 1,
          opacity: 0.15,
          zIndex: 2,
        }),
      };

  return (
    <div
      className="relative bg-black overflow-hidden"
      style={{ perspective: 2200 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="GenzAI Labs products"
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={product.slug}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reduceMotion ? 0.4 : 0.95, ease: [0.22, 1, 0.36, 1] }}
          style={{ backfaceVisibility: "hidden" }}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${product.title}`}
        >
          <ProductShowcaseHero
            product={product}
            headingAs="h2"
            isNew={NEW_SLUGS.has(product.slug)}
            primary={{ label: `Explore ${product.title}`, to: `/products/${product.slug}` }}
            secondary={{ label: "Request Demo", to: "/demo-request" }}
            className="!pb-16"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-2 px-4">
        <button
          type="button"
          onClick={() => go(index - 1, -1)}
          aria-label="Previous product"
          className="w-8 h-8 rounded-full border border-white/25 bg-black/40 text-white/80 hover:bg-white hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {slides.map((p, i) => {
          const active = i === index;
          return (
            <button
              key={p.slug}
              type="button"
              onClick={() => i !== index && go(i, i > index ? 1 : -1)}
              aria-label={`Show ${p.title}`}
              aria-current={active}
              className={`relative overflow-hidden rounded-full border transition-colors text-[11px] font-semibold ${
                active
                  ? "bg-white/15 border-white/50 text-white"
                  : "bg-black/40 border-white/20 text-white/60 hover:text-white"
              } w-2.5 h-2.5 md:w-auto md:h-auto md:px-3 md:py-1.5`}
            >
              <span className="hidden md:inline">{p.title}</span>
              {active && (
                <span
                  key={`${index}-progress`}
                  className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-white animate-slide-progress"
                  style={{
                    animationDuration: `${SLIDE_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              )}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => go(index + 1, 1)}
          aria-label="Next product"
          className="w-8 h-8 rounded-full border border-white/25 bg-black/40 text-white/80 hover:bg-white hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default HomeProductCarousel;
