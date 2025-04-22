'use client';

import * as React from 'react';
import { Tab } from '@/components/ui/pricing-tab';
import { cn } from '@/lib/utils';

// Translate frequency labels
const FREQUENCIES = [
  { id: 'monthly', label: 'Monthly' }, // Translated
  { id: 'yearly', label: 'Yearly', discount: true }, // Translated
];

interface PricingFrequencyToggleProps {
  onFrequencyChange: (frequency: 'monthly' | 'yearly') => void;
  initialFrequency?: 'monthly' | 'yearly';
}

export function PricingFrequencyToggle({
  onFrequencyChange,
  initialFrequency = 'monthly',
}: PricingFrequencyToggleProps) {
  const [selected, setSelected] = React.useState<'monthly' | 'yearly'>(initialFrequency);

  const handleSelect = (frequencyId: string) => {
    const newFrequency = frequencyId as 'monthly' | 'yearly';
    setSelected(newFrequency);
    onFrequencyChange(newFrequency);
  };

  return (
    // Center the toggle
    <div className="flex w-fit rounded-full bg-muted p-1 mx-auto">
      {FREQUENCIES.map((frequency) => (
        <Tab
          key={frequency.id}
          text={frequency.label}
          selected={selected === frequency.id}
          // Ensure setSelected prop in Tab component accepts a function like this
          setSelected={() => handleSelect(frequency.id)}
          discount={frequency.discount} // Pass discount to Tab component
        />
      ))}
    </div>
  );
} 