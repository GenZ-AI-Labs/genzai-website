import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { perfusionProducts } from "@/data/perfusionProducts";

interface Slide {
  productTitle: string;
  productBadge: string;
  src: string;
  caption: string;
}

const slides: Slide[] = perfusionProducts.flatMap((p) =>
  (p.sampleImages ?? []).map((img) => ({
    productTitle: p.title,
    productBadge: p.badge,
    src: img.src,
    caption: img.caption,
  }))
);

const AUTO_ADVANCE_MS = 6500;

const formatIndex = (n: number) => String(n + 1).padStart(2, "0");

const CornerBracket = ({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) => {
  const posMap: Record<string, string> = {
    tl: "top-3 left-3 border-t-2 border-l-2 rounded-tl-md",
    tr: "top-3 right-3 border-t-2 border-r-2 rounded-tr-md",
    bl: "bottom-3 left-3 border-b-2 border-l-2 rounded-bl-md",
    br: "bottom-3 right-3 border-b-2 border-r-2 rounded-br-md",
  };
  return (
    <motion.span
      aria-hidden
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`absolute ${posMap[position]} w-5 h-5 md:w-6 md:h-6 border-blue-400/80 pointer-events-none`}
    />
  );
};

export const AiAnalysisShowcase = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Preload every slide image on mount so switching is instant
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  useEffect(() => {
    if (paused || slides.length === 0) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTO_ADVANCE_MS
    );
    return () => clearInterval(timer);
  }, [paused, index]);

  if (slides.length === 0) return null;

  const slide = slides[index];
  const goTo = (i: number) =>
    setIndex(((i % slides.length) + slides.length) % slides.length);

  return (
    <section
      className="relative py-20 md:py-28 bg-slate-50 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient drifting blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          aria-hidden
          className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-blue-200/40 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-sky-200/40 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute w-1 h-1 rounded-full bg-blue-400/40"
            style={{
              top: `${15 + i * 13}%`,
              left: `${8 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
            <Sparkles className="h-3 w-3" />
            Clinical Showcase
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            AI-Segmented Analysis
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Real outputs from our perfusion pipeline — one case at a time.
          </p>
        </motion.div>

        {/* Stage */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image card — now takes 8/12 */}
          <div className="lg:col-span-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 overflow-hidden group"
            >
              {/* Top progress line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100 z-30">
                <motion.div
                  key={`bar-${index}-${paused ? "p" : "r"}`}
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? "0%" : "100%" }}
                  transition={{
                    duration: paused ? 0 : AUTO_ADVANCE_MS / 1000,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Image viewport — big aspect */}
              <div className="relative aspect-[16/11] md:aspect-[16/10] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:p-10 overflow-hidden">
                {/* Grid pattern overlay (like medical scanner) */}
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #14b8a6 1px, transparent 1px), linear-gradient(to bottom, #14b8a6 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Corner brackets */}
                <CornerBracket position="tl" />
                <CornerBracket position="tr" />
                <CornerBracket position="bl" />
                <CornerBracket position="br" />

                {/* Image with Ken Burns */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`img-${index}`}
                      src={slide.src}
                      alt={slide.caption}
                      className="max-w-full max-h-full object-contain rounded-lg relative z-10"
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{
                        opacity: { duration: 0.25 },
                        scale: {
                          duration: AUTO_ADVANCE_MS / 1000,
                          ease: "linear",
                        },
                      }}
                      decoding="async"
                    />
                  </AnimatePresence>
                </div>

                {/* Scanning line sweep */}
                <motion.div
                  key={`scan-${index}`}
                  aria-hidden
                  className="absolute inset-x-0 h-24 z-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(20,184,166,0.25) 45%, rgba(20,184,166,0.8) 50%, rgba(20,184,166,0.25) 55%, transparent 100%)",
                    boxShadow: "0 0 30px rgba(20,184,166,0.4)",
                  }}
                  initial={{ top: "-10%" }}
                  animate={{ top: "110%" }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                  }}
                />

                {/* Slide label chip (bottom-left of image) */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`chip-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-blue-400/40 backdrop-blur text-blue-300 text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      {slide.productBadge}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom meta bar */}
              <div className="flex items-center justify-between px-5 md:px-8 py-4 border-t border-slate-100 bg-white">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                    Case
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`num-${index}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg md:text-xl font-bold text-slate-900 tabular-nums"
                    >
                      {formatIndex(index)}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-slate-300">/</span>
                  <span className="text-sm font-mono text-slate-400 tabular-nums">
                    {formatIndex(slides.length - 1)}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Sample Output
                </span>
              </div>
            </motion.div>
          </div>

          {/* Text panel — 4/12 */}
          <div className="lg:col-span-4 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${index}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                  exit: {
                    opacity: 0,
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase text-blue-600 mb-4"
                >
                  {slide.productBadge}
                </motion.div>

                <motion.h3
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl md:text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight"
                >
                  {slide.productTitle}
                </motion.h3>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, scaleX: 0 },
                    visible: { opacity: 1, scaleX: 1 },
                    exit: { opacity: 0, scaleX: 0 },
                  }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[2px] w-32 mt-6 mb-7 bg-slate-200 overflow-hidden rounded-full"
                >
                  <motion.div
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-slate-600 leading-relaxed text-[15px] md:text-base"
                >
                  <span className="text-slate-900 font-semibold">
                    Finding —{" "}
                  </span>
                  {slide.caption}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-3 mt-10">
              <button
                aria-label="Previous slide"
                onClick={() => goTo(index - 1)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next slide"
                onClick={() => goTo(index + 1)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1.5 ml-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`transition-all duration-500 rounded-full h-1.5 ${
                      i === index
                        ? "w-10 bg-blue-500"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAnalysisShowcase;
