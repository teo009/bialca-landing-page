"use client";

import React from "react";
import { Hammer, Compass, Cpu, CheckCircle } from "lucide-react";

export default function Specs() {
  const specialties = [
    {
      icon: <Hammer className="w-8 h-8 text-secondary" />,
      title: "Ingeniería Civil & Estructural",
      description: "Cálculo matemático de cimentaciones, estructuras de acero, hormigón armado y pórticos complejos para garantizar estabilidad bajo cualquier coeficiente sísmico o de viento.",
      details: ["Análisis de cargas estáticas y dinámicas", "Cálculo de losas y vigas pretensadas", "Diseño de cimentaciones especiales", "Rehabilitación de pórticos estructurales"]
    },
    {
      icon: <Compass className="w-8 h-8 text-secondary" />,
      title: "Diseño 3D & Renders Paramétricos",
      description: "Modelado volumétrico generativo de alta definición. Creamos gemelos visuales idénticos al entorno físico con renders fotorrealistas de nivel cinematográfico.",
      details: ["Renders fotorrealistas 8K de exteriores/interiores", "Simulaciones de asoleamiento dinámico", "Recorridos virtuales 3D interactivos", "Diseño de fachadas paramétricas continuas"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      title: "Coordinación BIM MEP LOD 400",
      description: "Integración de todas las disciplinas de construcción en un único entorno digital. Erradicamos colisiones mecánicas, eléctricas e hidráulicas antes de la obra.",
      details: ["Modelado con Nivel de Detalle 400 (LOD)", "Informes automatizados de interferencias", "Planificación modular de tuberías MEP", "Documentación técnica lista para obra"]
    }
  ];

  return (
    <section id="specs" className="relative py-28 bg-[#17191C] text-white overflow-hidden noise-overlay">
      {/* Blueprint Backdrop */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <span className="text-secondary font-geist text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Nuestras Disciplinas
          </span>
          <h2 className="font-geist text-4xl md:text-5xl font-light tracking-tight leading-tight">
            Especialistas en <span className="font-semibold text-secondary">Rigor Técnico</span>
          </h2>
          <p className="font-sans text-white/60 text-base mt-4 leading-relaxed">
            Abordamos cada encargo como una ecuación perfecta de física aplicada y refinamiento digital, garantizando excelencia en cada plano técnico.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specialties.map((spec, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-secondary p-8 rounded-xl flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.08]"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  {spec.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-geist text-xl font-semibold tracking-tight">{spec.title}</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">{spec.description}</p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 space-y-3">
                {spec.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-white/60">
                    <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-sans leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
