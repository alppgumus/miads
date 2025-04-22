'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Database, Target, Contact, LineChart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/magicui/border-beam'
import { GradientHeading } from '@/components/ui/gradient-heading'
import { Section } from '@/components/ui/section'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: '/charts.png',
            alt: 'Database visualization',
        },
        'item-2': {
            image: '/music.png',
            alt: 'Security authentication',
        },
        'item-3': {
            image: '/mail2.png',
            alt: 'Identity management',
        },
        'item-4': {
            image: '/payments.png',
            alt: 'Analytics dashboard',
        },
    }

    return (
        <Section>
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <GradientHeading size="lg" weight="bold" className="text-center mb-8">
                        Unlock Deeper Marketing Insights
                    </GradientHeading>
                    <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8 sm:mb-12">
                        Leverage AI to analyze campaign data, understand audience behavior, and drive smarter marketing decisions.
                    </p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1" className="border-b-[#4f4f4f40]">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Database className="size-4" />
                                    Unified Data Hub
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Connect and visualize data from all your marketing channels in one place for a complete performance overview.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-b-[#4f4f4f40]">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Target className="size-4" />
                                    Advanced Audience Segmentation
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Identify and target high-value audience segments based on behavior, demographics, and engagement patterns.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-b-[#4f4f4f40]">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Contact className="size-4" />
                                    Comprehensive Customer Profiles
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Build detailed customer profiles by consolidating data points across touchpoints for personalized campaigns.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-b-0">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <LineChart className="size-4" />
                                    Actionable Performance Analytics
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Track KPIs, measure campaign ROI, and get actionable insights through intuitive dashboards and reports.</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border border-[#4f4f4f40] p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l border-l-[#4f4f4f40] bg-[repeating-linear-gradient(-45deg,#4f4f4f40,#4f4f4f40_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border border-[#4f4f4f40] bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-[#11FC97]/70 to-transparent dark:via-[#11FC97]/70"
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}
