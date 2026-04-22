import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  withIcon?: boolean;
}

export const SectionHeading = ({
  kicker,
  title,
  subtitle,
  align = "center",
  withIcon = true,
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${alignClass} mb-12 md:mb-16 max-w-3xl`}
    >
      {kicker && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold tracking-[0.18em] uppercase mb-4`}
        >
          {withIcon && <Sparkles className="h-3 w-3" />}
          {kicker}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
