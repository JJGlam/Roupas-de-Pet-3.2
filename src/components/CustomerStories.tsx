import React from 'react';
import { Star, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const CustomerStories: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#E07A5F] uppercase bg-[#E07A5F]/10 px-3 py-1 rounded-full">
            Depoimentos Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#2C2824] mt-3 tracking-tight">
            Quem Usa, Não Quer Mais Tirar!
          </h2>
          <p className="text-sm sm:text-base text-[#696156] mt-2">
            Veja as fotos e relatos de tutores que encontraram a roupinha perfeita para seus companheiros peludos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-[#EDE4D8] shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Pet Photo & Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#E07A5F]/20 shrink-0 bg-[#FAF7F2]">
                    <img
                      src={t.image}
                      alt={t.petName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-base font-bold font-heading text-[#2C2824]">
                        {t.petName}
                      </h4>
                      <span title="Compra Verificada">
                        <CheckCircle2 className="w-4 h-4 text-[#438E55]" />
                      </span>
                    </div>
                    <p className="text-xs text-[#7A7266]">{t.petBreed}</p>
                    <div className="flex items-center text-[#F59E0B] mt-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#544D44] italic leading-relaxed mb-4">
                  "{t.comment}"
                </p>
              </div>

              {/* Footer item reference */}
              <div className="pt-3 border-t border-[#F3EDE2] flex items-center justify-between text-[11px] text-[#8C8276]">
                <span>Peça: <strong>{t.productName}</strong></span>
                <span className="bg-[#FAF7F2] px-2 py-0.5 rounded-md font-bold text-[#E07A5F]">
                  Tam. {t.sizeBought}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-10 border-t border-[#E8DFC8] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-2xl font-black font-heading text-[#E07A5F]">15.000+</span>
            <p className="text-xs font-semibold text-[#38332E]">Pets Felizes Atendidos</p>
            <p className="text-[11px] text-[#8C8377]">Em todos os estados do Brasil</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl font-black font-heading text-[#E07A5F]">4.9 / 5</span>
            <p className="text-xs font-semibold text-[#38332E]">Nota Média de Satisfação</p>
            <p className="text-[11px] text-[#8C8377]">Mais de 2.000 avaliações</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl font-black font-heading text-[#E07A5F]">30 Dias</span>
            <p className="text-xs font-semibold text-[#38332E]">Troca Gratuita Sem Custos</p>
            <p className="text-[11px] text-[#8C8377]">Se não servir, trocamos</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl font-black font-heading text-[#E07A5F]">100%</span>
            <p className="text-xs font-semibold text-[#38332E]">Hipoalergênico & Macio</p>
            <p className="text-[11px] text-[#8C8377]">Segurança total na pele</p>
          </div>
        </div>

      </div>
    </section>
  );
};
