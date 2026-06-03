"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import { Layers, Settings, Maximize2, Sparkles, ChevronRight, Activity } from "lucide-react";

type FilterType = "Todos" | "Residencial" | "Retail" | "BIM Tech" | "Interiors";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Todos");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = activeFilter === "Todos"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const toggleSpecs = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="portfolio" className="relative py-28 bg-surface border-b border-outline-variant/10 technical-grid">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-geist text-xs font-bold text-secondary tracking-[0.2em] uppercase mb-3 block">
              Garantía de Ejecución
            </span>
            <h2 className="font-geist text-4xl md:text-5xl font-light text-primary tracking-tight leading-tight">
              Obras de <span className="font-semibold">Ingeniería & Modelado</span>
            </h2>
            <p className="font-sans text-on-surface-variant text-base mt-4 leading-relaxed">
              Cada proyecto es una síntesis matemática entre viabilidad estructural, simulaciones físicas en 3D y una estética minimalista atemporal.
            </p>
          </div>
          
          <div className="flex gap-2 text-on-surface-variant items-center bg-white/60 backdrop-blur-md px-4 py-2 border border-outline-variant/20 rounded-full">
            <Activity className="w-4 h-4 text-secondary animate-pulse" />
            <span className="font-geist text-[10px] font-semibold tracking-widest uppercase">
              Escala de Detalle Estricta 1:100
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-outline-variant/20 pb-5 mb-12">
          {(["Todos", "Residencial", "Retail", "BIM Tech", "Interiors"] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setExpandedProject(null); // Reset detail expansion on filter change
              }}
              className={`px-5 py-2.5 font-geist text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-md scale-105"
                  : "text-on-surface-variant hover:text-primary hover:bg-white bg-transparent"
              }`}
            >
              {filter === "Todos" ? "Todos los Modelos" : filter}
            </button>
          ))}
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 transition-all duration-500">
          {filteredProjects.map((project, idx) => {
            // Determine Bento size based on index to create beautiful asymmetric layouts
            let gridClasses = "md:col-span-6"; // Default half width
            if (activeFilter === "Todos") {
              if (idx === 0) gridClasses = "md:col-span-8 h-[550px]";
              else if (idx === 1) gridClasses = "md:col-span-4 h-[550px]";
              else if (idx === 2) gridClasses = "md:col-span-4 h-[460px]";
              else if (idx === 3) gridClasses = "md:col-span-8 h-[460px]";
              else if (idx === 4) gridClasses = "md:col-span-6 h-[480px]";
              else if (idx === 5) gridClasses = "md:col-span-6 h-[480px]";
            } else {
              gridClasses = "md:col-span-6 h-[480px]";
            }

            return (
              <div
                key={project.id}
                className={`${gridClasses} group relative overflow-hidden bg-white border border-outline-variant/15 shadow-sm rounded-xl flex flex-col justify-end transition-all duration-500`}
              >
                {/* Project Base Image */}
                <img
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.35] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  src={project.image}
                />

                {/* Ambient dark gradient overlay (static) */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-0 opacity-80" />

                {/* Static base content (shown when not hovered) */}
                <div className="relative z-10 p-6 md:p-8 text-white transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full font-geist text-[9px] font-bold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="font-geist text-[9px] text-white/60 tracking-widest uppercase">
                      LOD {project.lod}
                    </span>
                  </div>
                  <h3 className="font-geist text-2xl font-light tracking-tight">{project.title}</h3>
                </div>

                {/* Premium Interactive Hover Overlay (Glassmorphism) */}
                <div className="absolute inset-0 glass-panel flex flex-col justify-between p-6 md:p-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
                  {/* Top Bar of Card */}
                  <div className="flex justify-between items-start">
                    <span className="font-geist text-[10px] font-bold bg-primary text-white px-3 py-1.5 rounded-sm tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div className="flex gap-4 text-right">
                      <div>
                        <p className="font-geist text-[9px] text-on-surface-variant/60 tracking-wider">PRESUPUESTO</p>
                        <p className="font-geist text-[11px] font-semibold text-primary">CERRADO</p>
                      </div>
                      <div>
                        <p className="font-geist text-[9px] text-on-surface-variant/60 tracking-wider">PHASE</p>
                        <p className="font-geist text-[11px] font-semibold text-secondary">{project.phase}</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Descriptive Content */}
                  <div className="my-auto pt-4">
                    <h3 className="font-geist text-2xl font-semibold text-primary mb-2">{project.title}</h3>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Action Section */}
                  <div className="flex flex-col gap-3 pt-3 border-t border-outline-variant/15">
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-1.5 text-on-surface-variant">
                        <Layers className="w-3.5 h-3.5 text-secondary" />
                        <span className="font-geist text-[10px] font-semibold">Modelado BIM LOD {project.lod}</span>
                      </div>
                      <span className="font-geist text-[10px] text-on-surface-variant/70 font-semibold">{project.scale}</span>
                    </div>

                    {/* Expand specs accordion */}
                    <button
                      onClick={() => toggleSpecs(project.id)}
                      className="w-full flex items-center justify-between bg-primary/5 hover:bg-primary hover:text-white px-4 py-2.5 text-left rounded-sm font-geist text-[10px] font-bold tracking-widest uppercase transition-colors"
                    >
                      <span>{expandedProject === project.id ? "Ocultar Parámetros" : "Ver Parámetros Estructurales"}</span>
                      <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${expandedProject === project.id ? "rotate-90" : ""}`} />
                    </button>
                  </div>
                </div>

                {/* Sub-panel specifications card (reveals structurally under the bento card or overlaps it) */}
                <div
                  className={`absolute inset-x-0 bottom-0 bg-[#1e2022] text-white p-6 transition-all duration-500 z-20 border-t border-white/10 ${
                    expandedProject === project.id ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-1.5">
                      <Settings className="w-4 h-4 text-secondary animate-spin-slow" />
                      <h4 className="font-geist text-xs font-semibold tracking-wider uppercase">Ficha Técnica BIM</h4>
                    </div>
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="text-white/50 hover:text-white text-[10px] font-geist tracking-widest uppercase"
                    >
                      Cerrar ×
                    </button>
                  </div>
                  <ul className="space-y-2 text-xs font-sans text-white/70">
                    <li>
                      <span className="font-geist font-bold text-secondary uppercase text-[10px] mr-1 block sm:inline">Cálculo Estructural:</span>
                      {project.engineeringSpec}
                    </li>
                    <li>
                      <span className="font-geist font-bold text-secondary uppercase text-[10px] mr-1 block sm:inline">Detección de Colisiones:</span>
                      Realizada en fase virtual. Mitigación del 100% de interferencias de tuberías y ductos en obra.
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
