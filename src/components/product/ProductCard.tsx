import { Heart, ShoppingBag } from 'lucide-react';

interface ProductProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ name, price, image }: ProductProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] bg-gray-100 mb-3 overflow-hidden">
        {/* Imagen del producto */}
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        
        {/* Icono Favoritos (Círculo blanco arriba derecha) */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors">
          <Heart size={18} />
        </button>

        {/* Icono Carrito (Círculo blanco abajo derecha) */}
        <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors">
          <ShoppingBag size={18} />
        </button>
      </div>
      
      {/* Información del Producto */}
      <h3 className="text-sm font-medium text-black uppercase">{name}</h3>
      <p className="text-sm font-bold text-black">{price}</p>
    </div>
  );
};

export default ProductCard;