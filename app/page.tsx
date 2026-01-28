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
} from "lucide-react";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
              <Recycle className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Traspasa
            </span>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <a
              href="#como-funciona"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Cómo Funciona
            </a>
            <a
              href="#categorias"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Categorías
            </a>
            <a
              href="#testimonios"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#registro"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Únete
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href="#registro"
              className="inline-flex h-10 items-center justify-center rounded-full border border-orange-200 bg-orange-50 px-4 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-100"
            >
              Quiero Vender
            </a>
            <a
              href="#registro"
              className="inline-flex h-10 items-center justify-center rounded-full bg-orange-500 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600"
            >
              Busco Equipamiento
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-4">
              <a
                href="#como-funciona"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Cómo Funciona
              </a>
              <a
                href="#categorias"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Categorías
              </a>
              <a
                href="#testimonios"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Testimonios
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                <a
                  href="#registro"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-orange-200 bg-orange-50 px-4 text-sm font-medium text-orange-700"
                >
                  Quiero Vender
                </a>
                <a
                  href="#registro"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-orange-500 px-4 text-sm font-medium text-white"
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
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#f0f1f2]" />

      {/* Gradient orbs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/40 to-amber-200/30 rounded-full blur-[100px]" />
      <div className="hidden sm:block absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-300/40 to-teal-200/30 rounded-full blur-[100px]" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/60 rounded-full blur-[120px]" />
      {/* Simpler gradient for mobile */}
      <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white/80 to-emerald-50/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main hero card */}
        <div className="relative rounded-2xl sm:rounded-[30px] border-4 sm:border-[6px] border-white bg-white/80 backdrop-blur-sm p-5 sm:p-12 lg:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">

          <div className="mx-auto max-w-3xl text-center">
            {/* Badge pill */}
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-[#bfbfbf] bg-white px-3 sm:px-5 py-2 shadow-sm">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#2a2a2a] tracking-tight">
                Próximamente — Lista de espera
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] text-[#2a2a2a]">
              Conectamos emprendedores que cierran con los que
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
                están arrancando
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              La primera plataforma para comprar y vender equipamiento de negocio
              entre emprendedores. Sin intermediarios.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
              <a
                href="#registro"
                className="group inline-flex h-12 sm:h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 sm:px-8 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)] hover:scale-[1.02] sm:w-auto"
              >
                <Package className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sm:hidden">Quiero Vender</span>
                <span className="hidden sm:inline">Quiero Vender mi Equipamiento</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#registro"
                className="group inline-flex h-12 sm:h-14 w-full items-center justify-center gap-2 rounded-full border border-[#bfbfbf] bg-white px-5 sm:px-8 text-sm sm:text-base font-semibold text-[#2a2a2a] transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 sm:w-auto"
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                Busco Equipamiento
              </a>
            </div>

            {/* Value props cards */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2 max-w-2xl mx-auto">
              <div className="group rounded-2xl sm:rounded-[20px] border border-black/[0.08] bg-white p-4 sm:p-6 text-left shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(249,115,22,0.12)] hover:border-orange-200">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Tag className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-[#2a2a2a] tracking-tight">
                    ¿Cerraste o pivoteas?
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  Vende tu equipamiento a quien lo necesita: otro emprendedor comenzando.
                </p>
              </div>
              <div className="group rounded-2xl sm:rounded-[20px] border border-black/[0.08] bg-white p-4 sm:p-6 text-left shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] hover:border-emerald-200">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Recycle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-[#2a2a2a] tracking-tight">
                    ¿Estás arrancando?
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  Ahorra hasta 70% comprando equipamiento de calidad a otros emprendedores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Preview mockup section - simplified on mobile */}
        <div className="mt-8 sm:mt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#f0f1f2] via-transparent to-transparent z-10 pointer-events-none" />

          <div className="relative rounded-2xl sm:rounded-[24px] border-4 sm:border-[5px] border-white bg-white p-2 sm:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.1),0_8px_24px_rgba(0,0,0,0.06)]">
            {/* Fake browser header */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-gray-100 text-[10px] sm:text-xs text-gray-500 font-medium">
                  traspasa.co
                </div>
              </div>
            </div>

            {/* Fake listings grid */}
            <div className="p-3 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-xl sm:rounded-b-[18px]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {[
                  { name: "Horno Industrial", price: "$450.000", cat: "Cocina", color: "orange" },
                  { name: "Vitrina Refrigerada", price: "$380.000", cat: "Food Service", color: "blue" },
                  { name: "Mesas y Sillas", price: "$290.000", cat: "Mobiliario", color: "emerald" },
                  { name: "Máquina Coser", price: "$185.000", cat: "Producción", color: "purple" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-xl sm:rounded-2xl border border-black/[0.06] bg-white p-2 sm:p-3 shadow-sm ${i > 1 ? 'hidden sm:block' : ''}`}
                  >
                    <div className={`aspect-square rounded-lg sm:rounded-xl mb-2 sm:mb-3 ${
                      item.color === "orange" ? "bg-gradient-to-br from-orange-100 to-amber-50" :
                      item.color === "blue" ? "bg-gradient-to-br from-blue-100 to-sky-50" :
                      item.color === "emerald" ? "bg-gradient-to-br from-emerald-100 to-teal-50" :
                      "bg-gradient-to-br from-purple-100 to-violet-50"
                    } flex items-center justify-center`}>
                      <Package className={`h-6 w-6 sm:h-8 sm:w-8 ${
                        item.color === "orange" ? "text-orange-400" :
                        item.color === "blue" ? "text-blue-400" :
                        item.color === "emerald" ? "text-emerald-400" :
                        "text-purple-400"
                      }`} />
                    </div>
                    <p className="font-medium text-xs sm:text-sm text-[#2a2a2a] truncate">{item.name}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">{item.cat}</p>
                    <p className="mt-0.5 sm:mt-1 font-semibold text-xs sm:text-sm text-emerald-600">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
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
    description:
      "Sube fotos de tu equipamiento, describe el estado y fija tu precio. Simple y rápido.",
  },
  {
    icon: Users,
    title: "Te conectamos",
    description:
      "Nosotros te conectamos con emprendedores verificados que buscan exactamente lo que tienes.",
  },
  {
    icon: Handshake,
    title: "Cierra el trato",
    description:
      "Acuerda directamente con el comprador. Sin comisiones ocultas, sin intermediarios.",
  },
];

const buyerSteps = [
  {
    icon: Search,
    title: "Encuentra lo que necesitas",
    description:
      "Busca hornos, vitrinas, mobiliario, maquinaria y más. Filtra por categoría, precio y ubicación.",
  },
  {
    icon: CheckCircle2,
    title: "Emprendedores verificados",
    description:
      "Todo de emprendedores reales, con historial y a precios justos. Sin sorpresas.",
  },
  {
    icon: Handshake,
    title: "Coordina y recibe",
    description:
      "Contacta al vendedor, visita el equipamiento y cierra el trato. Así de simple.",
  },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"vendedor" | "comprador">(
    "vendedor"
  );

  return (
    <section id="como-funciona" className="py-12 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            ¿Cómo funciona?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Conectamos emprendedores de manera simple y directa.
          </p>
        </div>

        <div className="mt-6 sm:mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-gray-200 p-1 bg-gray-50">
            <button
              onClick={() => setActiveTab("vendedor")}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "vendedor"
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Soy Vendedor
            </button>
            <button
              onClick={() => setActiveTab("comprador")}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "comprador"
                  ? "bg-emerald-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Soy Comprador
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {(activeTab === "vendedor" ? sellerSteps : buyerSteps).map(
            (step, index) => (
              <div key={step.title} className="relative">
                {index < 2 && (
                  <div
                    className={`absolute top-10 sm:top-12 left-1/2 hidden h-0.5 w-full lg:block ${
                      activeTab === "vendedor"
                        ? "bg-gradient-to-r from-orange-200 to-transparent"
                        : "bg-gradient-to-r from-emerald-200 to-transparent"
                    }`}
                  />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div
                    className={`flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white border-2 shadow-lg ${
                      activeTab === "vendedor"
                        ? "border-orange-100"
                        : "border-emerald-100"
                    }`}
                  >
                    <step.icon
                      className={`h-7 w-7 sm:h-10 sm:w-10 ${
                        activeTab === "vendedor"
                          ? "text-orange-500"
                          : "text-emerald-500"
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-3 sm:mt-4 inline-flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full text-xs sm:text-sm font-bold text-white ${
                      activeTab === "vendedor" ? "bg-orange-500" : "bg-emerald-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="mt-3 sm:mt-4 text-base sm:text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

const categories = [
  {
    icon: ChefHat,
    name: "Cocina y Food Service",
    description: "Hornos, freidoras, vitrinas, refrigeradores",
    count: "120+ activos",
  },
  {
    icon: Sofa,
    name: "Mobiliario Comercial",
    description: "Mesas, sillas, estanterías, mostradores",
    count: "85+ activos",
  },
  {
    icon: Factory,
    name: "Maquinaria de Producción",
    description: "Máquinas de coser, impresoras, herramientas",
    count: "60+ activos",
  },
  {
    icon: Monitor,
    name: "Equipos de Oficina",
    description: "Computadores, impresoras, escritorios",
    count: "95+ activos",
  },
  {
    icon: Boxes,
    name: "Inventario y Materias Primas",
    description: "Stock, insumos, materiales",
    count: "40+ activos",
  },
  {
    icon: Package,
    name: "Otros Equipamientos",
    description: "Todo lo que tu negocio necesita",
    count: "50+ activos",
  },
];

function Categories() {
  return (
    <section id="categorias" className="py-12 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Categorías Populares
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Encuentra lo que necesitas para tu emprendimiento
          </p>
        </div>

        <div className="mt-8 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 transition-all hover:border-orange-200 hover:shadow-lg cursor-pointer"
            >
              <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 text-orange-500 transition-colors group-hover:from-orange-100 group-hover:to-amber-100">
                <category.icon className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 hidden sm:block">
                {category.description}
              </p>
              <div className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-orange-600">
                <span>{category.count}</span>
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
    quote:
      "Cerré mi cafetería después de 3 años y en menos de una semana vendí todo mi equipamiento a otro emprendedor que estaba arrancando. Recuperé parte de mi inversión y sé que mis máquinas están en buenas manos.",
    name: "María González",
    role: "Ex dueña de Café del Centro",
    type: "vendedor",
  },
  {
    quote:
      "Arranqué mi food truck con un 60% menos de lo presupuestado gracias a Traspasa. Compré una plancha industrial y un refrigerador que estaban casi nuevos. El vendedor hasta me explicó cómo usarlos.",
    name: "Carlos Mendoza",
    role: "Fundador de Tacos sobre Ruedas",
    type: "comprador",
  },
  {
    quote:
      "Pivoté de restaurante a dark kitchen y pude vender las mesas y sillas que ya no necesitaba. A la vez, compré equipamiento de cocina de otro emprendedor. Todo en la misma plataforma.",
    name: "Ana Lucía Ramírez",
    role: "Fundadora de CloudKitchen LAT",
    type: "ambos",
  },
];

function Testimonials() {
  return (
    <section id="testimonios" className="py-12 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Historias de Emprendedores
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Emprendedores reales que ya están conectando
          </p>
        </div>

        <div className="mt-8 sm:mt-16 grid gap-4 sm:gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-5 sm:p-8"
            >
              <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-orange-200 mb-3 sm:mb-4" />
              <p className="text-sm sm:text-base text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-orange-200 to-amber-200 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <span
                  className={`inline-flex rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium ${
                    testimonial.type === "vendedor"
                      ? "bg-orange-100 text-orange-700"
                      : testimonial.type === "comprador"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {testimonial.type === "vendedor"
                    ? "Vendedor"
                    : testimonial.type === "comprador"
                    ? "Comprador"
                    : "Ambos"}
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
    // Here you would send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="registro" className="py-12 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="rounded-xl sm:rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
              <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-3 sm:mb-4">
                <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                ¡Estás en la lista!
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Te avisaremos apenas lancemos. Síguenos en redes para estar al día.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registro" className="py-12 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Únete a la Lista de Espera
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Sé de los primeros. Publica tu primer activo gratis.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-sm"
          >
            <div className="grid gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full rounded-lg sm:rounded-xl border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg sm:rounded-xl border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  ¿Qué te interesa?
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tipo: "vendedor" })}
                    className={`rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 text-left transition-all ${
                      formData.tipo === "vendedor"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-200"
                    }`}
                  >
                    <Package
                      className={`h-5 w-5 sm:h-6 sm:w-6 mb-1.5 sm:mb-2 ${
                        formData.tipo === "vendedor"
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                    <p className="font-medium text-sm sm:text-base text-gray-900">Vender</p>
                    <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                      Tengo equipamiento
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, tipo: "comprador" })
                    }
                    className={`rounded-lg sm:rounded-xl border-2 p-3 sm:p-4 text-left transition-all ${
                      formData.tipo === "comprador"
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 hover:border-emerald-200"
                    }`}
                  >
                    <ShoppingCart
                      className={`h-5 w-5 sm:h-6 sm:w-6 mb-1.5 sm:mb-2 ${
                        formData.tipo === "comprador"
                          ? "text-emerald-500"
                          : "text-gray-400"
                      }`}
                    />
                    <p className="font-medium text-sm sm:text-base text-gray-900">Comprar</p>
                    <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                      Necesito equipamiento
                    </p>
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="categoria"
                  className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                >
                  Categoría de interés
                </label>
                <select
                  id="categoria"
                  value={formData.categoria}
                  onChange={(e) =>
                    setFormData({ ...formData, categoria: e.target.value })
                  }
                  className="w-full rounded-lg sm:rounded-xl border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="cocina">Cocina y Food Service</option>
                  <option value="mobiliario">Mobiliario Comercial</option>
                  <option value="maquinaria">Maquinaria de Producción</option>
                  <option value="oficina">Equipos de Oficina</option>
                  <option value="inventario">Inventario y Materias Primas</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 sm:px-8 text-sm sm:text-base font-semibold text-white transition-all hover:from-orange-600 hover:to-amber-600 hover:scale-[1.02] shadow-lg shadow-orange-500/25"
              >
                Unirme a la Lista
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
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
    <section className="py-12 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 px-5 py-10 sm:px-16 sm:py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

          <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-20" />
          <div className="hidden sm:block absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              ¿Tienes preguntas?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-300">
              Escríbenos por WhatsApp. Estamos para ayudarte.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/56912345678?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20Traspasa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 sm:h-14 w-full items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#25D366] px-6 sm:px-8 text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#22c55e] hover:scale-105 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                Escríbenos por WhatsApp
              </a>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                Sin comisiones
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                Verificados
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
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
    <footer className="border-t border-gray-200 bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <Recycle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-900">
                Traspasa
              </span>
            </div>
            <p className="mt-3 sm:mt-4 max-w-sm text-sm sm:text-base text-gray-600">
              Conectamos emprendedores que cierran con los que arrancan.
            </p>
            <a
              href="https://wa.me/56912345678?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20Traspasa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              Contáctanos por WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Plataforma</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#como-funciona"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a
                  href="#categorias"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Categorías
                </a>
              </li>
              <li>
                <a
                  href="#registro"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Lista de Espera
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Comunidad</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#testimonios"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Historias
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-gray-200 pt-6 sm:pt-8 sm:flex-row">
          <p className="text-xs sm:text-sm text-gray-600">
            &copy; 2026 Traspasa. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">
              Privacidad
            </a>
            <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
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
