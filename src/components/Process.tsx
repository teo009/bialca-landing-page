"use client";

import React from "react";
import { Hammer, Landmark, Layers } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="relative py-28 bg-surface-container-low border-b border-outline-variant/10 overflow-hidden">
      {/* Floor Plan Blueprint Drawing Backdrop */}
      <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none">
        <img
          alt="Floor Plan Overlay"
          className="w-full h-full object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmV27xW3M_bbaLGB0A4SZUzG7obalBslAwmPp4-pRWOhf08ab7CFl1dcG4vJD-SNFyouDI-LKC8CkM5CoXoJUSnnS5fNX2ne1929lt1GHRQHayNllf4mq5Oi1ARYH3XDsh9lOOPhaOEBBFjoxOvUKdgb33WWxxDJL8nEHrkcHP3e7LLoX5jluUz7sGFw1e6nW5rmZnt9zcBs1eTW5AtH_uFiqpvylOw2pVVCtu8jetf2LBf8hbnpURzQiVY1cRvJ7jatMueqtA_G0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-geist text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Método de Entrega Garantizado
          </span>
          <h2 className="font-geist text-4xl md:text-5xl font-light text-primary tracking-tight">
            El Método <span className="font-semibold">BIALCA</span>
          </h2>
          <p className="font-sans text-on-surface-variant text-base mt-4 leading-relaxed">
            Eliminamos la incertidumbre de la construcción tradicional mediante un flujo técnico secuencial e inteligente en 3 etapas.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/35 z-0" />

          {/* Step 1 */}
          <div className="relative z-10 space-y-6 flex flex-col items-start">
            <div className="w-20 h-20 bg-white border border-outline-variant/20 flex items-center justify-center shadow-sm rounded-sm hover:border-secondary transition-colors duration-300">
              <span className="text-geist text-2xl font-light text-primary">01</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Landmark className="w-4 h-4 text-secondary" />
                <h4 className="font-geist text-lg font-semibold text-primary">Concepto & Viabilidad</h4>
              </div>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Analizamos normativas locales, restricciones geotécnicas y traducimos sus necesidades espaciales en un primer esquema volumétrico tridimensional optimizado.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 space-y-6 flex flex-col items-start">
            {/* Dark highlight step */}
            <div className="w-20 h-20 bg-primary flex items-center justify-center shadow-md rounded-sm border border-primary hover:bg-secondary hover:border-secondary transition-colors duration-300">
              <span className="text-geist text-2xl font-light text-white">02</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-secondary" />
                <h4 className="font-geist text-lg font-semibold text-primary">Simulación BIM & MEP</h4>
              </div>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Construimos virtualmente el 100% de la ingeniería civil (estructuras, tuberías, climatización y electricidad), erradicando colisiones físicas antes de verter el primer camión de concreto.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 space-y-6 flex flex-col items-start">
            <div className="w-20 h-20 bg-white border border-outline-variant/20 flex items-center justify-center shadow-sm rounded-sm hover:border-secondary transition-colors duration-300">
              <span className="text-geist text-2xl font-light text-primary">03</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Hammer className="w-4 h-4 text-secondary" />
                <h4 className="font-geist text-lg font-semibold text-primary">Ejecución Milimétrica</h4>
              </div>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Supervisamos la construcción física con un control estricto de tolerancias. Garantizamos que el producto final coincida con el gemelo digital en un rango de error nulo.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
