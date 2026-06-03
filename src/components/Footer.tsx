"use client";

import React, { useState } from "react";
import { Globe, ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#17191C] text-white border-t border-white/5 overflow-hidden noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20">
        
        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-gutter mb-16">
          
          {/* Column 1: Brand & Intro */}
          <div className="md:col-span-4 space-y-6">
            <button
              onClick={scrollToTop}
              className="font-geist text-2xl font-semibold tracking-widest text-white uppercase hover:text-secondary transition-colors"
            >
              BIALCA
            </button>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm">
              Ingeniería Civil y Modelado 3D de Precisión. Redefiniendo el estándar constructivo moderno a través de la digitalización y el gemelo digital estructural.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Sitio Público"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Studios */}
          <div className="md:col-span-2 md:col-start-6 space-y-5">
            <h5 className="font-geist text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Estudios
            </h5>
            <ul className="space-y-3 font-sans text-xs text-white/60 leading-relaxed">
              <li className="hover:text-white transition-colors cursor-pointer">
                <strong>Madrid Studio</strong>
                <span className="block text-white/40">Paseo de la Castellana, 95</span>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <strong>London Office</strong>
                <span className="block text-white/40">30 St Mary Axe, City of London</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="md:col-span-2 space-y-5">
            <h5 className="font-geist text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Explorar
            </h5>
            <ul className="space-y-3 font-geist text-xs font-semibold tracking-wider uppercase text-white/60">
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors text-left"
                >
                  Portafolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors text-left"
                >
                  Método BIM
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors text-left"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-3 space-y-5">
            <h5 className="font-geist text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Boletín Técnico
            </h5>
            <p className="font-sans text-xs text-white/50 leading-relaxed">
              Artículos mensuales sobre optimización de costos en hormigón armado e innovaciones BIM.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex border-b border-white/20 pb-1.5 focus-within:border-secondary transition-colors duration-300">
                <input
                  type="email"
                  required
                  placeholder="Su correo corporativo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-full text-xs font-sans text-white placeholder-white/35 focus:ring-0 px-0"
                />
                <button type="submit" aria-label="Suscribirse" className="text-white hover:text-secondary transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs font-sans text-secondary animate-[fadeIn_0.3s_ease-out]">
                <Mail className="w-4 h-4 shrink-0" />
                <span>¡Suscrito al Boletín Técnico!</span>
              </div>
            )}
          </div>

        </div>

        {/* Legal & Attribution Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-sans text-xs text-white/40 text-center sm:text-left">
            © 2026 BIALCA Architectural Technology Studio. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 font-sans text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
