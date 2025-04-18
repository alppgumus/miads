import { Section } from "../../ui/section";
import { siteConfig } from "@/config/site";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

export default function Stats({
  items = [
    {
      label: "over",
      value: 300,
      suffix: "+",
      description: "campaigns successfully analyzed",
    },
    {
      label: "approx.",
      value: 1.2,
      suffix: "k",
      description: "detailed performance reports generated",
    },
    {
      label: "over",
      value: 50,
      suffix: "+",
      description: "metrics & KPIs optimized",
    },
    {
      label: "active",
      value: 85,
      description: "users & teams using the system",
    },
  ],
  className,
}: StatsProps) {
  return (
    <Section className={className}>
      <div className="container mx-auto max-w-[960px]">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 text-left"
              >
                {item.label && (
                  <div className="text-muted-foreground text-sm font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:from-foreground dark:to-[#11FC97] bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_#11FC97] transition-all duration-300 sm:text-5xl md:text-6xl">
                    {item.value}
                  </div>
                  {item.suffix && (
                    <div className="text-[#11FC97] text-2xl font-semibold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm font-semibold text-pretty">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
