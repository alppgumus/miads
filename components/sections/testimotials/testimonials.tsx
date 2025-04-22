import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { GradientHeading } from '@/components/ui/gradient-heading'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <GradientHeading size="lg" weight="bold" className="text-center mb-8">
                      Trusted by Marketing Leaders
                    </GradientHeading>
                    <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8 sm:mb-12">
                      See how leading companies leverage our platform for smarter campaign insights and optimization.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 border border-[#4f4f4f40]">
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] items-center gap-6">
                                <p className="text-xl font-medium">The platform&apos;s analytics capabilities allowed us to pinpoint inefficiencies in our campaigns and significantly improve our ROI. A must-have tool!</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarFallback>AY</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Ayşe Yılmaz</cite>
                                        <span className="text-muted-foreground block text-sm">Pazarlama Müdürü, TeknoTürk A.Ş.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2 border border-[#4f4f4f40]">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Integrating our data sources was seamless. We now have a unified view of our customer journey.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">John Smith</cite>
                                        <span className="text-muted-foreground block text-sm">Head of Digital, Global Solutions Ltd.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="border border-[#4f4f4f40]">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>The audience segmentation features are incredibly powerful for targeted advertising.</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarFallback>MÖ</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Mehmet Öztürk</cite>
                                        <span className="text-muted-foreground block text-sm">E-ticaret Uzmanı, ModaTrend</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed border border-[#4f4f4f40]">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Actionable insights delivered clearly. It helped us optimize our ad spend effectively.</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarFallback>EW</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Emily White</p>
                                        <span className="text-muted-foreground block text-sm">Data Analyst, Insight Corp.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
