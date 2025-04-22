'use client'
import { Navbar, NavBody, NavItems, NavbarLogo, NavbarButton, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from "@/components/ui/navbar";
import { useState } from "react";
import {
  IconAdjustmentsHorizontal,
  IconSettings,
  IconTarget,
  IconRocket,
  IconReport,
  IconPalette,
  IconBrandMeta,
  IconBrandGoogle,
  IconBrandGoogleAnalytics,
  IconSearch,
  IconChartInfographic,
  IconBrandTiktok,
  IconShoppingCart
} from "@tabler/icons-react";

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const featuresChildren = [
    {
      name: "Strategy",
      description: "Automate ads with AI-driven strategies.",
      icon: IconAdjustmentsHorizontal as any,
    },
    {
      name: "Optimization",
      description: "Optimize ads with rule-based adjustments.",
      icon: IconSettings as any,
    },
    {
      name: "Target Audience",
      description: "Reach the right audiences with AI algorithms.",
      icon: IconTarget as any,
    },
    {
      name: "SEO",
      description: "Analyze SEO in seconds, outrank competitors.",
      icon: IconRocket as any,
    },
    {
      name: "Reporting",
      description: "Track ad performance with live reports.",
      icon: IconReport as any,
    },
    {
      name: "Design",
      description: "Easily create ad designs with Miads.",
      icon: IconPalette as any,
      comingSoon: true,
    },
  ];

  const integrationsChildren = [
    {
      name: "Meta",
      description: "Easily manage Facebook, Instagram, WhatsApp ads",
      icon: IconBrandMeta as any,
    },
    {
      name: "Google",
      description: "Reach potential customers with Google Ads & YouTube ads",
      icon: IconBrandGoogle as any,
    },
    {
      name: "Google Analytics",
      description: "Easily access the metrics you want",
      icon: IconBrandGoogleAnalytics as any,
    },
    {
      name: "Search Console",
      description: "One-click site analysis, keyword tracking & ranking optimization",
      icon: IconSearch as any,
    },
    {
      name: "Ahrefs",
      description: "Boost SEO performance with Ahrefs integration",
      icon: IconChartInfographic as any,
    },
    {
      name: "Tiktok",
      description: "Quickly create your ads on TikTok",
      icon: IconBrandTiktok as any,
      comingSoon: true,
    },
    {
      name: "E-commerce",
      description: "Integrate your web store to enhance digital marketing performance.",
      icon: IconShoppingCart as any,
      comingSoon: true,
    },
  ];

  const navItems = [
    {
      name: "Features",
      triggerOnHover: true,
      children: featuresChildren,
    },
    {
      name: "Integrations",
      triggerOnHover: true,
      children: integrationsChildren,
    },
    {
      name: "Pricing",
      link: "/pricing"
    }
  ];

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={() => {}} />
        <div className="flex items-center gap-2">
          <NavbarButton href="/login" variant="secondary">Login</NavbarButton>
          <NavbarButton href="/register">Try For Free</NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} items={navItems}>
          <div className="flex w-full flex-col gap-2 pt-4">
            <NavbarButton href="/login" variant="secondary" className="w-full">
              Login
            </NavbarButton>
            <NavbarButton href="/register" className="w-full">
              Try For Free
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}; 