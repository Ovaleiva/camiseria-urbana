"use client"; // 1. Marcamos el componente para que pueda usar interactividad

import Link from 'next/link';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation'; // 2. Importamos el hook de navegación

export default function RecuperarPage() {
  const router = useRouter(); // 3. Inicializamos el router

  // 4. Función para manejar el clic y redirigir
  const handleEnviarEnlace = () => {
    // Aquí es donde en el futuro conectarías con Supabase para enviar el mail real
    // Por ahora, simulamos la acción y redirigimos
    router.push('/auth/recuperar/exito');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative">
      <Link href="/" className="absolute top-8 right-8 text-black p-2 border border-gray-200 rounded-full hover:border-black transition-all">
        <X size={24} />
      </Link>

      <div className="w-full max-w-md text-center">
        <h1 className="text-6xl font-black uppercase mb-12 text-black leading-none">
          INICIAR<br />SESIÓN
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="font-black text-lg text-black uppercase leading-tight">¿Tienes problemas para iniciar sesión?</h2>
            <p className="text-[10px] text-gray-400 italic mt-2 uppercase">Introduce Tu Correo Electrónico, Te Enviaremos Un Enlace Para Que Vuelvas A Entrar En Tu Cuenta.</p>
          </div>

          <input 
            type="email" 
            placeholder="INGRESAR EMAIL" 
            className="w-full bg-[#f3f3f3] px-6 py-4 rounded-full text-sm outline-none text-black placeholder:text-gray-400 font-bold"
          />

          <div className="text-right">
            <Link href="/auth/login" className="text-[10px] text-gray-400 italic hover:text-black uppercase">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* 5. Agregamos el evento onClick aquí */}
          <button 
            onClick={handleEnviarEnlace}
            className="w-full bg-white border-2 border-black py-4 rounded-full font-black text-sm hover:bg-black hover:text-white transition-all text-black uppercase"
          >
            ENVIAR ENLACE
          </button>

          <div className="text-center pt-4">
            <Link href="/auth/registro" className="text-[10px] text-gray-400 italic hover:text-black uppercase">
              ¿No tenés cuenta aún? Crear cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}