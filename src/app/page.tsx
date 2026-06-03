import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Specs from "@/components/Specs";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-surface">
      {/* Structural floating navigation bar */}
      <Header />
      
      <main className="flex-grow w-full">
        {/* Full-screen Twilight Hero Header */}
        <Hero />
        
        {/* Statistics Technical Dashboard */}
        <Metrics />
        
        {/* Interactive Bento Portfolio with BIM Spec sheets */}
        <Portfolio />
        
        {/* Technical Process sequential timeline */}
        <Process />

        {/* Technical disciplines specifications grid */}
        <Specs />
        
        {/* Glassmorphic Conversion Form with :user-invalid CSS validations */}
        <LeadForm />
      </main>
      
      {/* Corporate Footnote bar */}
      <Footer />
    </div>
  );
}
