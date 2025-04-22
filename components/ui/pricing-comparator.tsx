import { CheckIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BorderBeam } from '@/components/magicui/border-beam';

const featuresData = [
  
  { feature: 'Miads Strategy (AI)', basic: false, starter: false, premium: true },
  { feature: 'Optimization', basic: false, starter: true, premium: true },
  { category: 'Meta', isHeader: true },
  { feature: 'Meta Ads', basic: true, starter: true, premium: true },
  { feature: 'Post Promotion', basic: true, starter: true, premium: true },
  { feature: 'Meta Audience (AI)', basic: true, starter: true, premium: true },
  { category: 'Google', isHeader: true },
  { feature: 'Google Ads', basic: true, starter: true, premium: true },
  { feature: 'Google Audience', basic: true, starter: true, premium: true },
  { category: 'Reporting', isHeader: true },
  { feature: 'Google Analytics', basic: true, starter: true, premium: true },
  { feature: 'Meta Reports', basic: true, starter: true, premium: true },
  { feature: 'Google Reports', basic: true, starter: true, premium: true },
  { category: 'Product Catalog', isHeader: true },
  { feature: 'Advanced Facebook Catalog', basic: true, starter: true, premium: true },
  { feature: 'Advanced Google Catalog', basic: 'Soon', starter: 'Soon', premium: 'Soon' },
  { category: 'SEO', isHeader: true },
  { feature: 'SEO Reports', basic: '1 Report', starter: '3 Reports', premium: '5 Reports' },
  { feature: 'Keyword Analysis', basic: true, starter: true, premium: true },
  { feature: 'Site Speed Check', basic: true, starter: true, premium: true },
  { feature: 'Google Search Console', basic: true, starter: true, premium: true },
  { feature: 'Sitemap Generation', basic: true, starter: true, premium: true },
  { feature: 'Robots.txt Generation', basic: true, starter: true, premium: true },
  { feature: 'Competitor Analysis', basic: true, starter: true, premium: true },
  { category: 'Support', isHeader: true },
  { feature: 'Live Chat', basic: true, starter: true, premium: true },
  { feature: 'One-on-One Support', basic: false, starter: true, premium: true },
  { feature: 'Integration Support', basic: false, starter: true, premium: true },
  { feature: 'Access to Training Videos', basic: true, starter: true, premium: true },
  { category: 'Other', isHeader: true },
  { feature: 'Design', basic: 'Soon', starter: 'Soon', premium: 'Soon' },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-xs">{value}</span>;
  }
  return value ? (
    <CheckIcon className="size-5 text-green-500 mx-auto" />
  ) : (
    <MinusIcon className="size-5 text-muted-foreground mx-auto" />
  );
}

export default function PricingComparator() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Compare Plans
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Manage all your advertising needs easily in one panel with the power of AI and automation!
          </p>
        </div>
        <div className="relative border border-neutral-800 rounded-xl p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="p-4 text-left font-semibold text-foreground w-1/5">
                    Plan Details
                  </th>
                  <th className="p-4 font-semibold text-center text-foreground w-1/5">Basic</th>
                  <th className="p-4 font-semibold text-center text-foreground w-1/5">Starter</th>
                  <th className="p-4 font-semibold text-center text-foreground w-1/5 bg-neutral-900/50 rounded-t-lg">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {featuresData.map((item, index) =>
                  item.isHeader ? (
                    <tr key={`category-${index}`}>
                      <td colSpan={4} className="p-4 pt-6 font-semibold text-foreground">
                        {item.category}
                      </td>
                    </tr>
                  ) : (
                    <tr key={item.feature}>
                      <td className="p-4 text-muted-foreground">{item.feature}</td>
                      <td className="p-4 text-center">
                        <FeatureCell value={item.basic ?? false} />
                      </td>
                      <td className="p-4 text-center">
                        <FeatureCell value={item.starter ?? false} />
                      </td>
                      <td className={cn(
                        "p-4 text-center bg-neutral-900/50",
                        index === featuresData.length - 1 && "rounded-b-lg"
                      )}>
                        <FeatureCell value={item.premium ?? false} />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <BorderBeam size={250} duration={12} delay={9} colorFrom="#0AB464" colorTo="#0AB464" />
        </div>
      </div>
    </section>
  );
}
