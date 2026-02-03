import SeccionHero from "../src/components/home/SeccionHero";
import ProductSection from "@/src/components/product/ProductSection";
import Footer from "@/src/components/product/Footer";

export default function Home() {
  return (
    <>
      <SeccionHero />
      <ProductSection title="Vistiendo tu esencia" />
      <ProductSection title="Favoritos del momento" />
      {/* Aquí podrías agregar el collage de imágenes de campaña */}
      <Footer />
    </>
  );
}