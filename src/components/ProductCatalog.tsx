import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, Sparkles, Filter, Ruler } from 'lucide-react';
import { Product, PetCategory, PetSize, ProductColor } from '../types';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  searchQuery: string;
  onAddToCart: (product: Product, size: PetSize, color: ProductColor) => void;
  onQuickView: (product: Product) => void;
  onOpenSizeCalculator: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  searchQuery,
  onAddToCart,
  onQuickView,
  onOpenSizeCalculator,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PetCategory>('todos');
  const [selectedPetSuitability, setSelectedPetSuitability] = useState<'todos' | 'cães' | 'gatos'>('todos');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<PetSize | 'todos'>('todos');
  const [sortBy, setSortBy] = useState<'populares' | 'menor-preco' | 'maior-preco' | 'avaliacao'>('populares');

  const categories: { id: PetCategory; label: string; icon: string }[] = [
    { id: 'todos', label: 'Todas as Peças', icon: '✨' },
    { id: 'sueteres', label: 'Suéteres & Tricôs', icon: '🧶' },
    { id: 'moletons', label: 'Moletons Quentinhos', icon: '🧥' },
    { id: 'chuva', label: 'Chuva & Impermeáveis', icon: '🌧️' },
    { id: 'pijamas', label: 'Pijamas Térmicos', icon: '🌙' },
    { id: 'acessorios', label: 'Bandanas & Verão', icon: '🌿' },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'todos' && p.category !== selectedCategory) {
          return false;
        }

        // Pet filter
        if (selectedPetSuitability === 'cães' && p.petSuitability === 'gatos') {
          return false;
        }
        if (selectedPetSuitability === 'gatos' && p.petSuitability === 'cães') {
          return false;
        }

        // Size filter
        if (selectedSizeFilter !== 'todos' && !p.sizes.includes(selectedSizeFilter)) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchMaterial = p.material.toLowerCase().includes(q);
          const matchSuit = p.petSuitability.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchMaterial && !matchSuit) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'menor-preco') return a.price - b.price;
        if (sortBy === 'maior-preco') return b.price - a.price;
        if (sortBy === 'avaliacao') return b.rating - a.rating;
        // default populares
        return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      });
  }, [products, selectedCategory, selectedPetSuitability, selectedSizeFilter, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('todos');
    setSelectedPetSuitability('todos');
    setSelectedSizeFilter('todos');
  };

  return (
    <section id="catalogo" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E07A5F]/10 text-[#D96B43] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coleção Atual</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#2C2824] tracking-tight">
              Roupas Feitas para Brincar e Dormir
            </h2>
            <p className="text-sm sm:text-base text-[#696156] mt-1 max-w-xl">
              Nenhuma peça aperta ou pinça o pelo. Escolha o estilo favorito do seu filho de 4 patas.
            </p>
          </div>

          {/* Quick Help / Size calculator callout */}
          <button
            onClick={onOpenSizeCalculator}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-bold text-[#E07A5F] bg-white border border-[#E07A5F]/30 hover:bg-[#FAF0E6] px-4 py-2.5 rounded-full transition-colors cursor-pointer shadow-xs"
          >
            <Ruler className="w-4 h-4" />
            <span>Dúvida no tamanho? Abra a Calculadora</span>
          </button>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold shrink-0 transition-all flex items-center gap-2 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#2C2824] text-white shadow-md'
                  : 'bg-white text-[#575046] border border-[#E8DFC8] hover:bg-[#F3EDE2]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Filter Controls Bar (Pet type, Size, Sort) */}
        <div className="bg-white rounded-2xl p-4 border border-[#EBE3D7] mb-8 shadow-xs flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Pet Type Select */}
            <div className="flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#EDE4D8]">
              <button
                onClick={() => setSelectedPetSuitability('todos')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  selectedPetSuitability === 'todos'
                    ? 'bg-white text-[#2C2824] shadow-xs'
                    : 'text-[#6B6256] hover:text-[#2C2824]'
                }`}
              >
                🐾 Todos
              </button>
              <button
                onClick={() => setSelectedPetSuitability('cães')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  selectedPetSuitability === 'cães'
                    ? 'bg-white text-[#2C2824] shadow-xs'
                    : 'text-[#6B6256] hover:text-[#2C2824]'
                }`}
              >
                🐶 Só Cães
              </button>
              <button
                onClick={() => setSelectedPetSuitability('gatos')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  selectedPetSuitability === 'gatos'
                    ? 'bg-white text-[#2C2824] shadow-xs'
                    : 'text-[#6B6256] hover:text-[#2C2824]'
                }`}
              >
                🐱 Gatinhos
              </button>
            </div>

            {/* Size Filter */}
            <div className="flex items-center gap-1.5 text-xs text-[#6B6256]">
              <span className="font-medium text-[#8C8377] ml-2">Filtrar Tamanho:</span>
              {(['todos', 'PP', 'P', 'M', 'G', 'GG'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSizeFilter(s)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    selectedSizeFilter === s
                      ? 'bg-[#E07A5F] text-white'
                      : 'bg-[#FAF7F2] text-[#524B43] hover:bg-[#EFE7DC]'
                  }`}
                >
                  {s === 'todos' ? 'ALL' : s}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#8C8377] font-medium">Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF7F2] border border-[#E0D8CC] rounded-xl px-3 py-1.5 text-xs font-semibold text-[#2C2824] focus:outline-none focus:border-[#E07A5F]"
            >
              <option value="populares">Mais Populares ⭐</option>
              <option value="menor-preco">Menor Preço</option>
              <option value="maior-preco">Maior Preço</option>
              <option value="avaliacao">Melhor Avaliação</option>
            </select>
          </div>

        </div>

        {/* Search status notice if user typed something */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-sm bg-[#FFFDF9] px-4 py-2.5 rounded-xl border border-[#EDE4D8]">
            <p className="text-[#595248]">
              Mostrando resultados para: <strong className="text-[#2C2824]">"{searchQuery}"</strong> ({filteredProducts.length} peças)
            </p>
            <button
              onClick={() => resetFilters()}
              className="text-xs text-[#E07A5F] font-bold hover:underline"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EDE4D8] p-8 max-w-md mx-auto">
            <span className="text-4xl mb-3 block">🐶🔍</span>
            <h3 className="text-lg font-bold font-heading text-[#2C2824] mb-2">
              Nenhuma pecinha encontrada com esses filtros
            </h3>
            <p className="text-xs text-[#6B6256] mb-4">
              Tente selecionar outro tamanho ou categoria para ver as roupinhas disponíveis.
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#E07A5F] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#D46B50] transition-colors"
            >
              Ver Todas as Roupas
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
