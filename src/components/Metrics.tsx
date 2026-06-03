"use client";

import React from "react";
import { Building2, Compass, ShieldCheck } from "lucide-react";

export default function Metrics() {
  return (
    <section id="metrics" className="relative bg-[#17191C] py-24 overflow-hidden noise-overlay border-y border-white/5">
      {/* Blueprint Grid Lines Backdrop */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Metric 1 */}
          <div className="flex flex-col border-l border-white/10 pl-6 md:pl-8 group hover:border-secondary transition-colors duration-500">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-secondary" />
              <span className="text-white/45 font-geist text-[10px] tracking-[0.25em] uppercase">
                Trayectoria Técnica
              </span>
            </div>
            <h3 className="text-white font-geist text-5xl md:text-6xl font-light mb-2">
              150+
            </h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Hitos de ingeniería civil, cálculo y diseño 3D entregados con total conformidad.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col border-l border-white/10 pl-6 md:pl-8 group hover:border-secondary transition-colors duration-500">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-secondary" />
              <span className="text-white/45 font-geist text-[10px] tracking-[0.25em] uppercase">
                Modelado de Espacios
              </span>
            </div>
            <h3 className="text-white font-geist text-5xl md:text-6xl font-light mb-2">
              45k+ <span className="text-2xl font-light text-secondary">M²</span>
            </h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              De superficie simulada en modelos tridimensionales paramétricos de alta fidelidad.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col border-l border-white/10 pl-6 md:pl-8 group hover:border-secondary transition-colors duration-500">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span className="text-white/45 font-geist text-[10px] tracking-[0.25em] uppercase">
                Garantía de Obra
              </span>
            </div>
            <h3 className="text-white font-geist text-5xl md:text-6xl font-light mb-2">
              1:1
            </h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Precisión milimétrica. Lo que se modela virtualmente coincide exactamente con la ejecución real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
