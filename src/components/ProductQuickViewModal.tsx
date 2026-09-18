import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Product, PetSize, ProductColor } from '../types';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: PetSize, color: ProductColor, qty: number) => void;
  onOpenSizeCalculator: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeCalculator,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<PetSize>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-[#EDE4D8] overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#4A433A] flex items-center justify-center shadow-md transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image Showcase */}
        <div className="md:w-1/2 bg-[#FAF7F2] relative min-h-[300px] flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover max-h-[420px]"
            referrerPolicy="no-referrer"
          />
          {product.tag && (
            <span className="absolute top-4 left-4 bg-white/95 text-[#2C2824] text-xs font-bold px-3 py-1 rounded-full shadow-xs border border-[#EDE4D8]">
              {product.tag}
            </span>
          )}
        </div>

        {/* Right Side: Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-5">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#F59E0B]">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#2C2824]">{product.rating}</span>
              <span className="text-[#8C8276]">({product.reviewsCount} avaliações reais)</span>
            </div>

            <h2 className="text-2xl font-bold font-heading text-[#2C2824] leading-tight">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold font-heading text-[#E07A5F]">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#9E9589] line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#61594F] leading-relaxed">
              {product.description}
            </p>

            {/* Anatomical Highlights Box */}
            <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EDE4D8] space-y-1.5 text-xs text-[#4F473E]">
              <p><strong>🧵 Material:</strong> {product.material}</p>
              <p><strong>🐾 Modelagem:</strong> {product.fitNotes}</p>
            </div>
          </div>

          {/* Color & Size Selectors */}
          <div className="space-y-4 pt-2 border-t border-[#F0EAE1]">
            
            {/* Color selection */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-[#665D52]">Cor: {selectedColor.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                      selectedColor.name === c.name
                        ? 'border-[#E07A5F] bg-[#FAF3EA] text-[#2C2824] ring-1 ring-[#E07A5F]'
                        : 'border-[#E0D8CC] bg-white text-[#665D52]'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: c.hex }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-[#665D52]">Tamanho:</span>
                <button
                  onClick={onOpenSizeCalculator}
                  className="text-[#E07A5F] font-bold hover:underline cursor-pointer"
                >
                  Consultar Tabela de Medidas 📏
                </button>
              </div>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedSize === s
                        ? 'bg-[#2C2824] text-white shadow-xs'
                        : 'bg-[#FAF7F2] text-[#524A3F] border border-[#E8DFC8] hover:bg-[#EAE1D5]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add Button */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center border border-[#E0D8CC] rounded-2xl bg-[#FAF7F2] p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center font-bold text-[#524A3F] hover:bg-white rounded-xl transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-bold text-[#2C2824]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center font-bold text-[#524A3F] hover:bg-white rounded-xl transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md ${
                  addedSuccess
                    ? 'bg-[#438E55] text-white'
                    : 'bg-[#E07A5F] hover:bg-[#D46B50] text-white shadow-[#E07A5F]/25 active:scale-98'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Adicionado à Sacola!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Adicionar à Sacola</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A7266] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#438E55]" />
              <span>Garantia de 30 dias com 1ª troca grátis sem burocracia</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
