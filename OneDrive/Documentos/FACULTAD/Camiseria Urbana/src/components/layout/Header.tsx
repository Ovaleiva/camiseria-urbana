import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag, User, Home, Bell, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-6 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        {/* LOGO -> Inicio */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="Logo" width={130} height={50} priority className="object-contain" />
        </Link>

        {/* BOTÓN INICIO -> Inicio */}
        <Link href="/">
          <button className="flex items-center gap-2 border border-gray-300 px-6 py-2.5 rounded-full hover:border-black transition-all">
            <Home size={20} className="text-black fill-black" /> 
            <span className="text-sm font-medium text-black">Inicio</span>
          </button>
        </Link>

        {/* BUSCADOR */}
        <div className="flex-1 max-w-2xl relative flex items-center">
          <input type="text" placeholder="Buscar Productos" className="w-full border border-gray-300 rounded-full px-6 py-2.5 outline-none focus:border-black text-sm text-black" />
          <Search size={20} className="absolute right-4 text-gray-500" />
        </div>

        {/* ICONOS DE ACCIÓN -> Rutas del Prototipo */}
        <div className="flex items-center gap-3">
          {/* Campana -> Notificaciones */}
          <Link href="/auth/notificaciones" className="p-2.5 border border-gray-300 rounded-full hover:border-black transition-all text-black">
            <Bell size={20} />
          </Link>

          {/* Corazón -> Favoritos */}
          <Link href="/favoritos" className="p-2.5 border border-gray-300 rounded-full hover:border-black transition-all text-black">
            <Heart size={20} />
          </Link>

          {/* Bolsa -> Carrito */}
          <Link href="/carrito" className="p-2.5 border border-gray-300 rounded-full hover:border-black transition-all text-black relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">4</span>
          </Link>

          {/* Usuario -> Login */}
          <Link href="/auth/login" className="p-2.5 border border-gray-300 rounded-full hover:border-black transition-all text-black">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;