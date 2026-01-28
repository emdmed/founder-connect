"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Package,
  ShoppingCart,
  ChefHat,
  Sofa,
  Factory,
  Monitor,
  Boxes,
  CheckCircle2,
  Quote,
  MessageCircle,
  Upload,
  Search,
  Handshake,
  Tag,
  Users,
  Recycle,
  Sparkles,
} from "lucide-react";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-[#0066fc] flex items-center justify-center">
              <Recycle className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Traspasa
            </span>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <a
              href="#como-funciona"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Cómo Funciona
            </a>
            <a
              href="#categorias"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Categorías
            </a>
            <a
              href="#testimonios"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Testimonios
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href="#registro"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Vender
            </a>
            <a
              href="#registro"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#0066fc] px-5 text-sm font-semibold text-white transition-all hover:bg-[#0052cc]"
            >
              Busco Equipamiento
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 py-4">
            <div className="flex flex-col gap-4">
              <a href="#como-funciona" className="text-sm font-medium text-white/60">
                Cómo Funciona
              </a>
              <a href="#categorias" className="text-sm font-medium text-white/60">
                Categorías
              </a>
              <a href="#testimonios" className="text-sm font-medium text-white/60">
                Testimonios
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                <a
                  href="#registro"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-4 text-sm font-semibold text-white"
                >
                  Vender
                </a>
                <a
                  href="#registro"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[#0066fc] px-4 text-sm font-semibold text-white"
                >
                  Busco Equipamiento
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#0a0a0a]">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#0066fc]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8478f0]/10 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full bg-[#d7fe03] px-4 sm:px-5 py-2 sm:py-2.5">
            <Sparkles className="h-4 w-4 text-[#0a0a0a]" />
            <span className="text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight">
              +500 EMPRENDEDORES YA EN LISTA DE ESPERA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-[-0.02em] text-white">
            No cierres.
            <span className="block mt-2 text-[#0066fc]">
              Traspasa.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 sm:mt-8 text-base sm:text-xl leading-relaxed text-white/50 max-w-2xl mx-auto">
            El equipamiento que ya no usas es exactamente lo que otro emprendedor necesita para arrancar. Vende rápido, compra barato, sin intermediarios.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
            <a
              href="#registro"
              className="group inline-flex h-12 sm:h-14 w-full items-center justify-center gap-2.5 rounded-full bg-[#0066fc] px-6 sm:px-8 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#0052cc] hover:scale-[1.02] sm:w-auto"
            >
              <Package className="h-4 w-4 sm:h-5 sm:w-5" />
              Quiero Vender
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#registro"
              className="group inline-flex h-12 sm:h-14 w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 sm:px-8 text-sm sm:text-base font-semibold text-[#0a0a0a] transition-all duration-300 hover:bg-white/90 sm:w-auto"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              Busco Equipamiento
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white">$0</p>
              <p className="text-sm text-white/40">Costo de publicar</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[#d7fe03]">-70%</p>
              <p className="text-sm text-white/40">vs. comprar nuevo</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white">&lt;48h</p>
              <p className="text-sm text-white/40">Primera oferta</p>
            </div>
          </div>
        </div>

        {/* Value props cards */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <div className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 transition-all duration-300 hover:bg-white/10 hover:border-[#0066fc]/50">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-[#0066fc] flex items-center justify-center mb-4 sm:mb-5">
              <Tag className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Cerrar no es perder
            </h3>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed">
              Tu horno, tu vitrina, tu maquinaria... todo lo que compraste puede recuperar parte de su valor. Vende a quien lo va a usar, no a intermediarios.
            </p>
          </div>
          <div className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 transition-all duration-300 hover:bg-white/10 hover:border-[#8478f0]/50">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-[#8478f0] flex items-center justify-center mb-4 sm:mb-5">
              <Recycle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Arrancar no tiene que doler
            </h3>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed">
              Equipamiento profesional a fracción de precio. Todo de emprendedores reales que saben lo que es empezar desde cero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const sellerSteps = [
  {
    icon: Upload,
    title: "Publica en minutos",
    description: "Sube fotos, describe el estado y fija tu precio.",
  },
  {
    icon: Users,
    title: "Te conectamos",
    description: "Te conectamos con compradores verificados.",
  },
  {
    icon: Handshake,
    title: "Cierra el trato",
    description: "Sin comisiones ocultas, sin intermediarios.",
  },
];

const buyerSteps = [
  {
    icon: Search,
    title: "Encuentra lo que necesitas",
    description: "Busca por categoría, precio y ubicación.",
  },
  {
    icon: CheckCircle2,
    title: "Vendedores verificados",
    description: "Todo de emprendedores reales.",
  },
  {
    icon: Handshake,
    title: "Coordina y recibe",
    description: "Contacta y cierra el trato directo.",
  },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"vendedor" | "comprador">("vendedor");

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0066fc]/20 px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-[#0066fc] uppercase tracking-wide">Proceso Simple</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            ¿Cómo funciona?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50">
            Tres pasos simples para conectar con otros emprendedores.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="inline-flex rounded-full bg-white/5 border border-white/10 p-1">
            <button
              onClick={() => setActiveTab("vendedor")}
              className={`px-5 sm:px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "vendedor"
                  ? "bg-[#d7fe03] text-[#0a0a0a]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Soy Vendedor
            </button>
            <button
              onClick={() => setActiveTab("comprador")}
              className={`px-5 sm:px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "comprador"
                  ? "bg-[#d7fe03] text-[#0a0a0a]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Soy Comprador
            </button>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {(activeTab === "vendedor" ? sellerSteps : buyerSteps).map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                  <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#0066fc]" />
                </div>
                <div className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d7fe03] text-sm font-bold text-[#0a0a0a]">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white/50 max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const categories = [
  { icon: ChefHat, name: "Cocina y Food Service", count: "120+" },
  { icon: Sofa, name: "Mobiliario Comercial", count: "85+" },
  { icon: Factory, name: "Maquinaria", count: "60+" },
  { icon: Monitor, name: "Equipos de Oficina", count: "95+" },
  { icon: Boxes, name: "Inventario", count: "40+" },
  { icon: Package, name: "Otros", count: "50+" },
];

function Categories() {
  return (
    <section id="categorias" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8478f0]/20 px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-[#8478f0] uppercase tracking-wide">Categorías</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Encuentra lo que necesitas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50">
            Equipamiento para todo tipo de emprendimiento
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:border-[#0066fc] cursor-pointer"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-[#0066fc]/20 flex items-center justify-center mb-3 sm:mb-4 transition-colors group-hover:bg-[#0066fc]">
                <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0066fc] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {category.name}
              </h3>
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066fc]">
                <span>{category.count} activos</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "Vendí todo mi equipamiento de cafetería en menos de una semana. Recuperé parte de mi inversión.",
    name: "María González",
    role: "Ex dueña de Café del Centro",
    type: "vendedor",
  },
  {
    quote: "Arranqué mi food truck con 60% menos de presupuesto gracias a Traspasa.",
    name: "Carlos Mendoza",
    role: "Fundador de Tacos sobre Ruedas",
    type: "comprador",
  },
  {
    quote: "Pivoté de restaurante a dark kitchen. Vendí mesas y compré equipamiento de cocina aquí.",
    name: "Ana Lucía Ramírez",
    role: "Fundadora de CloudKitchen LAT",
    type: "ambos",
  },
];

function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#d7fe03]/20 px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-[#d7fe03] uppercase tracking-wide">Testimonios</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Historias de emprendedores
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50">
            Emprendedores reales que ya están conectando
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 p-5 sm:p-8"
            >
              <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-[#d7fe03] mb-4" />
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-5 sm:mt-6 flex items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-[#0066fc] to-[#8478f0]" />
                <div>
                  <p className="font-semibold text-sm sm:text-base text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-white/40">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase ${
                  testimonial.type === "vendedor"
                    ? "bg-[#0066fc] text-white"
                    : testimonial.type === "comprador"
                    ? "bg-[#8478f0] text-white"
                    : "bg-[#d7fe03] text-[#0a0a0a]"
                }`}>
                  {testimonial.type === "vendedor" ? "Vendedor" : testimonial.type === "comprador" ? "Comprador" : "Ambos"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipo: "",
    categoria: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="registro" className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="rounded-2xl sm:rounded-3xl bg-[#d7fe03] p-8 sm:p-12">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-[#0a0a0a] flex items-center justify-center mb-5">
                <CheckCircle2 className="h-8 w-8 text-[#d7fe03]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a]">
                ¡Estás en la lista!
              </h3>
              <p className="mt-3 text-[#0a0a0a]/70">
                Te avisaremos apenas lancemos.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registro" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d7fe03] px-4 py-1.5 mb-4">
              <span className="text-xs font-bold text-[#0a0a0a] uppercase tracking-wide">Acceso Anticipado</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Únete a la lista de espera
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/50">
              Sé de los primeros. Publica tu primer activo gratis.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8"
          >
            <div className="grid gap-4 sm:gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-white mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#0066fc] focus:bg-white/10 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#0066fc] focus:bg-white/10 focus:ring-0 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  ¿Qué te interesa?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tipo: "vendedor" })}
                    className={`rounded-xl border p-4 text-left transition-all ${
                      formData.tipo === "vendedor"
                        ? "border-[#0066fc] bg-[#0066fc]/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <Package className={`h-5 w-5 sm:h-6 sm:w-6 mb-2 ${formData.tipo === "vendedor" ? "text-[#0066fc]" : "text-white/40"}`} />
                    <p className="font-semibold text-sm sm:text-base text-white">Vender</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tipo: "comprador" })}
                    className={`rounded-xl border p-4 text-left transition-all ${
                      formData.tipo === "comprador"
                        ? "border-[#8478f0] bg-[#8478f0]/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <ShoppingCart className={`h-5 w-5 sm:h-6 sm:w-6 mb-2 ${formData.tipo === "comprador" ? "text-[#8478f0]" : "text-white/40"}`} />
                    <p className="font-semibold text-sm sm:text-base text-white">Comprar</p>
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="categoria" className="block text-sm font-semibold text-white mb-2">
                  Categoría de interés
                </label>
                <select
                  id="categoria"
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#0066fc] focus:bg-white/10 focus:ring-0 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-[#111111]">Selecciona una categoría</option>
                  <option value="cocina" className="bg-[#111111]">Cocina y Food Service</option>
                  <option value="mobiliario" className="bg-[#111111]">Mobiliario Comercial</option>
                  <option value="maquinaria" className="bg-[#111111]">Maquinaria de Producción</option>
                  <option value="oficina" className="bg-[#111111]">Equipos de Oficina</option>
                  <option value="inventario" className="bg-[#111111]">Inventario</option>
                  <option value="otros" className="bg-[#111111]">Otros</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full bg-[#0066fc] px-8 text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#0052cc] hover:scale-[1.01]"
              >
                Unirme a la Lista
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-white/40">
              Sin spam. Solo te contactaremos cuando lancemos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-[#0066fc] px-6 py-12 sm:px-16 sm:py-20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8478f0] rounded-full blur-[150px] opacity-50" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#d7fe03] rounded-full blur-[120px] opacity-30" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              ¿Tienes preguntas?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              Escríbenos por WhatsApp. Estamos para ayudarte.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/56912345678?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20Traspasa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-full bg-[#d7fe03] px-6 sm:px-8 text-sm sm:text-base font-bold text-[#0a0a0a] transition-all hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                Escríbenos por WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d7fe03]" />
                Sin comisiones
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d7fe03]" />
                Verificados
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#d7fe03]" />
                Gratis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#0066fc] flex items-center justify-center">
                <Recycle className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Traspasa</span>
            </div>
            <p className="mt-4 max-w-sm text-sm sm:text-base text-white/40">
              Conectamos emprendedores que cierran con los que arrancan.
            </p>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d7fe03] hover:text-[#d7fe03]/80"
            >
              <MessageCircle className="h-4 w-4" />
              Contáctanos
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">Plataforma</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#como-funciona" className="text-sm text-white/40 hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#categorias" className="text-sm text-white/40 hover:text-white transition-colors">Categorías</a></li>
              <li><a href="#registro" className="text-sm text-white/40 hover:text-white transition-colors">Lista de Espera</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">Comunidad</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#testimonios" className="text-sm text-white/40 hover:text-white transition-colors">Historias</a></li>
              <li><a href="https://wa.me/56912345678" className="text-sm text-white/40 hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs sm:text-sm text-white/30">
            &copy; 2026 Traspasa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs sm:text-sm text-white/30 hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="text-xs sm:text-sm text-white/30 hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <WaitlistForm />
      <CTA />
      <Footer />
    </div>
  );
}
