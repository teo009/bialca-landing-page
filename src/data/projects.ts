export interface Project {
  id: string;
  title: string;
  category: 'Residencial' | 'Retail' | 'BIM Tech' | 'Interiors';
  image: string;
  description: string;
  lod: number;
  phase: string;
  scale: string;
  engineeringSpec: string;
}

export const projects: Project[] = [
  {
    id: "villa-cantabrica",
    title: "Villa Cantábrica",
    category: "Residencial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMOIGELiftCtJC231kZXLLtyBp_guYBziL7OlsbhAAx6PxlPRs4caHjieggmWq-rHZIMsnABFvr2vNTzrSm7TO7Y_vFwQ7NunDuHbMEpm3PbdCi7yZRvZbRXg9XYKpiaTREOvyCspnbRe5GBfBx133jcSTNjUXl_dH4xP5RO9OXMbff52kPvUN79iuSIJ3pKvL7CoFmyK0YWPjj8ZM_8u_Ckq4Aq8ifrZYTSKPZGbHxZ5ZP2THl_eeJbB66vysQU3cubi9cM1UfnY",
    description: "Residencia unifamiliar premium integrada en los acantilados del norte. Diseñada mediante modelado paramétrico avanzado para soportar la erosión salina y optimizar la captación solar pasiva.",
    lod: 400,
    phase: "EJECUCIÓN",
    scale: "Escala 1:50",
    engineeringSpec: "Simulación térmica pasiva, estructura de hormigón autocompactante y fachada ventilada de piedra técnica."
  },
  {
    id: "studio-horizon",
    title: "Studio Horizon",
    category: "BIM Tech",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyaUvV2Xwabl1GzXY9TJSzYVKuYURRe0FvcBBzSpQpF-DFQIofTAunDvmjGWHCSTqRt_eWgb6GjpdArqubSBGGkHF-WhZXuVMlab4o37sJLnhWXSS-BEskSN-DZ36QPxSMEaafY1PvtpNiMsTjKYOuNzgNe4GoSdMc0uSycHsYPcBW6B0QBxgl8IQABnbA-ZDudul7S50xr2xRLwwx1MUYK-vLreJyc34ajMn7NtKHa5kAdM1FqR9cexWxTSqqzOk-RQiO1ti9TX0",
    description: "Estudio dinámico de sombras y optimización lumínica para oficinas corporativas. Estructura con parasoles móviles automatizados algorítmicamente para reducir la carga térmica estival.",
    lod: 400,
    phase: "CONSTRUCCIÓN",
    scale: "Escala 1:100",
    engineeringSpec: "Simulación de radiación en tiempo real, reducción del 35% en climatización y estructura portante de acero."
  },
  {
    id: "kitchen-loft-42",
    title: "Kitchen Loft 42",
    category: "Interiors",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6EDjYAZB2jEwTzj7BEH12BKm_gjXsSepnsIejNyEn5t1jkN1foC42syS0O6dSAcaqmZsQ7gO9JBu_TSzZNYn4CNVj3Ys5hahjWs-LBKiE4eEajQEVAbTN3kUSHAKOIODzi0Ad5EqkuDmRDUY4q3PINXHMjTcFz26bx25l9FAjTkru39vXLBKe_ZWsV2F-z5QZlEnwxsGr0wNerpEZw9_Id8CHenfSlUSeGXOJMfa7yeWRSviLEtFuTrSrJQP_-Bo2oonbsjJBFs",
    description: "Cocina de lujo minimalista con barra monolítica de mármol Carrara e integración digital invisible de sistemas domóticos de última generación.",
    lod: 500,
    phase: "FINALIZADO",
    scale: "Escala 1:20",
    engineeringSpec: "Carpintería a medida paramétrica, colisiones MEP nulas en techo técnico e iluminación automatizada DALI."
  },
  {
    id: "beki-concept",
    title: "Tienda Beki Concept",
    category: "Retail",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB39yhkqjVD-F1S1GN3YBkpH9BR1Rk52KpjwqXKJsS1xhDIyZUagegWN0KZRprbiiyec8blJLGcqw0finEEjsChuPchZlF2YfJzEzUdlB5FL6k3Z90QMqeek0H9gKxJWw1e1VuN9h0lZaqNTDJ3dWBOd_1FcL5cPohL7VyMQVYmJmZChwKJA5YpHgon1uiVEU1v8cvhlBt4pwDH6KOdauOb8wWX1UvZUg-YIIHwm25iJQR8CtuQIL9hbNQury8zj7_gx-FWXu78mlQ",
    description: "Espacio comercial boutique con revestimientos continuos orgánicos. El flujo espacial de clientes está diseñado a través de simulaciones de comportamiento peatonal.",
    lod: 350,
    phase: "DISEÑO",
    scale: "Escala 1:50",
    engineeringSpec: "Análisis predictivo de flujo de clientes, renderizado fotorrealista 3D y sistemas HVAC ocultos de alta eficiencia."
  },
  {
    id: "industrial-loft",
    title: "Industrial Loft",
    category: "BIM Tech",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt2e2lUe-Ze_cQKtcQe3cDmpajwZ52ySwC2y-x62x1Zan5xEvoAXhLZhTYpqsZstvEVhBMUxDp4wN_WIIefUOc8dYLK0eqsd9CZa5IpJHWYRNLhuwIn68z2m9NPJXZEsmA6HYCSUy7JP4EHPdMMZzp5ftWOLszHiHzw80-TvlWVScPBrUttVYDNrA3aZQiK9kJUOALtsZJ9kkSmYVAoVDaLKutIVBepcbrrL56GyxMN5iCst6DGUTV29TMSM4P8SbAN36mocdvvy0",
    description: "Modelado integral de climatización e instalaciones industriales ocultas en nave rehabilitada, garantizando un confort térmico uniforme sin alterar la estética estructural vista.",
    lod: 400,
    phase: "INGENIERÍA",
    scale: "Escala 1:50",
    engineeringSpec: "Análisis estructural de pórticos de acero roblonados, simulación de fluidos térmica CFD y prefabricación MEP."
  },
  {
    id: "penthouse-lumiere",
    title: "Penthouse Lumière",
    category: "Residencial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzkkpEgyZzkicfzflow7KiCxuP3zuzD3RI0dti2PUrUIsMAvaRgL9X8FDFbyokRHpc0rySJLkrr41NrDW3qB0gi7kGBZPmcWpeHNJ1SurJ63gTKtsxbkJz_pRpe7c_--tur4ASUrtAVJkyT2kmOEmulFRmyYDBpopVWkwxsoL0EF16G4WwJGf5zG57Dsxbe1zMHGJAnBpHZpmO1KGg9kofdkxMCpG2afiBEu9ghboihtuu7_Wpg77u5gDRA8eO1B7a1i1d9-zzsbE",
    description: "Ático de gran altura y planta libre con transiciones continuas. Los cerramientos de vidrio estructural de piso a techo se calculan dinámicamente frente a la presión del viento.",
    lod: 450,
    phase: "EJECUCIÓN",
    scale: "Escala 1:20",
    engineeringSpec: "Aislamiento acústico de altas prestaciones, cimentación y refuerzo de losa para piscina en voladizo."
  }
];
