// app/pricing/page.tsx
import React from 'react';
import Pricing from '@/components/sections/pricing/default'; // Import the actual Pricing component
import PricingComparator from '@/components/ui/pricing-comparator'; // Import the new comparator component
import PricingFaq from '@/components/sections/faqs/pricing-faq'; // Import the new FAQ component

// Removed PricingPlaceholder

export default function PricingPage() {
  // You can fetch data here if needed in the future
  return (
    <>
      <Pricing /> 
      <PricingComparator /> 
      <PricingFaq /> {/* Add the FAQ component below the comparator */}
    </>
  );
}

// Optional: Add metadata for the page
export const metadata = {
  title: 'Pricing - Miads',
  description: 'Choose the best plan for your advertising needs. Compare features and find answers to frequently asked questions.', // Updated description
}; 