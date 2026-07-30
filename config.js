/**
 * RV Soluciones — Configuración del sitio
 * ----------------------------------------
 * Edita este archivo desde el panel admin (admin.html)
 * o modifícalo directamente aquí.
 * Después de cada cambio: git add . && git commit -m "update" && git push
 */
const RV_CONFIG = {
  // ─── NAVBAR ──────────────────────────────────────────────────────────
  navbar: {
    brand: "RV Soluciones",
    logo: "assets/logo.png",
    links: [
      { label: "Servicios",  href: "#servicios" },
      { label: "Portafolio", href: "#portafolio" },
      { label: "Nosotros",   href: "#diferenciadores" }
    ],
    ctaLabel: "Contáctame",
    ctaHref:  "#contacto"
  },

  // ─── HERO ─────────────────────────────────────────────────────────────
  hero: {
    badge:       "Consultoría Tecnológica Profesional",
    titleLine1:  "Tecnología que",
    titleGold:   "transforma",
    titleLine2:  "negocios",
    description: "Diseño y desarrollo soluciones digitales a medida — sitios web profesionales, sistemas de gestión empresarial y auditoría TI — para que tu negocio crezca con tecnología de calidad.",
    btn1Label:   "Ver mis proyectos",
    btn1Href:    "#portafolio",
    btn2Label:   "Hablemos",
    btn2Href:    "#contacto",
    stats: [
      { number: 100, suffix: "%", label: "Personalizado" },
      { number: 3,   suffix: "",  label: "Servicios clave" },
      { number: 0,   suffix: "",  label: "Costos ocultos" }
    ]
  },

  // ─── SERVICIOS ────────────────────────────────────────────────────────
  services: {
    label:    "¿Qué ofrezco?",
    title:    "Servicios diseñados para tu negocio",
    subtitle: "Cada proyecto es único. Trabajo contigo desde la idea hasta la entrega, con soluciones a medida que realmente resuelven tu problema.",
    items: [
      {
        id:       "servicioWeb",
        icon:     "🌐",
        title:    "Sitios Web para Negocios",
        desc:     "Diseño y desarrollo sitios web modernos, rápidos y profesionales que generan confianza y atraen más clientes a tu negocio.",
        features: [
          "Diseño responsive (móvil y escritorio)",
          "Catálogo de productos interactivo",
          "Optimizado para buscadores (SEO)",
          "Formularios de contacto y WhatsApp"
        ]
      },
      {
        id:       "servicioSistemas",
        icon:     "📊",
        title:    "Sistemas de Gestión",
        desc:     "Reportes empresariales, dashboards y sistemas de control que te dan visibilidad total sobre tu negocio para tomar mejores decisiones.",
        features: [
          "Reportes automatizados y visuales",
          "Control de inventario y ventas",
          "Exportación a PDF y Excel",
          "Sin dependencias de internet"
        ]
      },
      {
        id:       "servicioAuditoria",
        icon:     "🔍",
        title:    "Auditoría TI",
        desc:     "Análisis completo del parque tecnológico de tu empresa: hardware, software, licencias y seguridad para optimizar costos y reducir riesgos.",
        features: [
          "Inventario detallado de equipos y SW",
          "Análisis de seguridad y vulnerabilidades",
          "Reporte ejecutivo con recomendaciones",
          "Plan de optimización de licencias"
        ]
      }
    ]
  },

  // ─── PORTAFOLIO ───────────────────────────────────────────────────────
  portfolio: {
    label:    "Proyectos reales",
    title:    "Trabajo que habla por sí mismo",
    subtitle: "Proyectos completados y entregados a clientes reales. Cada uno resuelve un problema concreto con tecnología de calidad.",
    projects: [
      {
        id:    "proyectoParkingPro",
        image: "assets/portfolio-parkingpro.png",
        alt:   "ParkingPro — Sistema de Gestión de Estacionamientos",
        tag:   "Software Pro · Estacionamientos",
        title: "ParkingPro — Gestión de Estacionamientos",
        desc:  "Software portable y completo para la gestión inteligente de estacionamientos. Control de flujo de vehículos en tiempo real, registro de entradas/salidas, asignación de espacios, emisión de cobros por minuto/hora, notificaciones en vivo y reportes.",
        tech:  ["Electron", "Node.js", "SQLite", "Cobro Automático", "Notificaciones en Vivo"],
        link:  "#contacto"
      },
      {
        id:    "proyectoMrPOS",
        image: "assets/mrpos.png",
        alt:   "MrPOS — Sistema Punto de Venta & Control de Stock Multirrubro",
        tag:   "Sitio Web · Punto de Venta POS",
        title: "MrPOS — Sistema Punto de Venta & Stock",
        desc:  "Sitio web y plataforma para MrPOS, el sistema Punto de Venta (POS) chileno con emisión de boletas electrónicas, control de inventario automatizado y soporte 24/7 para botillerías, panaderías, minimarkets y más.",
        tech:  ["Sitio Web", "Punto de Venta", "Control de Stock", "Boleta Electrónica", "Responsive"],
        link:  "https://mrposchile.surge.sh/"
      },
      {
        id:    "proyectoHostalDiMogalo",
        image: "assets/portfolio-dimogalo.png",
        alt:   "Hostal Di'Mogalo Valparaíso — Sitio Web Turístico",
        tag:   "Sitio Web · Hotelería & Turismo",
        title: "Hostal Di'Mogalo Valparaíso",
        desc:  "Sitio web moderno y elegante para hostal boutique en Valparaíso. Presentación de habitaciones con tarifas, servicios, galería fotográfica, atractivos turísticos cercanos y sistema de reserva directa por WhatsApp.",
        tech:  ["HTML5", "CSS3", "JavaScript", "Reservas WhatsApp", "Responsive"],
        link:  "https://lomejordechile.github.io/di-mogalo-valparaiso/"
      },
      {
        id:    "proyectoFarmaciaPro",
        image: "assets/farmaciapro.png",
        alt:   "FarmaciaPro — Sistema de Gestión para Farmacias y Control de Comisiones",
        tag:   "Software Pro · Gestión Farmacéutica",
        title: "FarmaciaPro — Gestión Farmacéutica & Comisiones",
        desc:  "Software especializado para la administración integral de farmacias y boticas. Destaca por su sistema de comisiones configurables por vendedor por medicamento, control estricto de lotes y fechas de vencimiento, inventario por ubicación física (estanterías/vitrinas), gestión de laboratorios, compras, ventas POS e informes detallados.",
        tech:  ["Gestión Farmacéutica", "Comisiones por Vendedor", "Lotes & Vencimiento", "Ubicación en Estanterías", "Punto de Venta POS"],
        link:  "#contacto"
      },
      {
        id:    "proyectoTallerSoftware",
        image: "assets/portfolio-taller.png",
        alt:   "Sistema de Gestión para Talleres y Servicio Técnico — Producto propio",
        tag:   "Software Pro · Servicio Técnico & Talleres",
        title: "Sistema de Gestión para Talleres & Servicio Técnico",
        desc:  "Software integral para la administración operativa de talleres mecánicos y servicios técnicos. Control de órdenes de trabajo, seguimiento de repuestos, gestión de clientes, presupuestos e historial de vehículos/equipos.",
        tech:  ["Software Desktop", "Control de Stock", "Gestión de Órdenes", "Reportes PDF", "Demo en YouTube"],
        link:  "https://youtu.be/w4FZrehLy_I"
      },
      {
        id:    "proyectoFerreteria",
        image: "assets/portfolio-ferreteria.png",
        alt:   "Sitio web Ferretería La Sierra — proyecto completado",
        tag:   "Sitio Web · Comercio Local",
        title: "Ferretería La Sierra",
        desc:  "Sitio web premium para ferretería histórica en Viña del Mar, con más de 60 años de trayectoria. Catálogo interactivo, integración con WhatsApp y diseño que transmite confianza y calidad desde el primer clic.",
        tech:  ["HTML5", "CSS3", "JavaScript", "Responsive", "Sin backend"],
        link:  ""
      }
    ]
  },

  // ─── NOSOTROS / WHY ───────────────────────────────────────────────────
  why: {
    label:    "¿Por qué RV Soluciones?",
    title:    "Mi compromiso con tu proyecto",
    subtitle: "No soy una agencia genérica. Soy un profesional independiente que trabaja directamente contigo para entender tu negocio y entregarte exactamente lo que necesitas.",
    points: [
      { icon: "🎯", title: "Soluciones a medida",         desc: "Nada de plantillas genéricas. Todo se diseña y desarrolla específicamente para tu negocio y tus objetivos." },
      { icon: "⚡", title: "Entrega rápida y eficiente",  desc: "Proyectos bien planificados que se entregan a tiempo, sin sorpresas ni retrasos innecesarios." },
      { icon: "💎", title: "Transparencia total en precios", desc: "Cotización clara desde el inicio. Sin costos ocultos, sin sorpresas al final del proyecto." },
      { icon: "🛡️", title: "Soporte post-entrega",        desc: "Mi trabajo no termina con la entrega. Te acompaño para que la solución funcione perfectamente." }
    ],
    cards: [
      { value: "100%", label: "Código personalizado" },
      { value: "3",    label: "Servicios especializados" },
      { value: "$0",   label: "Costos ocultos" },
      { value: "✓",   label: "Soporte incluido" }
    ]
  },

  // ─── CONTACTO ─────────────────────────────────────────────────────────
  contact: {
    label:       "Contáctame",
    title:       "Hablemos de tu proyecto",
    subtitle:    "¿Tienes una idea o necesitas una solución tecnológica para tu negocio? Escríbeme y te respondo lo antes posible con una propuesta sin compromiso.",
    whatsapp:    "https://wa.me/56912345678?text=Hola%20RV%20Soluciones%2C%20quiero%20información%20sobre%20sus%20servicios",
    whatsappLabel: "Respuesta rápida disponible",
    email:       "zuprims@gmail.com",
    emailLabel:  "zuprims@gmail.com",
    location:    "Viña del Mar, Valparaíso · Presencial y remoto",
    locationUrl: "https://maps.google.com/?q=Vi%C3%B1a+del+Mar,+Chile",
    formTitle:   "Envíame un mensaje",
    formBtn:     "Enviar mensaje →"
  },

  // ─── FOOTER ───────────────────────────────────────────────────────────
  footer: {
    brand:     "RV Soluciones",
    copyright: "© 2025 RV Soluciones · Todos los derechos reservados"
  },

  // ─── SEO / META ───────────────────────────────────────────────────────
  meta: {
    title:       "RV Soluciones — Tecnología que transforma negocios",
    description: "RV Soluciones — Consultoría tecnológica y desarrollo de software a medida. Sitios web, sistemas de gestión y auditoría TI para empresas y negocios locales."
  }
};
