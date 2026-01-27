import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Categorías y Contacto */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-xs uppercase mb-4">Categorías</h4>
            <ul className="text-xs space-y-2 text-gray-600">
              <li>Inicio</li>
              <li>Productos</li>
              <li>Ofertas</li>
              <li>Nosotros</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase mb-4">Contáctanos</h4>
            <ul className="text-xs space-y-2 text-gray-600 italic">
              <li>Consultas@Camiseriaurbana.Com</li>
              <li>+54 3442 000000</li>
              <li>+54 3442 000000</li>
              <li>Lorenzo 1124 - P.H 2 - Capital Federal</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-black uppercase text-center mb-6">Descubrí nuestras novedades</h2>
          <div className="w-full max-w-md flex border border-gray-300 rounded-full px-4 py-2">
            <input type="email" placeholder="Ingresar Email" className="flex-1 bg-transparent text-xs outline-none" />
            <button className="text-xs font-bold">→</button>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-end">
          <h4 className="font-bold text-xl uppercase mb-4">Sumate a nuestras redes</h4>
          <div className="flex gap-4">
            <Facebook size={20} />
            <Instagram size={20} />
            <MessageCircle size={20} />
          </div>
        </div>
      </div>
      
      <div className="text-center border-t border-gray-100 pt-8 mt-8">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          Copyright Camisería Urbana — 2025 Todos Los Derechos Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;