import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  decimals?: number;
}

export const StatCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  label,
  decimals = 0,
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
      className="text-center p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-mono">
        {prefix}
        {current.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-gray-600 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};
