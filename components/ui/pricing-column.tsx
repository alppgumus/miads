import { cn } from "@/lib/utils";
import { Button } from "./button";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const pricingColumnVariants = cva(
  "max-w-container relative flex flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl border border-neutral-800",
  {
    variants: {
      variant: {
        default: "hidden lg:flex",
        glow: "after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
        "glow-brand":
          "after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-[#11FC97B3] after:blur-[72px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PricingColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingColumnVariants> {
  name: string;
  icon?: ReactNode;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  monthlyPriceNote: string;
  yearlyPriceNote: string;
  frequency: 'monthly' | 'yearly';
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
  };
  features: string[];
}

export function PricingColumn({
  name,
  icon,
  description,
  monthlyPrice,
  yearlyPrice,
  monthlyPriceNote,
  yearlyPriceNote,
  frequency,
  cta,
  features,
  variant,
  className,
  ...props
}: PricingColumnProps) {
  const displayPrice = frequency === 'yearly' ? (yearlyPrice / 12) : monthlyPrice;
  const displayNote = monthlyPriceNote;
  const yearlyDetailText = frequency === 'yearly'
    ? `$${yearlyPrice.toFixed(2).replace('.', ',')} ${yearlyPriceNote}`
    : null;
  const formattedDisplayPrice = displayPrice.toFixed(2).replace('.', ',');

  return (
    <div
      className={cn(pricingColumnVariants({ variant, className }))}
      {...props}
    >
      <hr
        className={cn(
          "via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
          variant === "glow-brand" && "via-[#11FC97]/60",
        )}
      />
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 font-bold">
            {icon && (
              <div className="text-muted-foreground flex items-center gap-2">
                {icon}
              </div>
            )}
            {name}
          </h2>
          <p className="text-muted-foreground max-w-[220px] text-sm">
            {description}
          </p>
        </div>
        <div className="flex flex-col min-h-[60px]">
          <div className="flex items-baseline gap-1">
            <span className="text-muted-foreground text-2xl font-bold">$</span>
            <span className="text-5xl font-bold">{formattedDisplayPrice}</span>
            <span className="text-muted-foreground text-sm ml-1">{displayNote}</span>
          </div>
          {yearlyDetailText && (
            <p className="text-muted-foreground text-xs mt-1">
              {yearlyDetailText}
            </p>
          )}
        </div>
        <Button variant={cta.variant} size="lg" asChild>
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
        <hr className="border-input" />
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <CircleCheckBig className="text-muted-foreground size-4 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { pricingColumnVariants };
