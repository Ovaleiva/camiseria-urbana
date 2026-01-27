import ProductCard from '../product/ProductCard';

const ProductSection = ({ title }: { title: string }) => {
  // Datos de ejemplo basados en tu imagen
  const categories = ["Todo", "Algodón", "Lino", "Seda", "Poliéster"];
  
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter">{title}</h2>
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button key={cat} className="text-[10px] font-bold uppercase border border-gray-200 px-4 py-1.5 rounded-full hover:border-black transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
        <p className="text-[10px] text-gray-500 max-w-xs text-right hidden md:block">
          Cada Camisa Está Pensada Para Que Te Sientas Cómodo Y Auténtico.
        </p>
      </div>

      {/* Grilla de Productos (2 filas x 4 columnas) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ProductCard 
            key={i}
            name="Nombre Producto"
            price="$1.000"
            image={`/products/shirt-${i}.png`} // Asegurate de tener estas imágenes en public/products/
          />
        ))}
      </div>
      
      <div className="flex justify-end mt-6">
        <button className="text-[10px] font-bold uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          Ver Más +
        </button>
      </div>
    </section>
  );
};

export default ProductSection;