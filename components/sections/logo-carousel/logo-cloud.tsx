import { Section } from "@/components/ui/section";
import { GradientHeading } from "@/components/ui/gradient-heading";

export default function LogoCloud() {
    return (
        <Section>
            <div className="space-y-8 ">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
          <div className="text-center">
            <GradientHeading variant="secondary" size="md">
              The best are already here
            </GradientHeading>
            <a href="/register" target="_blank">
              <GradientHeading size="xl">Join new cult</GradientHeading>
            </a>
          </div>
                <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                    <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                    <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto" />
                    <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
                    <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto" />
                    <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto" />
                    <img className="h-7 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto" />
                    <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto" />
                    <img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto" />
                    <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto" />
                    <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto" />
                    <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto" />
                </div>
            </div>
            </div>
        </Section>
    )
}
