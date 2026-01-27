import ProductCard from "@/src/components/product/ProductCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FavoritosPage() {
  // Estos datos luego vendrán de Supabase o de un estado global
  const favoritos = [
    { id: 1, name: "Camisa Lino Blanca", price: "$45.000", image: "/products/shirt-1.png" },
    { id: 2, name: "Camisa Algodón Azul", price: "$38.500", image: "/products/shirt-2.png" },
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera de la página */}
        <div className="flex items-center gap-4 mb-12">
          <Link href="/" className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-black">
            Mis Favoritos
          </h1>
        </div>

        {favoritos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {favoritos.map((prod) => (
              <ProductCard 
                key={prod.id}
                name={prod.name}
                price={prod.price}
                image={prod.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 uppercase font-bold text-sm italic">
              Aún no tenés productos guardados
            </p>
            <Link href="/tienda">
              <button className="mt-6 border-2 border-black px-8 py-3 rounded-full font-black text-xs hover:bg-black hover:text-white transition-all text-black">
                VER CATÁLOGO
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}