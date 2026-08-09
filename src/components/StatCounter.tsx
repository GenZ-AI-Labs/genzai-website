import { ReactNode, useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  decimals?: number;
  icon?: ReactNode;
}

export const StatCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  label,
  decimals = 0,
  icon,
}: StatCounterProps) => {
  // Seeded with the final value, not 0.
  //
  // This component is prerendered in Node, where useEffect never runs. Seeding 0
  // would bake "0" into the static HTML — publishing a wrong number to every
  // non-rendering consumer (e.g. "0% TB Model Confidence"). Seeding the final
  // value also makes server and client agree on first render, so hydration is clean.
  //
  // The count-up animation is preserved as progressive enhancement below.
  const [current, setCurrent] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    // Rewind to 0 so the animation has somewhere to travel from — but only while
    // the element is still below the viewport, where the rewind is invisible.
    // If it is already on screen, keep the final value rather than flash it away.
    const el = ref.current;
    const offscreen = el
      ? el.getBoundingClientRect().top > window.innerHeight
      : true;

    if (offscreen) {
      setCurrent(0);
    } else {
      started.current = true;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCurrent(value * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setCurrent(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div
      ref={ref}
      className="group text-center p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
    >
      {icon && (
        <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors duration-300">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-mono">
        {prefix}
        {current.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-2 text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};
