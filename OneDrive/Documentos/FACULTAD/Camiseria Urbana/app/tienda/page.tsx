"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabase';
import ProductCard from '../../src/components/product/ProductCard';
import { Filter, X } from 'lucide-react';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

export default function TiendaPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const { data, error } = await supabase
        .from('productos')
        .select('*');
      
      if (error) {
        console.error("Error cargando productos:", error);
      } else if (data) {
        setProductos(data as Producto[]);
      }
      setLoading(false);
    };

    fetchProductos();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <h1 className="text-7xl font-black uppercase mb-12">TIENDA</h1>

        {loading ? (
          <p className="text-center font-bold uppercase italic">Cargando camisas...</p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {productos.map((prod) => (
              <ProductCard 
                key={prod.id}
                name={prod.nombre}
                price={`$${prod.precio.toLocaleString()}`}
                image={prod.imagen || "/products/placeholder.png"} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}