import React, { useState } from 'react';
import { X, Ruler, Sparkles, Check, Info, ArrowRight } from 'lucide-react';
import { BREED_SIZE_GUIDE } from '../data/products';
import { PetSize } from '../types';

interface SizeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSizeForFilter?: (size: PetSize) => void;
}

export const SizeCalculatorModal: React.FC<SizeCalculatorModalProps> = ({
  isOpen,
  onClose,
  onSelectSizeForFilter,
}) => {
  const [activeTab, setActiveTab] = useState<'calc' | 'tabela' | 'como-medir'>('calc');
  const [petWeight, setPetWeight] = useState<number>(6);
  const [petChest, setPetChest] = useState<number>(44);
  const [selectedBreedIndex, setSelectedBreedIndex] = useState<number>(2); // Default Shih Tzu / M

  if (!isOpen) return null;

  // Calculate size based on weight / chest
  const getCalculatedSize = (): { size: PetSize; reason: string } => {
    if (petWeight <= 2.5) {
      return {
        size: 'PP',
        reason: 'Ideal para filhotinhos e raças mini (até 2,5kg). O corpinho precisa de leveza máxima.',
      };
    } else if (petWeight <= 5.0) {
      return {
        size: 'P',
        reason: 'Ideal para cães pequenos e a grande maioria dos gatinhos adultos (2,5kg a 5kg).',
      };
    } else if (petWeight <= 8.5) {
      return {
        size: 'M',
        reason: 'Perfeito para Shih Tzu, Lhasa Apso e cães de 5kg a 8,5kg. Excelente equilíbrio no tórax.',
      };
    } else if (petWeight <= 16.0) {
      return {
        size: 'G',
        reason: 'Recomendado para Buldogue Francês, Pug grande, Beagle e pets compactos de peito largo.',
      };
    } else {
      return {
        size: 'GG',
        reason: 'Para cães de porte grande (Golden, Labrador, Boxer, Border Collie) com liberdade total de corrida.',
      };
    }
  };

  const calculated = getCalculatedSize();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-[#EDE4D8] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-[#EDE4D8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E07A5F] text-white flex items-center justify-center shadow-xs">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-[#2C2824]">
                Calculadora do Tamanho Ideal
              </h3>
              <p className="text-xs text-[#7A7266]">
                Acerte no tamanho de primeira e evite trocas desnecessárias!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#EDE4D8] text-[#5A5247] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#EDE4D8] bg-[#FAF7F2] px-6 gap-2">
          <button
            onClick={() => setActiveTab('calc')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'calc'
                ? 'border-[#E07A5F] text-[#E07A5F]'
                : 'border-transparent text-[#786F64] hover:text-[#2C2824]'
            }`}
          >
            ⚡ Calculadora Inteligente
          </button>
          <button
            onClick={() => setActiveTab('tabela')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'tabela'
                ? 'border-[#E07A5F] text-[#E07A5F]'
                : 'border-transparent text-[#786F64] hover:text-[#2C2824]'
            }`}
          >
            📋 Tabela por Raças
          </button>
          <button
            onClick={() => setActiveTab('como-medir')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'como-medir'
                ? 'border-[#E07A5F] text-[#E07A5F]'
                : 'border-transparent text-[#786F64] hover:text-[#2C2824]'
            }`}
          >
            📏 Como Medir em Casa
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {activeTab === 'calc' && (
            <div className="space-y-6">
              
              {/* Sliders Input */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE4D8] space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-[#2C2824] uppercase tracking-wide">
                      Peso aproximado do pet
                    </label>
                    <span className="text-base font-bold font-heading text-[#E07A5F] bg-white px-3 py-0.5 rounded-lg border border-[#EDE4D8]">
                      {petWeight.toFixed(1)} kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="0.5"
                    value={petWeight}
                    onChange={(e) => setPetWeight(parseFloat(e.target.value))}
                    className="w-full accent-[#E07A5F] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8C8377] mt-1">
                    <span>1 kg (Mini)</span>
                    <span>10 kg (Médio)</span>
                    <span>25 kg (Grande)</span>
                    <span>40 kg (Gigante)</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-[#2C2824] uppercase tracking-wide">
                      Circunferência do Tórax / Peito (opcional)
                    </label>
                    <span className="text-base font-bold font-heading text-[#2C2824] bg-white px-3 py-0.5 rounded-lg border border-[#EDE4D8]">
                      {petChest} cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="90"
                    step="1"
                    value={petChest}
                    onChange={(e) => setPetChest(parseInt(e.target.value))}
                    className="w-full accent-[#2C2824] cursor-pointer"
                  />
                </div>
              </div>

              {/* Instant Recommendation Card */}
              <div className="bg-gradient-to-br from-[#FFF8F0] to-[#FAF3E8] p-6 rounded-3xl border-2 border-[#E07A5F]/30 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#D96B43] uppercase">
                    Tamanho Recomendado
                  </span>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <span className="text-5xl font-black font-heading text-[#E07A5F]">
                      {calculated.size}
                    </span>
                    <span className="text-xs text-[#524B43] max-w-xs block leading-tight">
                      {calculated.reason}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#3D6645] bg-[#87A88D]/20 px-3 py-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                    <span>99% de aprovação</span>
                  </span>
                  <button
                    onClick={() => {
                      if (onSelectSizeForFilter) onSelectSizeForFilter(calculated.size);
                      onClose();
                    }}
                    className="bg-[#2C2824] hover:bg-[#403B35] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Ver Roupas Tamanho {calculated.size}
                  </button>
                </div>
              </div>

              {/* Pro tip */}
              <div className="flex items-start gap-3 p-4 bg-[#F2F7F4] rounded-2xl border border-[#D5E5DA] text-xs text-[#305739]">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#3D6645]" />
                <p>
                  <strong>Dica de ouro para pelos longos:</strong> Se o seu pet tiver tosa cheia ou pelos muito volumosos (como Spitz Alemão ou Chow Chow), sugerimos optar por <strong>um tamanho acima</strong> para maior fluidez e conforto!
                </p>
              </div>

            </div>
          )}

          {activeTab === 'tabela' && (
            <div className="space-y-4">
              <p className="text-xs text-[#6B6256]">
                Consulte as medidas médias de cada tamanho e encontre a referência da raça do seu companheiro:
              </p>

              <div className="space-y-3">
                {BREED_SIZE_GUIDE.map((item) => (
                  <div
                    key={item.suggestedSize}
                    className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EDE4D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#E07A5F] text-white font-heading font-black text-xl flex items-center justify-center shrink-0">
                        {item.suggestedSize}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2C2824]">
                          {item.breed}
                        </h4>
                        <p className="text-xs text-[#6B6256]">
                          Peso: <strong>{item.avgWeight}</strong> • Peitoral: <strong>{item.chestRange}</strong> • Pescoço: <strong>{item.neckRange}</strong>
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] text-[#8C8377] bg-white px-2.5 py-1 rounded-lg border border-[#EDE4D8] self-start sm:self-auto">
                      💡 {item.tip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'como-medir' && (
            <div className="space-y-5 text-[#403B35]">
              <p className="text-xs text-[#6B6256]">
                Você só precisa de uma fita métrica ou de um barbante comum e uma régua escolar:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE4D8] space-y-2 text-center">
                  <div className="w-9 h-9 rounded-full bg-[#E07A5F]/15 text-[#D96B43] flex items-center justify-center font-bold text-sm mx-auto">
                    1
                  </div>
                  <h4 className="font-bold text-sm text-[#2C2824]">Pescoço</h4>
                  <p className="text-xs text-[#6B6256] leading-relaxed">
                    Meça a circunferência onde fica a coleira habitual, deixando um dedinho de folga.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE4D8] space-y-2 text-center">
                  <div className="w-9 h-9 rounded-full bg-[#E07A5F]/15 text-[#D96B43] flex items-center justify-center font-bold text-sm mx-auto">
                    2
                  </div>
                  <h4 className="font-bold text-sm text-[#2C2824]">Tórax / Peitoral</h4>
                  <p className="text-xs text-[#6B6256] leading-relaxed">
                    A medida mais importante! Envolva a parte mais larga do peito, logo atrás das patinhas dianteiras.
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE4D8] space-y-2 text-center">
                  <div className="w-9 h-9 rounded-full bg-[#E07A5F]/15 text-[#D96B43] flex items-center justify-center font-bold text-sm mx-auto">
                    3
                  </div>
                  <h4 className="font-bold text-sm text-[#2C2824]">Comprimento</h4>
                  <p className="text-xs text-[#6B6256] leading-relaxed">
                    Da base do pescoço (início das costas) até o comecinho do rabinho.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF4ED] p-4 rounded-2xl border border-[#E8DFC8] text-center">
                <p className="text-xs text-[#524B43]">
                  Ainda com dúvidas? Fale com a gente pelo <strong>WhatsApp (11 99999-9999)</strong>! Você envia uma foto do seu pet e ajudamos a escolher em 2 minutos.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF7F2] border-t border-[#EDE4D8] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#2C2824] hover:bg-[#403B35] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Entendido, Voltar às Roupas
          </button>
        </div>

      </div>
    </div>
  );
};
