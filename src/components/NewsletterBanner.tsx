import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Gift } from 'lucide-react';

interface NewsletterBannerProps {
  onApplyDiscountCode: (code: string) => void;
}

export const NewsletterBanner: React.FC<NewsletterBannerProps> = ({ onApplyDiscountCode }) => {
  const [petName, setPetName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    onApplyDiscountCode('BEMVINDO10');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('BEMVINDO10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-tr from-[#2C2824] to-[#3B3530] text-white relative overflow-hidden">
      {/* Subtle decorative paw background prints */}
      <div className="absolute -top-10 -right-10 text-white/5 text-9xl select-none pointer-events-none">
        🐾
      </div>
      <div className="absolute -bottom-10 -left-10 text-white/5 text-9xl select-none pointer-events-none">
        🐾
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[#F4A261] border border-white/15">
          <Gift className="w-4 h-4 text-[#F4A261]" />
          <span>Presente de Boas-Vindas para seu Pet</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight max-w-2xl mx-auto leading-tight">
          Ganhe <span className="text-[#F4A261]">10% OFF</span> na primeira compra do seu melhor amigo!
        </h2>

        <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
          Cadastre-se para receber novidades da nossa coleção, dicas de saúde canina/felina e descontos exclusivos para tutores apaixonados.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto pt-2">
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Nome do seu pet (ex: Mel, Thor)"
              className="w-full sm:w-44 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#F4A261] focus:bg-white/15 transition-all"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="w-full sm:flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#F4A261] focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#E07A5F] hover:bg-[#D46B50] text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-lg shadow-[#E07A5F]/30 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              <span>Pegar Cupom</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="bg-white/10 border border-white/20 p-6 rounded-3xl max-w-md mx-auto space-y-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-[#438E55] text-white flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              {petName ? `Eba! O ${petName} ganhou presente!` : 'Eba! Cupom liberado com sucesso!'}
            </h3>
            <p className="text-xs text-white/80">
              Seu cupom já foi <strong>aplicado automaticamente na sua sacola de compras</strong>!
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="bg-white text-[#2C2824] font-mono font-black text-lg px-4 py-1.5 rounded-xl tracking-wider">
                BEMVINDO10
              </span>
              <button
                onClick={handleCopy}
                className="bg-[#E07A5F] hover:bg-[#D46B50] text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors cursor-pointer"
              >
                {copied ? 'Copiado! ✓' : 'Copiar'}
              </button>
            </div>
          </div>
        )}

        <p className="text-[11px] text-white/50">
          Prometemos zero spam. Apenas carinho, descontos e fofura no seu e-mail.
        </p>

      </div>
    </section>
  );
};
