import Link from 'next/link';
import { CheckCircle2, Package, ArrowRight } from 'lucide-react';

export default function ExitoCompraPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-black">
      <div className="max-w-md w-full text-center">
        
        {/* Icono de Éxito */}
        <div className="flex justify-center mb-8">
          <div className="bg-black p-4 rounded-full text-white">
            <CheckCircle2 size={60} strokeWidth={1.5} />
          </div>
        </div>

        {/* Título Principal al estilo Auth */}
        <h1 className="text-6xl font-black uppercase mb-4 leading-none tracking-tighter">
          ¡GRACIAS!
        </h1>
        <p className="text-xl font-bold uppercase italic mb-10 tracking-tight">
          Tu pedido está en camino
        </p>

        {/* Recuadro de Info con Sombra Sólida */}
        <div className="bg-white border-2 border-black p-8 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-12">
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-[10px] font-bold uppercase text-gray-400">Nro. de Pedido</span>
              <span className="font-black text-sm">#CU-84920</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-[10px] font-bold uppercase text-gray-400">Fecha</span>
              <span className="font-black text-sm">27 ENE 2026</span>
            </div>
            <p className="text-[11px] uppercase leading-relaxed text-gray-600">
              Hemos enviado un mail de confirmación a tu correo con todos los detalles del envío.
            </p>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="space-y-4">
          <Link href="/auth/mis-compras">
            <button className="w-full bg-black text-white py-4 rounded-full font-black text-sm hover:bg-white hover:text-black border-2 border-black transition-all uppercase flex items-center justify-center gap-2">
              <Package size={18} />
              Seguir mi pedido
            </button>
          </Link>
          
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            Volver a la tienda <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}