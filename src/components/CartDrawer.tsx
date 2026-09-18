import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Sparkles, Check, MessageCircle, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  appliedCoupon: string;
  onApplyCoupon: (code: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  appliedCoupon,
  onApplyCoupon,
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 149;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  // Calculate discount
  let discountPercentage = 0;
  if (appliedCoupon.toUpperCase() === 'BEMVINDO10') {
    discountPercentage = 0.10;
  } else if (appliedCoupon.toUpperCase() === 'PETLOVE') {
    discountPercentage = 0.05;
  }

  const discountAmount = subtotal * discountPercentage;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD && subtotal > 0;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 14.90;
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponInput.trim().toUpperCase();
    if (clean === 'BEMVINDO10' || clean === 'PETLOVE') {
      onApplyCoupon(clean);
      setCouponError('');
      setCouponInput('');
    } else {
      setCouponError('Cupom inválido. Tente BEMVINDO10');
    }
  };

  // Generate friendly WhatsApp message
  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let msg = `Olá, PetAconchego! 🐾 Gostaria de finalizar meu pedido:\n\n`;
    cartItems.forEach((item, i) => {
      msg += `${i + 1}. *${item.product.name}*\n   - Tamanho: ${item.selectedSize}\n   - Cor: ${item.selectedColor.name}\n   - Qtd: ${item.quantity}\n   - Subtotal: R$ ${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });

    if (appliedCoupon) {
      msg += `🏷️ *Cupom aplicado:* ${appliedCoupon} (-R$ ${discountAmount.toFixed(2)})\n`;
    }
    msg += `📦 *Frete:* ${isFreeShipping ? 'GRÁTIS' : `R$ ${shippingCost.toFixed(2)}`}\n`;
    msg += `💰 *TOTAL:* R$ ${total.toFixed(2)}\n\n`;
    msg += `Poderiam me enviar o link de pagamento ou chave PIX? Obrigado!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank');
  };

  const handleSimulatedCardCheckout = () => {
    setCheckoutSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FFFDF9] h-full shadow-2xl flex flex-col justify-between border-l border-[#EDE4D8] animate-slide-left">
        
        {/* Cart Header */}
        <div className="p-5 border-b border-[#EDE4D8] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#E07A5F]" />
            <h3 className="text-lg font-bold font-heading text-[#2C2824]">
              Sacola de Roupas Pet ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#EFE7DC] text-[#4A433A] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#FAF6EE] px-5 py-3 border-b border-[#EDE4D8] text-xs">
          <div className="flex items-center justify-between font-semibold text-[#2C2824] mb-1.5">
            {isFreeShipping ? (
              <span className="text-[#3D6645] flex items-center gap-1.5 font-bold">
                <Sparkles className="w-4 h-4 text-[#438E55]" />
                Oba! Você ganhou FRETE GRÁTIS!
              </span>
            ) : (
              <span>
                Faltam <strong className="text-[#E07A5F]">R$ {amountNeededForFreeShipping.toFixed(2).replace('.', ',')}</strong> para Frete Grátis
              </span>
            )}
            <span className="text-[11px] text-[#7A7266]">Meta: R$ 149</span>
          </div>
          <div className="w-full bg-[#E5DACD] h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                isFreeShipping ? 'bg-[#438E55]' : 'bg-[#E07A5F]'
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#FAF6EE] flex items-center justify-center text-4xl shadow-inner">
                🐾
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-[#2C2824]">
                  Sua sacola está vazia
                </h4>
                <p className="text-xs text-[#7A7266] max-w-xs mt-1">
                  Seu melhor amigo está esperando um look quentinho! Navegue pelas nossas coleções e adicione suas peças favoritas.
                </p>
              </div>
              <button
                onClick={onClose}
                className="bg-[#E07A5F] hover:bg-[#D46B50] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer shadow-xs"
              >
                Explorar Roupas
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3.5 rounded-2xl border border-[#EDE4D8] flex gap-3 shadow-xs"
              >
                {/* Product Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-[#F0EAE1]">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-xs font-bold text-[#2C2824] line-clamp-1">
                        {item.product.name}
                      </h5>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#9C9388] hover:text-[#DC2626] p-0.5 cursor-pointer transition-colors"
                        title="Remover peça"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#6E665C] mt-0.5">
                      <span className="bg-[#FAF6EE] px-1.5 py-0.5 rounded-md font-bold text-[#2C2824]">
                        Tam: {item.selectedSize}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block border border-black/15"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        {item.selectedColor.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-bold text-[#E07A5F]">
                      R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#E0D8CC] rounded-lg bg-[#FAF7F2]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#544D44] hover:bg-white rounded-l-lg transition-colors cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-[#2C2824]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#544D44] hover:bg-white rounded-r-lg transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with summary and checkout actions */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-white border-t border-[#EDE4D8] space-y-4">
            
            {/* Coupon field */}
            <div>
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Cupom (ex: BEMVINDO10)"
                  className="flex-1 px-3 py-2 text-xs bg-[#FAF7F2] border border-[#E0D8CC] rounded-xl uppercase tracking-wider focus:outline-none focus:border-[#E07A5F]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#2C2824] hover:bg-[#403B35] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Aplicar
                </button>
              </form>
              {appliedCoupon && (
                <p className="text-[11px] text-[#3D6645] font-semibold mt-1 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Cupom ativo: {appliedCoupon} ({discountPercentage * 100}% OFF)
                </p>
              )}
              {couponError && (
                <p className="text-[11px] text-[#DC2626] mt-1">{couponError}</p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#5E564C] pt-2 border-t border-[#F5EFE6]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#3D6645] font-semibold">
                  <span>Desconto ({appliedCoupon}):</span>
                  <span>- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Frete:</span>
                {isFreeShipping ? (
                  <span className="text-[#3D6645] font-bold">GRÁTIS</span>
                ) : (
                  <span>R$ {shippingCost.toFixed(2).replace('.', ',')}</span>
                )}
              </div>
              <div className="flex justify-between text-base font-bold font-heading text-[#2C2824] pt-2 border-t border-[#EDE4D8]">
                <span>Total:</span>
                <span className="text-[#E07A5F]">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Checkout Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 transition-all cursor-pointer active:scale-98"
                id="cart-checkout-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir pelo WhatsApp (Atendimento Humanizado)</span>
              </button>

              <button
                onClick={handleSimulatedCardCheckout}
                className="w-full py-3 bg-[#2C2824] hover:bg-[#403B35] text-white font-bold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                id="cart-checkout-card"
              >
                <CreditCard className="w-4 h-4" />
                <span>Pagar com Cartão / PIX (Simulado)</span>
              </button>
            </div>

            <p className="text-[10px] text-center text-[#8C8377]">
              🔒 Compra 100% Segura • Primeira troca grátis em até 30 dias
            </p>

          </div>
        )}

      </div>

      {/* Checkout Success Modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-60 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#438E55] text-white flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#2C2824]">
              Pedido Realizado com Sucesso! 🐾
            </h3>
            <p className="text-xs text-[#6B6256] leading-relaxed">
              Obrigado por escolher a PetAconchego! Nossas costureiras já estão preparando o pacotinho com muito amor e cheirinho especial de lavanda.
            </p>
            <div className="p-3 bg-[#FAF7F2] rounded-2xl text-xs text-[#2C2824] font-semibold border border-[#EDE4D8]">
              Valor Total: R$ {total.toFixed(2).replace('.', ',')}
            </div>
            <button
              onClick={() => {
                setCheckoutSuccess(false);
                onClose();
              }}
              className="w-full py-3 bg-[#2C2824] text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              Concluir & Voltar à Loja
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
