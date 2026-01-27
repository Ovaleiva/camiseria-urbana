import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* 1. Categorías y Contacto - Todo en Negro */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-xs uppercase mb-4 text-black">Categorías</h4>
            <ul className="text-xs space-y-2 text-black">
              <li className="hover:underline cursor-pointer">Inicio</li>
              <li className="hover:underline cursor-pointer">Productos</li>
              <li className="hover:underline cursor-pointer">Ofertas</li>
              <li className="hover:underline cursor-pointer">Nosotros</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase mb-4 text-black">Contáctanos</h4>
            <ul className="text-xs space-y-2 text-black italic">
              <li>Consultas@Camiseriaurbana.Com</li>
              <li>+54 3442 000000</li>
              <li>+54 3442 000000</li>
              <li>Lorenzo 1124 - P.H 2 - Capital Federal</li>
            </ul>
          </div>
        </div>

        {/* 2. Newsletter - Título y Bordes en Negro */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-black uppercase text-center mb-6 text-black">
            Descubrí nuestras novedades
          </h2>
          <div className="w-full max-w-md flex border border-black rounded-full px-4 py-2 focus-within:ring-1 focus-within:ring-black">
            <input 
              type="email" 
              placeholder="Ingresar Email" 
              className="flex-1 bg-transparent text-xs outline-none text-black placeholder:text-gray-400" 
            />
            <button className="text-sm font-bold text-black hover:scale-125 transition-transform">
              →
            </button>
          </div>
        </div>

        {/* 3. Redes Sociales - Iconos en Negro */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-bold text-xl uppercase mb-4 text-black text-center md:text-right">
            Sumate a nuestras redes
          </h4>
          <div className="flex gap-4 text-black">
            <Facebook size={24} className="hover:scale-110 transition-transform cursor-pointer" />
            <Instagram size={24} className="hover:scale-110 transition-transform cursor-pointer" />
            <MessageCircle size={24} className="hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>
      
      {/* Footer Inferior (Copyright) */}
      <div className="text-center border-t border-gray-100 pt-8 mt-8">
        <p className="text-[10px] text-black font-medium uppercase tracking-widest">
          Copyright Camisería Urbana — 2026 Todos Los Derechos Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;