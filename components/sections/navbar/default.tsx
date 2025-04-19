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
} from "@tabler/icons-react";

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: "Features",
      triggerOnHover: true,
      children: [
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
      ],
    },
    {
      name: "Pricing",
      link: "/pricing"
    },
    {
      name: "Contact",
      link: "/contact"
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