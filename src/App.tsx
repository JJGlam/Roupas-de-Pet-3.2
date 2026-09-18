/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, PetSize, ProductColor } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductCatalog } from './components/ProductCatalog';
import { WeatherOutfitGuide } from './components/WeatherOutfitGuide';
import { CustomerStories } from './components/CustomerStories';
import { NewsletterBanner } from './components/NewsletterBanner';
import { Footer } from './components/Footer';
import { SizeCalculatorModal } from './components/SizeCalculatorModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  // Cart state with localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('petaconchego_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string>(() => {
    try {
      return localStorage.getItem('petaconchego_coupon') || '';
    } catch {
      return '';
    }
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSizeCalculatorOpen, setIsSizeCalculatorOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('petaconchego_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem('petaconchego_coupon', appliedCoupon);
      }
    } catch (e) {
      console.warn('Failed to save coupon', e);
    }
  }, [appliedCoupon]);

  // Add to cart handler
  const handleAddToCart = (
    product: Product,
    size: PetSize,
    color: ProductColor,
    quantity = 1
  ) => {
    const itemId = `${product.id}-${size}-${color.name}`;
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          id: itemId,
          product,
          selectedSize: size,
          selectedColor: color,
          quantity,
        },
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = (code: string) => {
    setAppliedCoupon(code);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2824]">
      {/* Header & Navigation */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => setSearchQuery(q)}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)}
          onExploreCatalog={scrollToCatalog}
        />

        {/* Anatomical & Craft Features */}
        <Features />

        {/* Interactive Clothing Catalog */}
        <ProductCatalog
          products={PRODUCTS}
          searchQuery={searchQuery}
          onAddToCart={(prod, size, col) => handleAddToCart(prod, size, col, 1)}
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)}
        />

        {/* Weather & Climate Outfit Guide */}
        <WeatherOutfitGuide />

        {/* Real Customer Stories & Photos */}
        <CustomerStories />

        {/* Newsletter & Welcome 10% OFF Voucher */}
        <NewsletterBanner
          onApplyDiscountCode={(code) => {
            handleApplyCoupon(code);
            setIsCartOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer onOpenSizeCalculator={() => setIsSizeCalculatorOpen(true)} />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={handleApplyCoupon}
      />

      <SizeCalculatorModal
        isOpen={isSizeCalculatorOpen}
        onClose={() => setIsSizeCalculatorOpen(false)}
        onSelectSizeForFilter={(size) => {
          scrollToCatalog();
        }}
      />

      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(prod, size, col, qty) => handleAddToCart(prod, size, col, qty)}
        onOpenSizeCalculator={() => {
          setQuickViewProduct(null);
          setIsSizeCalculatorOpen(true);
        }}
      />
    </div>
  );
}
