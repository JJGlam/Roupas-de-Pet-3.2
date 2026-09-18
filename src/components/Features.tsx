import React from 'react';
import { Heart, Sparkles, Scissors, ShieldCheck, RefreshCw, Feather } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Feather,
      color: 'bg-[#E07A5F]/15 text-[#D96B43]',
      title: 'Modelagem Anatômica Real',
      desc: 'Corte tridimensional com cavas largas nas patinhas dianteiras e traseiras. Seu pet corre, pula e se estica sem nenhuma costura repuxando.',
    },
    {
      icon: Sparkles,
      color: 'bg-[#87A88D]/20 text-[#3D6645]',
      title: 'Fios & Tecidos Hipoalergênicos',
      desc: 'Lãs acrílicas anti-alérgicas e 100% algodão suedine puro. Sem fiapos soltos, sem nós na pelagem longa e com toque suave para peles atópicas.',
    },
    {
      icon: Scissors,
      color: 'bg-[#F4A261]/20 text-[#B86B28]',
      title: 'Fácil de Vestir sem Estresse',
      desc: 'Nada de puxar a cabeça do bichinho com força. Peças com golas ultrarresilientes, botões de pressão macios e velcros que não agarram no pelo.',
    },
    {
      icon: RefreshCw,
      color: 'bg-[#6B9080]/15 text-[#2C5E4E]',
      title: 'Prático & Lavável na Máquina',
      desc: 'Todas as roupinhas mantêm a maciez e as cores vivas lavagem após lavagem. Não encolhem e secam rapidinho para o próximo passeio.',
    },
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-20 bg-white border-y border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#E07A5F] uppercase bg-[#E07A5F]/10 px-3 py-1 rounded-full">
            Carinho em Cada Ponto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#2C2824] mt-3 tracking-tight">
            Por que os pets (e seus tutores) amam a PetAconchego?
          </h2>
          <p className="text-[#696156] mt-3 text-base">
            Sabemos que muitos bichinhos não se adaptam a roupinhas duras e desconfortáveis. Por isso, repensamos tudo do zero com auxílio de veterinários e alfaiataria especializada.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EFE7DC] hover:border-[#E07A5F]/40 hover:shadow-md transition-all duration-200 flex flex-col items-start group"
              >
                <div className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-[#2C2824] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[#61594F] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Small reassurance banner */}
        <div className="mt-12 bg-[#F3EDE2] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E5DACD]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E07A5F] text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#2C2824]">
                Garantia de Adaptação PetAconchego
              </h4>
              <p className="text-xs sm:text-sm text-[#61594F]">
                Não serviu ou seu pet não se adaptou com o modelo? A 1ª troca é 100% gratuita por nossa conta em até 30 dias!
              </p>
            </div>
          </div>
          <a
            href="#catalogo"
            className="shrink-0 bg-white hover:bg-[#FAF6EE] text-[#2C2824] border border-[#D9CEBF] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Escolher Roupinha Sem Medo
          </a>
        </div>

      </div>
    </section>
  );
};
