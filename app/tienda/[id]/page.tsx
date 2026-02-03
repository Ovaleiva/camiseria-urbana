"use client";
import { useState } from 'react';
import { Heart, ShoppingBag, ArrowLeft, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from "@/src/components/product/ProductCard";

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState('M');

  // Estos datos luego vendrán de tu base de datos (Supabase)
  const product = {
    name: "Camisa Manga Larga Print Out Of Core",
    price: "$45.000",
    description: "Camisa de calce regular confeccionada en poplín de algodón premium. Estampa exclusiva de la colección 2026.",
    images: ["/products/shirt-1.png", "/products/shirt-2.png"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        
        {/* Migas de pan (Breadcrumbs) */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase mb-8 text-gray-400">
          <Link href="/" className="hover:text-black">Inicio</Link>
          <ChevronRight size={10} />
          <Link href="/tienda" className="hover:text-black">Tienda</Link>
          <ChevronRight size={10} />
          <span className="text-black italic">Detalle</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* GALERÍA DE IMÁGENES */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="aspect-square bg-gray-100 cursor-pointer border border-transparent hover:border-black">
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* INFORMACIÓN DEL PRODUCTO */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-black uppercase leading-none tracking-tighter mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-3xl font-black italic">{product.price}</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map(s => <Star key={s} size={14} className="fill-black" />)}
                  <Star size={14} className="text-gray-300" />
                  <span className="text-[10px] font-bold uppercase ml-2 text-gray-400">(12 Opiniones)</span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-10 text-gray-600">
              {product.description}
            </p>

            {/* SELECCIÓN DE TALLE */}
            <div className="mb-10">
              <h3 className="text-xs font-black uppercase mb-4 tracking-widest">Seleccionar Talle</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full border-2 font-bold text-xs transition-all ${
                      selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div className="flex flex-col gap-4">
              <button className="w-full bg-black text-white py-5 rounded-full font-black text-sm hover:bg-white hover:text-black border-2 border-black transition-all uppercase flex items-center justify-center gap-3">
                <ShoppingBag size={20} />
                Añadir al carrito
              </button>
              <button className="w-full bg-white text-black py-5 rounded-full font-black text-sm hover:bg-black hover:text-white border-2 border-black transition-all uppercase flex items-center justify-center gap-3">
                <Heart size={20} />
                Guardar en favoritos
              </button>
            </div>
          </div>
        </div>

        {/* SECCIÓN "TE PUEDE INTERESAR" */}
        <div className="mt-32">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">TE PUEDE INTERESAR</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <ProductCard 
                key={i}
                name="Producto Relacionado"
                price="$42.000"
                image={`/products/shirt-${i}.png`} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}