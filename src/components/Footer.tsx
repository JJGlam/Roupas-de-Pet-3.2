import React from 'react';
import { Heart, Instagram, MessageCircle, Mail, Phone, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface FooterProps {
  onOpenSizeCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSizeCalculator }) => {
  return (
    <footer className="bg-[#26221E] text-[#D4CDC5] pt-16 pb-12 border-t border-[#3B352E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-[#3B352E]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#E07A5F]/20 text-[#E07A5F] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Frete Grátis</h4>
              <p className="text-xs text-[#A89E94]">Em compras a partir de R$ 149 para todo o Brasil.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#87A88D]/20 text-[#87A88D] flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">1ª Troca sem Custos</h4>
              <p className="text-xs text-[#A89E94]">Não serviu? Nós trocamos sem dor de cabeça em 30 dias.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#F4A261]/20 text-[#F4A261] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Modelagem Segura</h4>
              <p className="text-xs text-[#A89E94]">Testada por veterinários para conforto absoluto.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-[#E07A5F] flex items-center justify-center text-white text-xl">
                🐾
              </div>
              <span className="text-2xl font-bold font-heading text-white">
                Pet<span className="text-[#E07A5F]">Aconchego</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A89E94] leading-relaxed">
              Nascemos do amor incondicional pelos nossos companheiros de quatro patas. Criamos roupas que unem alta alfaiataria pet, tecidos respiráveis e carinho em cada detalhe.
            </p>
            <div className="flex items-center gap-3 text-white">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E07A5F] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Coleções & Roupas
            </h4>
            <ul className="space-y-2 text-xs text-[#A89E94]">
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Suéteres de Tricô Trançado
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Capas Impermeáveis de Chuva
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Moletons Urban Pet com Capuz
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Pijamas Térmicos 4 Patinhas
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Bandanas Artesanais Dupla Face
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Ajuda ao Tutor
            </h4>
            <ul className="space-y-2 text-xs text-[#A89E94]">
              <li>
                <button
                  onClick={onOpenSizeCalculator}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Tabela de Medidas
                </button>
              </li>
              <li>
                <a href="#guia-clima" className="hover:text-white transition-colors">
                  Guia do Clima Pet
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Como Cuidar das Peças
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Fale com a Gente
            </h4>
            <p className="text-xs text-[#A89E94] leading-relaxed">
              Dúvidas sobre o tamanho do seu pet? Nossa equipe de suporte está pronta para ajudar!
            </p>
            <div className="space-y-2 text-xs text-[#A89E94]">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E07A5F]" />
                <span>ola@petaconchego.com.br</span>
              </div>
              <p className="text-[11px] text-[#7A7266] pt-1">
                Segunda a Sexta: 09h às 18h • Sábado: 09h às 14h
              </p>
            </div>
          </div>

        </div>

        {/* Payment and Bottom Note */}
        <div className="pt-8 border-t border-[#3B352E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8276]">
          <div className="flex items-center gap-2 flex-wrap">
            <span>Formas de pagamento:</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white">PIX</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white">Cartão até 6x</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white">Boleto</span>
          </div>

          <p className="flex items-center gap-1 text-center sm:text-right">
            Feito com <Heart className="w-3.5 h-3.5 text-[#E07A5F] fill-current" /> para todos os cães e gatinhos do Brasil. © {new Date().getFullYear()} PetAconchego.
          </p>
        </div>

      </div>
    </footer>
  );
};
