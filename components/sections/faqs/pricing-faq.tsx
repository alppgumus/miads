'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

// Pricing specific FAQ items based on the image
const pricingFaqItems = [
  {
    id: 'item-1',
    question: "What's included in the 7-day free trial?",
    answer: 'Placeholder answer: During your 7-day free trial, you get access to [Specify Features/Plan Level] to explore Miads capabilities.',
  },
  {
    id: 'item-2',
    question: 'Can I create a report using different ad accounts?',
    answer: 'Placeholder answer: Yes, Miads allows you to consolidate data and generate reports from multiple connected ad accounts.',
  },
  {
    id: 'item-3',
    question: 'Which channels or platforms can I monitor with One-Click Report?',
    answer: 'Placeholder answer: One-Click Report currently supports [List Supported Channels like Meta, Google Ads]. We are working on adding more.',
  },
  {
    id: 'item-4',
    question: 'Can I use One-Click Report for multiple ad accounts?',
    answer: 'Placeholder answer: Yes, the One-Click Report feature can be utilized across the different ad accounts you have connected to Miads.',
  },
  {
    id: 'item-5',
    question: 'Can I share reports with my team or clients?',
    answer: 'Placeholder answer: Absolutely! Miads provides easy options to share your reports with team members or export them for clients.',
  },
  {
    id: 'item-6',
    question: 'How is my billing calculated after the free trial?',
    answer: 'Placeholder answer: After the 7-day trial, you will be billed based on the plan you selected (Basic, Starter, or Premium) either monthly or annually.',
  },
]

export default function PricingFaq() {
  // TODO: Implement search and filter logic if needed
  // TODO: Implement "Load more" functionality if there are many questions

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          {/* Optional: Add search bar and filter tabs here based on the image */}
          <p className="text-muted-foreground text-center max-w-xl mx-auto text-balance">
            Find answers to common questions about our plans, billing, and features.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Apply styling similar to FAQsFour */}
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1" // Style from FAQsFour
          >
            {pricingFaqItems.map((item) => (
              <div className="group" key={item.id}> {/* Added group wrapper */} 
                <AccordionItem
                  value={item.id}
                  // Style from FAQsFour
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Wrapped answer in p tag like FAQsFour */}
                    <p className="text-base text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                {/* Added hr separator like FAQsFour */}
                <hr className="mx-7 border-dashed border-neutral-700 group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 