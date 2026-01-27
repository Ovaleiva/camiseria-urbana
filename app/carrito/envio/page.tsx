"use client";
import Link from 'next/link';
import { ArrowLeft, MapPin, Truck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EnvioPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-black">
      <div className="max-w-3xl mx-auto">
        
        {/* Encabezado */}
        <div className="flex items-center gap-4 mb-12">
          <Link href="/carrito" className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-5xl font-black uppercase tracking-tighter">Envío</h1>
        </div>

        <div className="space-y-8">
          {/* Formulario de Dirección */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="CALLE Y NÚMERO" className="md:col-span-2 bg-[#f3f3f3] px-6 py-4 rounded-full text-xs font-bold outline-none border border-transparent focus:border-black uppercase" />
            <input type="text" placeholder="PISO / DEPTO (OPCIONAL)" className="bg-[#f3f3f3] px-6 py-4 rounded-full text-xs font-bold outline-none border border-transparent focus:border-black uppercase" />
            <input type="text" placeholder="CÓDIGO POSTAL" className="bg-[#f3f3f3] px-6 py-4 rounded-full text-xs font-bold outline-none border border-transparent focus:border-black uppercase" />
            <input type="text" placeholder="CIUDAD" className="bg-[#f3f3f3] px-6 py-4 rounded-full text-xs font-bold outline-none border border-transparent focus:border-black uppercase" />
            <select className="bg-[#f3f3f3] px-6 py-4 rounded-full text-xs font-bold outline-none border border-transparent focus:border-black uppercase appearance-none cursor-pointer">
              <option>PROVINCIA</option>
              <option>BUENOS AIRES</option>
              <option>ENTRE RÍOS</option>
              {/* Agregar más... */}
            </select>
          </div>

          {/* Opciones de Envío */}
          <div className="pt-8">
            <h2 className="font-black text-xl mb-4 uppercase italic">Método de entrega</h2>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 border-2 border-black rounded-2xl cursor-pointer hover:bg-gray-50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 border-2 border-black rounded-full bg-black" />
                  <div>
                    <p className="font-bold text-sm uppercase">Envío a domicilio</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold italic">Llega en 3 a 5 días hábiles</p>
                  </div>
                </div>
                <span className="font-black">$5.500</span>
              </label>

              <label className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl cursor-pointer hover:border-black transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 border-2 border-gray-200 rounded-full" />
                  <div>
                    <p className="font-bold text-sm uppercase">Retiro en sucursal</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold italic">Listo en 24hs</p>
                  </div>
                </div>
                <span className="font-black uppercase text-green-600 italic">Gratis</span>
              </label>
            </div>
          </div>

          {/* Botón de Pago */}
          <button 
            onClick={() => router.push('/carrito/pago')}
            className="w-full bg-black text-white py-5 rounded-full font-black text-sm mt-8 hover:bg-white hover:text-black border-2 border-black transition-all uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]"
          >
            Continuar al pago
          </button>
        </div>

      </div>
    </div>
  );
}