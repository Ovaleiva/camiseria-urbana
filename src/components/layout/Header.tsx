import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag, User, Home, Bell, Heart } from 'lucide-react';

const Header = () => {
  const cartCount = 4; // Esto luego será dinámico

  return (
    <header className="w-full bg-white py-4 px-6 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        {/* 1. LOGO CLICKEABLE */}
        <div className="flex-shrink-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.svg" 
              alt="Camisería Urbana Logo" 
              width={130} 
              height={50} 
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* 2. BOTÓN INICIO (Con el redondelito) */}
        <div className="flex-shrink-0">
          <Link href="/">
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-2.5 rounded-full hover:border-black transition-all group">
              {/* Usamos fill-black para que la casa sea sólida como en tu imagen */}
              <Home size={20} className="text-black fill-black" /> 
              <span className="text-sm font-medium text-black">Inicio</span>
            </button>
          </Link>
        </div>

        {/* 3. BUSCADOR (Ancho y centrado) */}
        <div className="flex-1 max-w-2xl relative flex items-center">
          <input 
            type="text" 
            placeholder="Buscar Productos" 
            className="w-full border border-gray-300 rounded-full px-6 py-2.5 outline-none focus:border-black transition-all text-sm text-gray-600 placeholder:text-gray-400"
          />
          <button className="absolute right-4 p-1 text-gray-500 hover:text-black transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* 4. ICONOS DE ACCIÓN (Todos con redondelito) */}
        <div className="flex items-center gap-3">
          {/* Campana (Notificaciones) */}
          <button className="p-2.5 border border-gray-300 rounded-full hover:border-black transition-all text-black">
            <Bell size={20} strokeWidth={1.5} />
          </button>

          {/* Corazón (Favoritos) */}
          <button className="p-2.5 border border-gray-300 rounded-full hover:border-black transition-all text-black">
            <Heart size={20} strokeWidth={1.5} />
          </button>

          {/* Bolsa (Carrito con el 4) */}
          <button className="p-2.5 border border-gray-300 rounded-full hover:border-black transition-all text-black relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Usuario (Perfil) */}
          <button className="p-2.5 border border-gray-300 rounded-full hover:border-black transition-all text-black">
            <User size={20} strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;