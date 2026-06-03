"use client";

import React from "react";
import { ChevronDown, Layers, ShieldCheck } from "lucide-react";

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative h-screen w-full flex items-center overflow-hidden bg-[#101214] noise-overlay">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#101214]/90 via-[#101214]/65 to-transparent z-10" />
        <img
          alt="Cinematic Architectural Background"
          className="w-full h-full object-cover grayscale-[0.25] brightness-[0.4] animate-[pulse_8s_infinite_alternate]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZZoT9_OoplDoMNbs6UJwg45JAhnUQn1LDc4R-u5VdhUQr_3ioqxCfsBKfC4LTWJ5GsJCyVgj_Z-qu12qdPN6Y3MHGUo453jtEXqHVjEhzgdbI3Ueyb8AOMXngSYj1g45kFSp3cSs3b1BsDhaGT09aDG7KvazpaxC7u3HaOr3rfCHr4YO3DGUjG86Zs-Xkb_WJUGuAgrx6cKsKj6ePjlHoZoirSZcVP2y1XoZ5D1uPV4mvyxmjfvMlXPsp4tz_PUIsRHsCPKLjlM"
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-20">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          {/* Trust Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full transition-all duration-300 hover:bg-white/10">
            <Layers className="w-3.5 h-3.5 text-secondary" />
            <span className="font-geist text-[10px] font-semibold tracking-[0.2em] uppercase">
              Modelado de Precisión LOD 400
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-geist text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight">
            Ingeniería de Precisión.<br />
            <span className="font-semibold text-secondary">Control 3D Absoluto.</span>
          </h1>

          {/* Subheading - StoryBrand copy focused on safety & zero errors */}
          <p className="text-white/70 font-sans text-base md:text-xl max-w-2xl leading-relaxed">
            Unificamos el rigor del cálculo estructural con la potencia visual del modelado BIM. Construimos virtualmente cada centímetro de su obra para garantizar presupuestos cerrados y eliminar desviaciones en terreno.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center justify-center gap-2 bg-secondary text-white hover:bg-white hover:text-primary px-8 py-4.5 rounded-sm font-geist text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-95"
            >
              Iniciar Consulta Técnica
            </button>
            <button
              onClick={() => handleScroll("portfolio")}
              className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4.5 rounded-sm font-geist text-xs font-bold tracking-widest uppercase backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300 active:scale-95"
            >
              Explorar Proyectos
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-wrap gap-x-8 gap-y-3 text-white/55 text-xs font-sans">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Garantía de Cero Conflictos MEP</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>100% Viabilidad Estructural Validada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Bouncing Scroll Prompt */}
      <button
        onClick={() => handleScroll("metrics")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group cursor-pointer"
      >
        <span className="text-white/45 font-geist text-[10px] tracking-[0.25em] uppercase group-hover:text-white transition-colors">
          Explorar
        </span>
        <ChevronDown className="w-4 h-4 text-white/45 group-hover:text-white transition-all duration-300 animate-bounce" />
      </button>
    </header>
  );
}
