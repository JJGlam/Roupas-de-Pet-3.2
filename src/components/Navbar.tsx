import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, Heart, Menu, X, Ruler, HelpCircle } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenSizeCalculator: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onOpenCart,
  onOpenSizeCalculator,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F0EAE1] shadow-xs">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#E07A5F] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Frete Grátis para todo Brasil a partir de R$ 149</span>
        </span>
        <span className="hidden md:inline">•</span>
        <span className="hidden md:inline bg-white/20 px-2 py-0.5 rounded-full text-xs font-semibold tracking-wide">
          Cupom: BEMVINDO10 (-10% OFF)
        </span>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0" id="brand-logo-link">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#E07A5F] to-[#F4A261] flex items-center justify-center text-white shadow-sm shadow-[#E07A5F]/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl select-none">🐾</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading tracking-tight text-[#2D2A26] flex items-center gap-1">
                Pet<span className="text-[#E07A5F]">Aconchego</span>
              </span>
              <span className="text-[11px] font-medium text-[#8C827A] -mt-1 tracking-wider uppercase">
                Moda & Conforto Pet
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A453F]">
            <a href="#catalogo" className="hover:text-[#E07A5F] transition-colors">
              Coleções
            </a>
            <a href="#diferenciais" className="hover:text-[#E07A5F] transition-colors">
              Por que Nós?
            </a>
            <button
              onClick={onOpenSizeCalculator}
              className="hover:text-[#E07A5F] transition-colors flex items-center gap-1.5 cursor-pointer"
              id="nav-size-guide-btn"
            >
              <Ruler className="w-4 h-4 text-[#E07A5F]" />
              <span>Tabela de Medidas</span>
            </button>
            <a href="#guia-clima" className="hover:text-[#E07A5F] transition-colors">
              Guia do Clima
            </a>
            <a href="#depoimentos" className="hover:text-[#E07A5F] transition-colors">
              Pets Felizes
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Box */}
            <div className="relative hidden md:block w-48 lg:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9188]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar suéter, capa, raça..."
                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-[#F5EFE6]/60 border border-[#E8DFC8] rounded-full focus:outline-none focus:border-[#E07A5F] focus:bg-white transition-all text-[#2D2A26] placeholder-[#9A9188]"
                id="search-input-header"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9A9188] hover:text-[#2D2A26]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="p-2 rounded-full hover:bg-[#F5EFE6] text-[#4A453F] md:hidden"
              aria-label="Abrir busca"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Size Guide Button (Pill) */}
            <button
              onClick={onOpenSizeCalculator}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#87A88D]/15 text-[#3D6645] border border-[#87A88D]/30 hover:bg-[#87A88D]/25 transition-colors cursor-pointer"
              id="quick-size-calc-btn"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Qual o tamanho do meu pet?</span>
            </button>

            {/* Cart Button with Count Badge */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#FAF4ED] hover:bg-[#F3E9DD] border border-[#E8DFC8] text-[#2D2A26] px-3.5 py-2 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              id="open-cart-button"
              aria-label="Ver sacola de compras"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#E07A5F]" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-[#E07A5F] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-bounce">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold text-xs">Sacola</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A453F] rounded-lg hover:bg-[#F5EFE6] lg:hidden cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {showSearchInput && (
          <div className="py-3 px-1 md:hidden border-t border-[#F0EAE1]">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9188]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar por suéter, capa, algodão..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#E8DFC8] rounded-xl focus:outline-none focus:border-[#E07A5F]"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-t border-[#F0EAE1] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#2D2A26] hover:text-[#E07A5F]"
          >
            Coleções de Roupas
          </a>
          <a
            href="#diferenciais"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#2D2A26] hover:text-[#E07A5F]"
          >
            Diferenciais de Conforto
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSizeCalculator();
            }}
            className="w-full text-left py-2 text-base font-medium text-[#E07A5F] flex items-center gap-2"
          >
            <Ruler className="w-4 h-4" />
            <span>Tabela & Calculadora de Medidas</span>
          </button>
          <a
            href="#guia-clima"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#2D2A26] hover:text-[#E07A5F]"
          >
            Guia do Clima para Pets
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#2D2A26] hover:text-[#E07A5F]"
          >
            Fotos de Clientes Felizes
          </a>
          <div className="pt-2 border-t border-[#F0EAE1]">
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20as%20roupinhas%20de%20pet."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#25D366] text-white rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-sm shadow-xs"
            >
              <span>Falar no WhatsApp com Atendente</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
