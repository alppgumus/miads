"use client";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsHorizontal,
  IconSettings,
  IconTarget,
  IconRocket,
  IconReport,
  IconLayoutGrid,
  IconPalette,
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import Image from "next/image";

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItem {
  name: string;
  link?: string;
  description?: string;
  children?: NavItem[];
  triggerOnHover?: boolean;
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> &
    {
        size?: string | number | undefined;
        stroke?: string | number | undefined;
    } &
    React.RefAttributes<SVGSVGElement>
  >;
  comingSoon?: boolean;
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-[9999] w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);
  let leaveTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = (idx: number, hasChildren: boolean) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      leaveTimeout = null;
    }
    setHoveredItemIndex(idx);
    if (hasChildren) {
      setActiveDropdownIndex(idx);
    } else {
       setActiveDropdownIndex(null);
    }
  };

  const handleMouseLeave = (hasChildren: boolean) => {
    if (hasChildren) {
      leaveTimeout = setTimeout(() => {
        setActiveDropdownIndex(null);
        setHoveredItemIndex(null);
        leaveTimeout = null;
      }, 150);
    } else {
        setHoveredItemIndex(null);
    }
  };

  const handleDropdownMouseEnter = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      leaveTimeout = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    setActiveDropdownIndex(null);
    setHoveredItemIndex(null);
  };

  return (
    <motion.div
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-zinc-600 transition duration-200 lg:flex lg:space-x-1",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isHoverTrigger = item.triggerOnHover && item.children && item.children.length > 0;
        const isDropdownActive = activeDropdownIndex === idx;
        
        return (
          <div 
            key={idx}
            className="relative"
            onMouseEnter={() => handleMouseEnter(idx, !!isHoverTrigger)}
            onMouseLeave={() => handleMouseLeave(!!isHoverTrigger)}
          >
            {isHoverTrigger ? (
              <div 
                className={cn(
                    "relative flex cursor-default items-center gap-1 px-4 py-2 text-neutral-600 dark:text-neutral-300",
                )}
              >
                {hoveredItemIndex === idx && !isDropdownActive && (
                    <motion.div
                      layoutId="hovered"
                      className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                <span className="relative z-20">{item.name}</span>
                <IconChevronDown
                  size={14}
                  className={cn(
                      "relative z-20 transition-transform duration-200",
                      isDropdownActive ? "rotate-180" : ""
                  )}
                />
              </div>
            ) : (
              <Link
                onClick={onItemClick}
                className="relative block px-4 py-2 text-neutral-600 dark:text-neutral-300"
                href={item.link || "#"}
              >
                {hoveredItemIndex === idx && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <span className="relative z-20">{item.name}</span>
              </Link>
            )}

            <AnimatePresence>
              {isHoverTrigger && isDropdownActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={cn(
                    "absolute left-1/2 top-full z-[100] mt-3 w-[32rem] -translate-x-1/2 rounded-xl border p-5",
                    "border-neutral-300 dark:border-neutral-700",
                    "bg-white dark:bg-neutral-950",
                    "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                    "backdrop-blur-xl"
                  )}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                   <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                     {item.children?.map((child, childIdx) => {
                       const Icon = child.icon;
                       return (
                         <div
                           key={childIdx}
                           className="group relative flex cursor-default flex-col gap-1 rounded-lg p-4 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                          >
                            {child.comingSoon && (
                              <span className="absolute top-2 right-2 rounded-full bg-neutral-200 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
                                Coming Soon
                              </span>
                            )}
                            {Icon && (
                              <Icon className="mb-1.5 size-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200" stroke="1.5" />
                            )}
                            <div className="font-semibold text-neutral-800 dark:text-neutral-200">
                              {child.name}
                            </div>
                            {child.description && (
                               <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                {child.description}
                              </p>
                            )}
                         </div>
                       );
                     })}
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
  items,
}: MobileNavMenuProps & { items: NavItem[] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-1 rounded-lg bg-white px-4 py-4 shadow-lg dark:bg-neutral-950",
            className
          )}
        >
          {items.map((item, idx) => {
            const isDropdownTrigger = item.children && item.triggerOnHover;
            return (
              <React.Fragment key={idx}>
                {isDropdownTrigger ? (
                  <div className="flex w-full items-center gap-2 px-2 py-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                    {item.icon && <item.icon className="size-4" stroke="1.5" />}
                    {item.name}
                  </div>
                ) : (
                  <a
                    href={item.link || '#'}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
                    onClick={() => {
                      if (!item.children) onClose();
                    }}
                  >
                    {item.icon && <item.icon className="size-4" stroke="1.5" />}
                    {item.name}
                  </a>
                )}
                {item.children && (
                  <div className="ml-4 flex flex-col gap-1 border-l border-neutral-200 pl-3 dark:border-neutral-800">
                    {item.children.map((child, childIdx) => {
                       const ChildIcon = child.icon;
                       return (
                          isDropdownTrigger ? (
                            <div key={childIdx} className="relative flex items-center gap-2 px-2 py-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                               {ChildIcon && <ChildIcon className="size-4 shrink-0" stroke="1.5"/>}
                               <span>{child.name}</span>
                               {child.comingSoon && (
                                 <span className="ml-auto rounded-full bg-neutral-200 px-1.5 py-0.5 text-[9px] font-medium text-neutral-500 dark:bg-neutral-700 dark:text-neutral-300">
                                   Soon
                                 </span>
                               )}
                            </div>
                           ) : (
                             <a
                              key={childIdx}
                              href={child.link || '#'}
                              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
                              onClick={onClose}
                             >
                                {ChildIcon && <ChildIcon className="size-4 shrink-0" stroke="1.5"/>}
                                <span>{child.name}</span>
                                {child.comingSoon && (
                                  <span className="ml-auto rounded-full bg-neutral-200 px-1.5 py-0.5 text-[9px] font-medium text-neutral-500 dark:bg-neutral-700 dark:text-neutral-300">
                                    Soon
                                  </span>
                                )}
                              </a>
                           )
                       );
                     })}
                  </div>
                )}
              </React.Fragment>
            );
          })}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      
      <span className="font-medium text-black dark:text-white">Miads</span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
