import Link from 'next/link';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';

export default function CarritoPage() {
  // Datos de ejemplo para visualizar el diseño
  const items = [
    { id: 1, name: "Camisa Lino Blanca", price: 45000, quantity: 1, image: "/products/shirt-1.png" },
    { id: 2, name: "Camisa Algodón Azul", price: 38500, quantity: 2, image: "/products/shirt-2.png" },
  ];

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="flex items-center gap-4 mb-12">
          <Link href="/" className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-5xl font-black uppercase tracking-tighter">Mi Carrito</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Lista de Productos (Lado Izquierdo) */}
          <div className="lg:col-span-2 space-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 border-b border-gray-100 pb-8">
                <div className="w-32 h-40 bg-gray-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold uppercase text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500 italic">Talle: L | Color: Blanco</p>
                    </div>
                    <button className="text-gray-400 hover:text-black transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-black rounded-full px-4 py-1 gap-4">
                      <button className="hover:scale-110"><Minus size={14} /></button>
                      <span className="font-bold text-sm">{item.quantity}</span>
                      <button className="hover:scale-110"><Plus size={14} /></button>
                    </div>
                    <p className="font-black text-xl">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de Compra (Lado Derecho - Estilo Card con Sombra) */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-black p-8 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-black text-2xl uppercase mb-6 italic tracking-tighter">Resumen</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm uppercase font-bold">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm uppercase font-bold text-gray-400">
                  <span>Envío</span>
                  <span>Calculado en el checkout</span>
                </div>
                <div className="h-[1px] bg-black w-full my-4" />
                <div className="flex justify-between text-xl font-black uppercase">
                  <span>Total</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
              </div>

              <Link href="/carrito/envio">
                <button className="w-full bg-black text-white py-4 rounded-full font-black text-sm hover:bg-white hover:text-black border-2 border-black transition-all uppercase">
                  Continuar Compra
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}