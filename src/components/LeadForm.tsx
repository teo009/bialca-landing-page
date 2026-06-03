"use client";

import React, { useState, useRef } from "react";
import { ShieldCheck, Calendar, FileText, CheckCircle2, UploadCloud, Loader2, ArrowRight } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    budget: "",
    description: "",
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Perform browser validation check
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate sending data and loading structural engine walkthrough
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Start simulated structural analysis progress
      const steps = [
        "Cargando planos preliminares...",
        "Calculando viabilidad volumétrica...",
        "Corriendo simulación de interferencias MEP...",
        "Modelo 100% verificado. Reporte listo."
      ];
      
      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < steps.length - 1) {
          currentStep += 1;
          setSimulationStep(currentStep);
        } else {
          clearInterval(interval);
        }
      }, 1200);

    }, 2000);
  };

  return (
    <section id="contact" className="relative py-32 bg-surface border-b border-outline-variant/10 blueprint-grid">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Direct copy optimized for conversion */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-secondary font-geist text-xs font-bold uppercase tracking-[0.2em] block">
                Agende su Análisis Técnico
              </span>
              <h2 className="font-geist text-4xl md:text-5xl font-light text-primary tracking-tight leading-tight">
                Lleve su visión a la <span className="font-semibold text-primary">realidad ejecutable</span>
              </h2>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed">
                Envíenos los parámetros preliminares de su obra. Nuestro equipo de ingenieros civiles y especialistas en 3D analizará la viabilidad del terreno para coordinar una sesión técnica sin costo de 30 minutos, donde le presentaremos su gemelo digital inicial.
              </p>
            </div>

            {/* Bullet points overcoming customer doubts */}
            <div className="space-y-4 pt-4 border-t border-outline-variant/20">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-secondary-container/20 rounded-md text-secondary shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-geist text-sm font-semibold text-primary">0% Imprevistos en Obra</h4>
                  <p className="font-sans text-xs text-on-surface-variant/80">
                    Erradicamos colisiones MEP en fase virtual. Evite compras duplicadas y retrasos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-secondary-container/20 rounded-md text-secondary shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-geist text-sm font-semibold text-primary">Consultoría de 30 Minutos de Valor</h4>
                  <p className="font-sans text-xs text-on-surface-variant/80">
                    No es una llamada comercial. Recibirá consejos de ingeniería aplicables a sus planos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-secondary-container/20 rounded-md text-secondary shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-geist text-sm font-semibold text-primary">Informe Preliminar Incluido</h4>
                  <p className="font-sans text-xs text-on-surface-variant/80">
                    Le entregamos un reporte PDF detallando viabilidad volumétrica básica y normativas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form in Floating Glass Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel w-full max-w-xl mx-auto p-8 rounded-2xl border border-white/50 shadow-2xl relative overflow-hidden noise-overlay">
              
              {!isSubmitted ? (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="space-y-2 mb-6">
                    <h3 className="font-geist text-xl font-semibold text-primary">Especificaciones de su Proyecto</h3>
                    <p className="font-sans text-xs text-on-surface-variant/75">
                      Campos obligatorios marcados con asterisco (*). Sus planos se transfieren de forma cifrada.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="form-group flex flex-col gap-1.5 relative">
                    <label htmlFor="fullName" className="font-geist text-[10px] font-bold tracking-widest text-on-surface-variant uppercase transition-colors duration-300">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      autoComplete="name"
                      placeholder="ej. Arq. Alejandro Silva"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input py-2.5 px-1 text-sm font-sans text-primary placeholder-on-surface-variant/40"
                    />
                    <div className="error-msg flex items-center gap-1 text-[11px] text-error font-medium mt-1">
                      <span>⚠️</span> Por favor, introduzca su nombre para poder dirigirnos a usted.
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="form-group flex flex-col gap-1.5 relative">
                    <label htmlFor="email" className="font-geist text-[10px] font-bold tracking-widest text-on-surface-variant uppercase transition-colors duration-300">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="ej. alejandro@estudiodiseño.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input py-2.5 px-1 text-sm font-sans text-primary placeholder-on-surface-variant/40"
                    />
                    <div className="error-msg flex items-center gap-1 text-[11px] text-error font-medium mt-1">
                      <span>⚠️</span> Por favor, proporcione un correo válido para enviarle el informe técnico.
                    </div>
                  </div>

                  {/* Selectors Grid (Service & Budget) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service */}
                    <div className="form-group flex flex-col gap-1.5">
                      <label htmlFor="service" className="font-geist text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                        Servicio Principal *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input form-select py-2.5 px-1 text-sm font-sans text-primary bg-transparent"
                      >
                        <option value="" disabled className="text-on-surface-variant/30">Seleccionar servicio</option>
                        <option value="diseno" className="text-primary bg-white">Diseño 3D & Estética</option>
                        <option value="estructural" className="text-primary bg-white">Cálculo Estructural Civil</option>
                        <option value="bim" className="text-primary bg-white">Coordinación BIM MEP</option>
                        <option value="completo" className="text-primary bg-white">Proyecto Integral Llave en Mano</option>
                      </select>
                      <div className="error-msg flex items-center gap-1 text-[11px] text-error font-medium mt-1">
                        <span>⚠️</span> Seleccione una categoría.
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="form-group flex flex-col gap-1.5">
                      <label htmlFor="budget" className="font-geist text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                        Presupuesto de Obra *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-input form-select py-2.5 px-1 text-sm font-sans text-primary bg-transparent"
                      >
                        <option value="" disabled>Seleccionar escala</option>
                        <option value="pequeno" className="text-primary bg-white">&lt; $100k USD</option>
                        <option value="mediano" className="text-primary bg-white">$100k - $500k USD</option>
                        <option value="grande" className="text-primary bg-white">$500k - $2M USD</option>
                        <option value="premium" className="text-primary bg-white">&gt; $2M USD</option>
                      </select>
                      <div className="error-msg flex items-center gap-1 text-[11px] text-error font-medium mt-1">
                        <span>⚠️</span> Indique una escala de inversión.
                      </div>
                    </div>
                  </div>

                  {/* Text Description */}
                  <div className="form-group flex flex-col gap-1.5">
                    <label htmlFor="description" className="font-geist text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                      Describa su visión u obra
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      placeholder="ej. Buscamos el cálculo estructural de una vivienda en voladizo sobre suelo arcilloso..."
                      value={formData.description}
                      onChange={handleChange}
                      className="form-input py-2.5 px-1 text-sm font-sans text-primary placeholder-on-surface-variant/40 resize-none"
                    />
                  </div>

                  {/* Plan/Sketch Upload (Optional) */}
                  <div className="space-y-2">
                    <span className="font-geist text-[10px] font-bold tracking-widest text-on-surface-variant uppercase block">
                      Adjuntar Plano o Bosquejo (Opcional)
                    </span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.dwg"
                      className="hidden"
                    />
                    
                    <div
                      onClick={triggerFileInput}
                      className="border-2 border-dashed border-outline-variant/35 rounded-xl p-5 text-center cursor-pointer bg-white/40 hover:bg-white/70 hover:border-secondary transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
                    >
                      <UploadCloud className="w-8 h-8 text-on-surface-variant/60 group-hover:text-secondary transition-colors" />
                      {file ? (
                        <div className="space-y-1">
                          <p className="font-sans text-xs font-semibold text-primary">{file.name}</p>
                          <p className="font-geist text-[10px] text-on-surface-variant/70">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB • Clic para reemplazar
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <p className="font-sans text-xs font-semibold text-primary">
                            Arrastre sus archivos aquí o <span className="text-secondary group-hover:underline">examine</span>
                          </p>
                          <p className="font-geist text-[9px] text-on-surface-variant/50">
                            Formatos soportados: PDF, DWG, JPG, PNG (Max. 15MB)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary disabled:bg-primary-container text-white py-4 rounded-sm font-geist text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Validando Parámetros...
                      </>
                    ) : (
                      <>
                        Enviar Parámetros & Agendar Consulta
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Stunning Interactive Success State with Structural Analysis progress bar */
                <div className="py-8 text-center space-y-8 animate-[fadeIn_0.5s_ease-out]">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-container/20 rounded-full text-secondary animate-[scaleIn_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-geist text-2xl font-semibold text-primary">
                      ¡Modelo Recibido Correctamente!
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed px-2">
                      Estimado/a <strong>{formData.fullName}</strong>, hemos registrado su proyecto en nuestro servidor. Nuestro motor preliminar BIM ha iniciado el cálculo estructural básico:
                    </p>
                  </div>

                  {/* Live Simulation Engine Walkthrough */}
                  <div className="bg-white/50 border border-outline-variant/20 rounded-xl p-5 text-left max-w-sm mx-auto space-y-4 shadow-sm">
                    <div className="flex justify-between items-center text-xs font-geist font-semibold">
                      <span className="text-primary uppercase tracking-wider">Simulación Estructural 3D</span>
                      <span className="text-secondary">
                        {simulationStep === 0 && "25%"}
                        {simulationStep === 1 && "50%"}
                        {simulationStep === 2 && "75%"}
                        {simulationStep === 3 && "100%"}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-secondary h-full transition-all duration-1000 ease-out"
                        style={{
                          width:
                            simulationStep === 0 ? "25%" :
                            simulationStep === 1 ? "50%" :
                            simulationStep === 2 ? "75%" : "100%"
                        }}
                      />
                    </div>

                    {/* Current step text */}
                    <div className="flex items-center gap-2 text-xs font-sans text-on-surface-variant">
                      <Loader2 className={`w-3.5 h-3.5 text-secondary ${simulationStep < 3 ? "animate-spin" : "hidden"}`} />
                      <span>
                        {simulationStep === 0 && "Cargando planos preliminares y nube de puntos..."}
                        {simulationStep === 1 && "Calculando tensiones estáticas estructurales..."}
                        {simulationStep === 2 && "Mitigando colisiones MEP e instalaciones ocultas..."}
                        {simulationStep === 3 && "¡Informe completado con 0 desviaciones estructurales!"}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-on-surface-variant/80 px-4 leading-relaxed">
                    Hemos enviado un correo a <strong>{formData.email}</strong>. En menos de 24 horas laborables un ingeniero civil senior le enviará su <strong>Informe Preliminar de Viabilidad en PDF</strong> junto a un enlace personalizado de Calendly para agendar su consultoría de 30 minutos.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
