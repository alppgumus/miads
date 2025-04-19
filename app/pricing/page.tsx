// app/pricing/page.tsx
import React from 'react';

// TODO: Replace this with the actual Pricing component
const PricingPlaceholder = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing</h1>
      <p className="text-center text-muted-foreground">
        Pricing component will be added here.
      </p>
      {/* Add layout or structure if needed */}
    </div>
  );
};

export default function PricingPage() {
  // You can fetch data here if needed in the future
  return <PricingPlaceholder />;
}

// Optional: Add metadata for the page
export const metadata = {
  title: 'Pricing - Miads',
  description: 'Choose the best plan for your advertising needs.',
}; 