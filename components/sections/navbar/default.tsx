'use client'
import { Navbar, NavBody, NavItems, NavbarLogo, NavbarButton, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from "@/components/ui/navbar";
import { useState } from "react";

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: "Features",
      link: "/"
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
        <NavItems items={navItems} />
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
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="w-full rounded-md px-2 py-1 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
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