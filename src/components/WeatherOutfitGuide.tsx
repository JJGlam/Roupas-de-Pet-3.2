import React, { useState } from 'react';
import { CloudRain, Sun, Snowflake, Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import corgiRaincoat from '../assets/images/corgi_yellow_raincoat_1789768861424.jpg';
import heroDogSweater from '../assets/images/hero_happy_dog_sweater_1789768819796.jpg';
import bulldogHoodie from '../assets/images/french_bulldog_hoodie_1789768833997.jpg';
import catCozyVest from '../assets/images/cat_cozy_vest_1789768848021.jpg';

export const WeatherOutfitGuide: React.FC = () => {
  const [activeWeather, setActiveWeather] = useState<'frio' | 'chuva' | 'calor' | 'casa'>('frio');

  const guides = {
    frio: {
      title: 'Frio & Baixas Temperaturas (Abaixo de 18°C)',
      subtitle: 'Quando os bichinhos tremem ou procuram cantinhos ensolarados pela casa.',
      image: heroDogSweater,
      petName: 'Bento no Frio com Suéter Trançado',
      highlights: [
        'Cães de pelo curto (Dachshund, Pinscher, Buldogue, Boxer) perdem calor muito rápido.',
        'Pets idosos ou com artrose sentem alívio imediato nas articulações aquecidas.',
        'Tecidos de tricô acrílico e fleece térmico seguram o calor sem sufocar a pele.',
      ],
      recommendedItem: 'Suéter Tricô Trançado ou Moletom com Capuz',
      tip: 'Se o pet estiver inquieto tentando tirar a roupa, solte a gola. Nossos modelos possuem elasticidade 360° para total liberdade!',
    },
    chuva: {
      title: 'Dias Chuvosos & Garoa Úmida',
      subtitle: 'Passeios essenciais sem voltar com a barriga encharcada e lama nos pelos.',
      image: corgiRaincoat,
      petName: 'Corgi protegido da chuva com capa amarela',
      highlights: [
        'Evita o famoso "cheiro de cachorro molhado" e a proliferação de fungos na pele.',
        'Protege o peitoral e o abdômen dos respingos sujos da calçada e asfalto.',
        'Passador seguro na nuca para encaixar a guia diretamente na coleira ou peitoral.',
      ],
      recommendedItem: 'Capa Impermeável Pingo Livre',
      tip: 'Ao voltar do passeio, basta secar apenas as patinhas com uma toalha — o resto do corpo estará 100% seco!',
    },
    calor: {
      title: 'Sol da Manhã & Proteção UV',
      subtitle: 'Estilo fresco para passeios em dias quentes sem reter calor excessivo.',
      image: bulldogHoodie,
      petName: 'Paçoca passeando em dia ameno',
      highlights: [
        'Animais com pele rosada ou pelos brancos sofrem com queimaduras solares e dermatites.',
        'Algodão 100% respirável em tecidos finos filtra os raios solares diretos.',
        'Evite roupas fechadas no calor forte; priorize bandanas e camisetinhas sem mangas.',
      ],
      recommendedItem: 'Bandanas Artesanais & Regatinhas Leves',
      tip: 'Umedeça levemente a bandana com água gelada antes de sair no parque nos dias de calor!',
    },
    casa: {
      title: 'Noites Frescas & Ar Condicionado',
      subtitle: 'Para pets que amam dormir enroladinhos no edredom da família.',
      image: catCozyVest,
      petName: 'Gatinha Mia com colete nuvem para dormir',
      highlights: [
        'Gatinhos e cãezinhos pequenos sentem frio repentino nas noites de inverno.',
        'Pijamas de suedine mantêm a temperatura corporal estável durante a madrugada toda.',
        'Acalma pets ansiosos proporcionando uma sensação gostosa de abraço contínuo.',
      ],
      recommendedItem: 'Colete Nuvem Soft ou Pijama 4 Patinhas',
      tip: 'Tecidos de suedine pura não acumulam pelos soltos e são suaves como carinho de mãe.',
    },
  };

  const current = guides[activeWeather];

  return (
    <section id="guia-clima" className="py-16 md:py-24 bg-white border-b border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#E07A5F] uppercase bg-[#E07A5F]/10 px-3 py-1 rounded-full">
            Dicas de Especialistas Pet
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#2C2824] mt-3 tracking-tight">
            Como Vestir seu Pet com Respeito e Conforto?
          </h2>
          <p className="text-sm sm:text-base text-[#696156] mt-2">
            Roupa de pet nunca deve ser um incômodo. Veja o que é ideal para cada momento e clima do ano.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-10">
          <button
            onClick={() => setActiveWeather('frio')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeWeather === 'frio'
                ? 'bg-[#E07A5F] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#595248] border border-[#EDE4D8] hover:bg-[#F3EDE2]'
            }`}
          >
            <Snowflake className="w-4 h-4" />
            <span>Frio & Inverno</span>
          </button>

          <button
            onClick={() => setActiveWeather('chuva')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeWeather === 'chuva'
                ? 'bg-[#E07A5F] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#595248] border border-[#EDE4D8] hover:bg-[#F3EDE2]'
            }`}
          >
            <CloudRain className="w-4 h-4" />
            <span>Chuva & Garoa</span>
          </button>

          <button
            onClick={() => setActiveWeather('calor')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeWeather === 'calor'
                ? 'bg-[#E07A5F] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#595248] border border-[#EDE4D8] hover:bg-[#F3EDE2]'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Passeio no Parque</span>
          </button>

          <button
            onClick={() => setActiveWeather('casa')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeWeather === 'casa'
                ? 'bg-[#E07A5F] text-white shadow-md'
                : 'bg-[#FAF7F2] text-[#595248] border border-[#EDE4D8] hover:bg-[#F3EDE2]'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Sono & Em Casa</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#EDE4D8] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-72 sm:h-80 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-white text-center text-xs font-semibold text-[#5A5247]">
                  🐾 {current.petName}
                </div>
              </div>
            </div>

            {/* Right Guide Info */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#2C2824]">
                  {current.title}
                </h3>
                <p className="text-sm text-[#736B61] mt-1">
                  {current.subtitle}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                {current.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#438E55] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#474138] leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Recommendation Callout */}
              <div className="bg-white p-4 rounded-2xl border border-[#EDE4D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-[#D96B43] uppercase tracking-wider block">
                    Peça Recomendada
                  </span>
                  <span className="text-sm font-bold text-[#2C2824]">
                    {current.recommendedItem}
                  </span>
                </div>
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#2C2824] hover:bg-[#403B35] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shrink-0"
                >
                  <span>Ver Modelos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Helpful Tip */}
              <p className="text-xs text-[#7A7266] italic bg-[#F2ECE1] p-3 rounded-xl border border-[#E5DACD]">
                💡 <strong>Dica da PetAconchego:</strong> {current.tip}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
