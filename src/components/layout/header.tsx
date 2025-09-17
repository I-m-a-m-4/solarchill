"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Hexagon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/nav-links";
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-neutral-950/80 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="relative inline-grid h-10 w-10 place-items-center rounded-xl bg-neutral-900 ring-1 ring-white/10">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"></span>
            <Hexagon className="h-6 w-6 text-emerald-300" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-medium text-neutral-300 font-sans">SOLARCHILL</span>
            <span className="text-xs text-neutral-500 font-sans">SOLUTIONS</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
            <a href="#contact" className="relative hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:scale-105 transition-all duration-200 group">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></span>
              <span className="absolute inset-0 rounded-lg ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all"></span>
              <span className="relative">Join Us</span>
            </a>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] bg-neutral-900/80 ring-1 ring-white/10 backdrop-blur-md">
              <div className="flex h-full flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                   <Link href="#home" className="flex items-center gap-2 font-headline text-xl font-bold" onClick={() => setMobileMenuOpen(false)}>
                    <Hexagon className="h-7 w-7 text-emerald-300" />
                    <span>SolarChill</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="mt-12 flex flex-col items-center gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-medium text-neutral-300 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                   <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="relative w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:scale-105 transition-all duration-200 group">
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></span>
                      <span className="absolute inset-0 rounded-lg ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all"></span>
                      <span className="relative">Join Us</span>
                    </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
