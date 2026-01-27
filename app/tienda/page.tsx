"use client";
import { useState } from 'react';
import ProductCard from "@/src/components/product/ProductCard";
import { Filter, ChevronDown, X } from 'lucide-react';

export default function TiendaPage() {
  const [showFilters, setShowFilters] = useState(false);

  // Datos de ejemplo
  const categorias = ["Todo", "Lino", "Algodón", "Seda", "Premium"];
  const talles = ["S", "M", "L", "XL", "XXL"];
  const colores = [
    { name: "Blanco", class: "bg-white border-gray-200" },
    { name: "Negro", class: "bg-black border-black" },
    { name: "Azul", class: "bg-blue-900 border-blue-900" },
    { name: "Beige", class: "bg-[#F5F5DC] border-[#F5F5DC]" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        
        {/* Cabecera de la Tienda */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h1 className="text-7xl font-black uppercase tracking-tighter leading-none">
            TIENDA
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-bold uppercase text-gray-400 italic">Mostrando 24 productos</p>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 border border-black px-4 py-2 rounded-full text-xs font-bold"
            >
              <Filter size={16} /> Filtros
            </button>
          </div>
        </div>

        <div className="flex gap-12">
          {/* SIDEBAR DE FILTROS (Desktop) */}
          <aside className={`fixed inset-0 z-50 bg-white p-6 md:relative md:block md:bg-transparent md:p-0 md:w-64 ${showFilters ? 'block' : 'hidden'}`}>
            <div className="flex justify-between items-center md:hidden mb-8">
              <span className="font-black uppercase">Filtrar</span>
              <X onClick={() => setShowFilters(false)} />
            </div>

            <div className="space-y-10">
              {/* Filtro: Categorías */}
              <div>
                <h3 className="font-black text-xs uppercase mb-4 tracking-widest">Categoría</h3>
                <ul className="space-y-2">
                  {categorias.map(cat => (
                    <li key={cat} className="text-sm uppercase font-medium hover:underline cursor-pointer">{cat}</li>
                  ))}
                </ul>
              </div>

              {/* Filtro: Talles */}
              <div>
                <h3 className="font-black text-xs uppercase mb-4 tracking-widest">Talle</h3>
                <div className="flex flex-wrap gap-2">
                  {talles.map(talle => (
                    <button key={talle} className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-xs font-bold hover:border-black transition-all">
                      {talle}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro: Colores */}
              <div>
                <h3 className="font-black text-xs uppercase mb-4 tracking-widest">Color</h3>
                <div className="flex gap-3">
                  {colores.map(color => (
                    <button 
                      key={color.name} 
                      className={`w-6 h-6 rounded-full border ${color.class} hover:scale-125 transition-transform`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Filtro: Precio */}
              <div>
                <h3 className="font-black text-xs uppercase mb-4 tracking-widest">Precio</h3>
                <input type="range" className="w-full accent-black" />
                <div className="flex justify-between mt-2 text-[10px] font-bold uppercase">
                  <span>$0</span>
                  <span>$100.000+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* GRILLA DE PRODUCTOS */}
          <main className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {/* Repetimos el ProductCard que ya creamos */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <ProductCard 
                  key={i}
                  name="Camisa Urbana Premium"
                  price="$45.000"
                  image={`/products/shirt-${(i % 4) + 1}.png`} 
                />
              ))}
            </div>

            {/* Paginación simple */}
            <div className="mt-20 flex justify-center gap-2">
              <button className="w-10 h-10 bg-black text-white rounded-full font-bold text-xs">1</button>
              <button className="w-10 h-10 border border-gray-200 rounded-full font-bold text-xs hover:border-black">2</button>
              <button className="w-10 h-10 border border-gray-200 rounded-full font-bold text-xs hover:border-black">3</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}