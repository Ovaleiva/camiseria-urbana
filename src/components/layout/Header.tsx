import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag, User, Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  // El número 4 representa productos en el carrito
  const cartCount = 4; 

  return (
    <header className="w-full bg-white py-3 px-6 border-b border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* LADO IZQUIERDO: Logo Clickeable y Menú */}
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            {/* Reemplaza '/logo.png' por el nombre exacto de tu archivo en la carpeta public */}
            <Image 
              src="/logo.png" 
              alt="Camisería Urbana Logo" 
              width={150} 
              height={180} 
              priority
              className="object-contain"
            />
          </Link>

          <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all text-black">
            <Menu size={18} strokeWidth={2.5} />
            <span className="text-xs font-bold uppercase">Menu</span>
          </button>
        </div>

        {/* CENTRO: Buscador "Cápsula" con bordes negros */}
        <div className="hidden md:flex flex-1 max-w-lg items-center border border-black rounded-full px-5 py-2 focus-within:ring-1 focus-within:ring-black transition-all">
          <div className="flex items-center gap-1 text-black cursor-pointer">
            <span className="text-[10px] font-black uppercase">All Items</span>
            <ChevronDown size={14} strokeWidth={3} />
          </div>
          
          <div className="h-4 w-[1px] bg-black mx-4" /> 
          
          <input 
            type="text" 
            placeholder="BUSCAR PRODUCTOS..." 
            className="bg-transparent flex-1 text-[10px] font-bold outline-none placeholder:text-gray-400 text-black uppercase"
          />
        </div>

        {/* LADO DERECHO: Acciones con el "redondelito" negro */}
        <div className="flex items-center gap-3">
          {/* Buscar */}
          <button className="p-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition-all">
            <Search size={18} strokeWidth={2.5} />
          </button>
          
          {/* Carrito con el 4 */}
          <button className="p-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition-all relative">
            <ShoppingBag size={18} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-black border-[1.5px] border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Usuario */}
          <button className="p-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition-all">
            <User size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;