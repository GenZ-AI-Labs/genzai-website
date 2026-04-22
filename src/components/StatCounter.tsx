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
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
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
      className="group text-center p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 transition-all duration-300"
    >
      {icon && (
        <div className="mx-auto mb-3 w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-colors duration-300">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-teal-600 to-cyan-600 bg-clip-text text-transparent font-mono">
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
