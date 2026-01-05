'use client';

import { useState } from "react";

interface NavigationItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navigation: NavigationItem[];
}

export default function MobileMenu({ navigation }: MobileMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-300 hover:text-white p-2"
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="px-4 sm:px-6 pt-2 pb-6 bg-background-dark/95 dark:bg-background-dark border-t border-surface-border/80 backdrop-blur-lg">
          <div className="flex flex-col gap-1">
            {navigation.map((link) => (
              <a
                key={`mobile-${link.label}`}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-gray-200 hover:bg-white/5 hover:text-white transition-colors"
                href={link.href}
                onClick={closeMobileMenu}
              >
                {link.label}
                <span className="material-symbols-outlined text-base text-primary/70">
                  arrow_forward
                </span>
              </a>
            ))}
          </div>
          <a
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg h-11 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold shadow-lg shadow-red-900/20"
            href="#contact"
            onClick={closeMobileMenu}
          >
            Contact Us
            <span className="material-symbols-outlined text-base">call</span>
          </a>
        </div>
      </div>
    </>
  );
}
