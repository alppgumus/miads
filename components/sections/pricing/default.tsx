'use client'; // Added 'use client' directive as it uses React state/hooks potentially

import { useState } from "react"; // Import useState
import { Section } from "../../ui/section";
import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { PricingFrequencyToggle } from "../../ui/pricing-frequency-toggle"; // Import the toggle
import { cn } from "@/lib/utils";
import { ReactNode } from "react"; // Added ReactNode import for icon prop

// Update PlanData to reflect new price/note structure passed to PricingColumn
interface PlanData extends Omit<PricingColumnProps, 'price' | 'priceNote' | 'frequency'> {
    monthlyPrice: number;
    yearlyPrice: number;
    monthlyPriceNote: string;
    yearlyPriceNote: string;
    icon?: ReactNode; // Add icon back to base type if needed
    features: string[]; // Ensure features is part of the base type
    cta: { // Ensure cta is part of the base type
      variant: "glow" | "default";
      label: string;
      href: string;
    };
}

// Update default plans with English text and Miads branding
const defaultPlansData: PlanData[] = [
  {
    name: "Basic",
    description: "All the essential tools for managing your ads.", // Translated
    monthlyPrice: 49.00,
    yearlyPrice: 420.00,
    monthlyPriceNote: "/ month", // Translated
    yearlyPriceNote: "/ year billed annually", // Translated
    cta: {
      variant: "default",
      label: "Select Plan", // Translated
      href: "/register", // Updated link
    },
    features: [
      "Meta Ads", // Translated
      "Meta Audience (AI)", // Translated
      "Google Ads", // Translated
      "Meta Reports", // Translated
      "Google Reports", // Translated
    ],
    variant: "default",
  },
  {
    name: "Starter",
    description: "Optimization solutions needed for growth.", // Translated
    monthlyPrice: 99.00,
    yearlyPrice: 840.00,
    monthlyPriceNote: "/ month", // Translated
    yearlyPriceNote: "/ year billed annually", // Translated
    cta: {
      variant: "default",
      label: "Select Plan", // Translated
      href: "/register", // Updated link
    },
    features: [
      "Optimization", // Translated
      "Meta Ads", // Translated
      "Meta Audience (AI)", // Translated
      "Google Ads", // Translated
      "Meta Reports", // Translated
      "Google Reports", // Translated
    ],
    variant: "glow",
  },
  {
    name: "Premium",
    description: "Powerful campaigns with optimization and strategy in one click.", // Translated
    monthlyPrice: 199.00,
    yearlyPrice: 1680.00,
    monthlyPriceNote: "/ month", // Translated
    yearlyPriceNote: "/ year billed annually.", // Translated & added note
    cta: {
      variant: "default",
      label: "Select Plan", // Translated
      href: "/register", // Updated link
    },
    features: [
      "Miads Strategy (AI)", // Updated Branding & Translated
      "Optimization", // Translated
      "Meta Ads", // Translated
      "Google Ads", // Translated
      "Meta Reports", // Translated
      "Google Reports", // Translated
    ],
    variant: "glow-brand",
  },
];

// Interface for Pricing component props remains largely the same
interface PricingComponentProps {
  title?: string | false;
  description?: string | false;
  plans?: PlanData[] | false;
  className?: string;
}

export default function Pricing({
  title = "Transparent Pricing", // Translated
  description = "Miads offers plans for every user level, combining enterprise capabilities with simplicity.", // Translated & Updated Branding
  plans = defaultPlansData,
  className = "",
}: PricingComponentProps) { // Use updated props interface name
  const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        <PricingFrequencyToggle onFrequencyChange={setFrequency} initialFrequency={frequency} />

        {plans !== false && plans.length > 0 && (
          <div className="mt-8 max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => {
              return (
                <PricingColumn
                  key={plan.name}
                  // Pass all necessary props including frequency and separate prices/notes
                  frequency={frequency}
                  monthlyPrice={plan.monthlyPrice}
                  yearlyPrice={plan.yearlyPrice}
                  monthlyPriceNote={plan.monthlyPriceNote}
                  yearlyPriceNote={plan.yearlyPriceNote}
                  // Pass other plan details as before
                  name={plan.name}
                  icon={plan.icon}
                  description={plan.description}
                  cta={plan.cta}
                  features={plan.features}
                  variant={plan.variant}
                />
              )
            })}
          </div>
        )}
      </div>
    </Section>
  );
} 