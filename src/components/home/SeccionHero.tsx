import Image from "next/image";

export default function SeccionHero() {
  return (
    <section className="w-full min-h-[80vh] grid grid-cols-1 md:grid-cols-3 gap-8 p-10 items-center">
      
      {/* Texto vertical */}
      <div className="hidden md:flex justify-center items-center">
        <h2 className="text-6xl font-black rotate-[-90deg] tracking-widest">
          CAMISERIA URBANA
        </h2>
      </div>

      {/* Imagen principal */}
      <div className="flex justify-center">
        <Image
          src="/hero-modelo.jpg"
          alt="Modelo Camisería Urbana"
          width={500}
          height={700}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Texto y producto */}
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-5xl font-bold">ELEGANCIA QUE INSPIRA</h1>

        <div className="flex items-center gap-4">
          <Image
            src="/camisa-blanca.png"
            alt="Camisa destacada"
            width={120}
            height={160}
          />
          <button className="border px-4 py-2 rounded hover:bg-black hover:text-white transition">
            Añadir al carrito (+)
          </button>
        </div>
      </div>
    </section>
  );
}
