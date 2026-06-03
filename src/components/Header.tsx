"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out z-50 border border-outline-variant/10 shadow-sm ${
          isScrolled
            ? "top-3 py-2.5 w-[85%] max-w-5xl bg-white/70 backdrop-blur-2xl"
            : "top-5 py-4 w-[90%] max-w-6xl bg-white/40 backdrop-blur-xl"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 w-full">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-geist font-semibold tracking-widest text-primary hover:text-secondary transition-colors uppercase"
          >
            BIALCA
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-on-surface-variant hover:text-primary font-geist text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-on-surface-variant hover:text-primary font-geist text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Método BIM
            </button>
            <button
              onClick={() => scrollToSection("specs")}
              className="text-on-surface-variant hover:text-primary font-geist text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Especialidades
            </button>
          </div>

          {/* Header Action CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-1 bg-primary text-white hover:bg-secondary px-5 py-2 rounded-full font-geist text-xs font-semibold tracking-wider uppercase transition-all duration-300 active:scale-95"
            >
              Iniciar Proyecto
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-on-surface hover:text-secondary transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop & Container */}
      <div
        className={`fixed inset-0 bg-primary/20 backdrop-blur-lg z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-white border border-outline-variant/15 p-6 shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-5 text-center">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="py-2 text-on-surface-variant hover:text-primary font-geist text-sm font-semibold tracking-widest uppercase border-b border-surface-container/50"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="py-2 text-on-surface-variant hover:text-primary font-geist text-sm font-semibold tracking-widest uppercase border-b border-surface-container/50"
            >
              Método BIM
            </button>
            <button
              onClick={() => scrollToSection("specs")}
              className="py-2 text-on-surface-variant hover:text-primary font-geist text-sm font-semibold tracking-widest uppercase border-b border-surface-container/50"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-primary text-white hover:bg-secondary py-3.5 rounded-xl font-geist text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              Iniciar Proyecto
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
