import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { Product, PetSize, ProductColor } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: PetSize, color: ProductColor) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedSize, setSelectedSize] = useState<PetSize>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const installments = (product.price / 2).toFixed(2).replace('.', ',');

  return (
    <div className="bg-white rounded-3xl border border-[#EDE4D8] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#E07A5F]/30 transition-all duration-300 group">
      
      {/* Product Image Box */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#FAF6EE]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {product.tag ? (
            <span className="bg-white/95 backdrop-blur-xs text-[#2C2824] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#EDE4D8]">
              {product.tag}
            </span>
          ) : (
            <span />
          )}

          <span className="bg-[#FAF7F2]/90 backdrop-blur-xs text-[#6B6256] text-[10px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider">
            {product.petSuitability}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-x-4 bottom-3 bg-white/95 hover:bg-white text-[#2C2824] text-xs font-semibold py-2 rounded-xl shadow-md flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          title="Espiar detalhes"
        >
          <Eye className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>Ver Detalhes & Medidas</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        
        <div className="space-y-2">
          {/* Rating */}
          <div className="flex items-center gap-1 text-[#F59E0B] text-xs">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-bold text-[#2C2824]">{product.rating.toFixed(1)}</span>
            <span className="text-[#8C8276] text-[11px]">({product.reviewsCount} tutores)</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base font-bold font-heading text-[#2C2824] leading-snug group-hover:text-[#E07A5F] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#6B6256] line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Color Options */}
        <div className="space-y-1.5 pt-1 border-t border-[#F5EFE6]">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#82786D] font-medium">Cor:</span>
            <span className="text-[#2C2824] font-semibold">{selectedColor.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c)}
                title={c.name}
                className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                  selectedColor.name === c.name
                    ? 'ring-2 ring-[#E07A5F] ring-offset-1 scale-110'
                    : 'border-black/15 hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        {/* Size Selection Pills */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#82786D] font-medium">Tamanho disponível:</span>
            <span className="text-[#E07A5F] font-bold text-xs">{selectedSize}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedSize === size
                    ? 'bg-[#2C2824] text-white shadow-xs'
                    : 'bg-[#F5EFE6] text-[#544D44] hover:bg-[#EAE1D5]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold font-heading text-[#2C2824]">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#9E9589] line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#7A7266] block">
              2x de R$ {installments} sem juros
            </span>
          </div>

          <button
            onClick={handleAdd}
            className={`px-3.5 py-2.5 rounded-2xl font-semibold text-xs flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
              justAdded
                ? 'bg-[#438E55] text-white'
                : 'bg-[#E07A5F] hover:bg-[#D46B50] text-white shadow-sm shadow-[#E07A5F]/20 active:scale-95'
            }`}
            id={`add-to-cart-${product.id}`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Adicionado!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Colocar na Sacola</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
