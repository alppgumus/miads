'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { GradientHeading } from '@/components/ui/gradient-heading'

export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What types of marketing data can I connect?',
            answer: 'You can connect data from various sources including social media platforms (Facebook, Instagram, LinkedIn Ads), search engines (Google Ads, Bing Ads), email marketing tools (Mailchimp, Klaviyo), CRM systems (Salesforce, HubSpot), and analytics platforms (Google Analytics). We\'re constantly adding new integrations.',
        },
        {
            id: 'item-2',
            question: 'How does the AI optimization work?',
            answer: 'Our AI analyzes your campaign performance data, identifies patterns and trends, and provides actionable recommendations for optimizing bids, budgets, targeting, and creatives to maximize ROI and achieve your marketing goals.',
        },
        {
            id: 'item-3',
            question: 'Is my data secure?',
            answer: 'Yes, data security is our top priority. We use industry-standard encryption protocols, comply with GDPR and CCPA regulations, and implement strict access controls to ensure your data is always protected.',
        },
        {
            id: 'item-4',
            question: 'Can I customize the reports and dashboards?',
            answer: 'Absolutely. Our platform offers highly customizable dashboards and reporting features. You can choose the metrics that matter most to you, create custom visualizations, and schedule automated reports tailored to your specific needs.',
        },
        {
            id: 'item-5',
            question: 'What kind of support do you offer?',
            answer: 'We offer comprehensive support including a detailed knowledge base, email support, and live chat assistance during business hours. Enterprise clients have access to dedicated account managers and priority support.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <GradientHeading size="lg" weight="bold" className="text-center mb-8">
                        Frequently Asked Questions
                    </GradientHeading>
                    <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8 sm:mb-12 text-balance">
                        Find answers to common questions about connecting your data, leveraging AI insights, and getting the most out of our platform.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed border-[#4f4f4f40] group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
