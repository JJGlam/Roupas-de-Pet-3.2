import React from 'react';
import { ArrowRight, Ruler, Heart, Sparkles, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import heroImage from '../assets/images/hero_happy_dog_sweater_1789768819796.jpg';

interface HeroProps {
  onOpenSizeCalculator: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSizeCalculator, onExploreCatalog }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FAF7F2] pt-8 pb-16 md:py-20">
      {/* Subtle organic background blur spheres */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-0 right-10 w-80 h-80 rounded-full bg-[#F4A261]/20 blur-3xl" />
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#87A88D]/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Friendly Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E07A5F]/10 border border-[#E07A5F]/25 text-[#D96B43] text-xs sm:text-sm font-semibold tracking-wide">
              <span className="text-base">🧶</span>
              <span>Coleção Outono/Inverno Aconchegante</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
              <span className="text-xs font-normal text-[#8A5A4A]">Tamanhos PP ao GG</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#2C2824] leading-[1.12] tracking-tight">
              O estilo que seu pet merece com o{' '}
              <span className="relative inline-block text-[#E07A5F]">
                abraço quentinho
                <svg
                  className="absolute -bottom-1 left-0 w-full text-[#F4A261]/40 h-2.5"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M0 6C50 1 150 1 200 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              que ele ama.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5E574E] leading-relaxed max-w-2xl">
              Roupas desenvolvidas com <strong>modelagem anatômica</strong> que respeita o corpo dos bichinhos:
              sem sufocar o pescoço, sem pinçar os pelos e com tecidos 100% hipoalergênicos para cães e gatos brincarem livres e felizes.
            </p>

            {/* Differentiator check pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-[#403B35] bg-white/80 border border-[#EBE3D7] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#438E55] shrink-0" />
                <span>Zero atrito ou coceira</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#403B35] bg-white/80 border border-[#EBE3D7] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#438E55] shrink-0" />
                <span>Fácil de vestir e tirar</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#403B35] bg-white/80 border border-[#EBE3D7] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#438E55] shrink-0" />
                <span>Lavável na máquina</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full sm:w-auto">
              <button
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2.5 bg-[#E07A5F] hover:bg-[#D46B50] text-white text-base font-semibold px-7 py-3.5 rounded-full shadow-md shadow-[#E07A5F]/25 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                id="hero-explore-catalog-btn"
              >
                <span>Ver Roupas da Estação</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSizeCalculator}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#3D3730] border-2 border-[#E5DACD] text-base font-semibold px-6 py-3.5 rounded-full hover:border-[#D9C8B5] transition-all duration-200 cursor-pointer shadow-xs active:scale-98"
                id="hero-size-guide-btn"
              >
                <Ruler className="w-4 h-4 text-[#E07A5F]" />
                <span>Descobrir Tamanho do Meu Pet</span>
              </button>
            </div>

            {/* Social proof bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#EDE4D8] w-full">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Pet cliente 1"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Pet cliente 2"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Pet cliente 3"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Pet cliente 4"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs sm:text-sm text-[#4F4941]">
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-bold text-[#2C2824] ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-[#7A7268]">
                  Mais de <strong className="text-[#2C2824]">15.000 bichinhos</strong> vestidos com muito amor!
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Interactive Badges */}
          <div className="lg:col-span-5 relative">
            {/* Main Picture Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E07A5F]/20 via-[#F4A261]/20 to-[#87A88D]/20 rounded-3xl transform rotate-2 scale-105" />

              {/* Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={heroImage}
                  alt="Cachorro Golden Retriever feliz vestindo suéter amarelo trançado PetAconchego"
                  className="w-full h-auto object-cover aspect-4/3 sm:aspect-16/11 transition-transform duration-500 hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Label */}
                <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-[#F0EAE1] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#D96B43] uppercase block">
                      Destaque da Coleção
                    </span>
                    <p className="text-sm font-bold text-[#2C2824]">
                      Suéter Tricô Trançado Mostarda
                    </p>
                  </div>
                  <span className="text-sm font-bold text-[#2C2824] bg-[#FAF5EE] px-3 py-1.5 rounded-full border border-[#EDE2D3]">
                    R$ 89,90
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Anti-allergy soft */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg border border-[#EDE4D8] flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-8 h-8 rounded-full bg-[#87A88D]/20 flex items-center justify-center text-[#3D6645]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#2C2824]">Fios Hipoalergênicos</p>
                  <p className="text-[10px] text-[#787066]">Zero nós nos pelos</p>
                </div>
              </div>

              {/* Floating Badge 2: Bento's Review */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#EDE4D8] max-w-[220px]">
                <div className="flex items-center gap-1 text-[#F59E0B] text-xs mb-0.5">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <p className="text-[11px] font-medium text-[#2C2824] italic leading-tight">
                  "O Bento não quer mais tirar o suéter nem na hora de dormir!"
                </p>
                <span className="text-[10px] text-[#8C8377] block mt-1">
                  — Camila, tutora do Bento
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
