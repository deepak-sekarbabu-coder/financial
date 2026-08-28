import type { ComponentType } from "react";

interface IconProps {
  size?: number | string;
  className?: string;
}

interface HighlightCardProps {
  icon: ComponentType<IconProps>;
  iconBg?: string;
  iconColor?: string;
  title: string;
  description: string;
}

export default function HighlightCard({
  icon: Icon,
  iconBg = "bg-royal/10",
  iconColor = "text-royal",
  title,
  description,
}: HighlightCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-soft-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg}`}
      >
        <Icon size={24} className={iconColor} aria-hidden="true" />
      </div>
      <div>
        <h3 className="mb-1 text-base font-bold text-navy">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
}
