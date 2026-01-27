import Link from 'next/link';
import { X } from 'lucide-react';

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative">
      <Link href="/" className="absolute top-8 right-8 text-black p-2 border border-gray-200 rounded-full hover:border-black transition-all">
        <X size={24} />
      </Link>

      <div className="w-full max-w-md">
        <h1 className="text-6xl font-black uppercase mb-4 text-black leading-none text-center">
          REGISTRO
        </h1>
        <p className="text-[10px] text-gray-400 text-center mb-10 italic">Regístrate Para No Perderte Nada</p>

        <div className="space-y-3">
          <input type="text" placeholder="Ingresar Nombre" className="w-full bg-[#f3f3f3] px-6 py-3 rounded-full text-xs outline-none text-black placeholder:text-gray-400" />
          <input type="text" placeholder="Ingresar Apellido" className="w-full bg-[#f3f3f3] px-6 py-3 rounded-full text-xs outline-none text-black placeholder:text-gray-400" />
          <input type="email" placeholder="Ingresar Email" className="w-full bg-[#f3f3f3] px-6 py-3 rounded-full text-xs outline-none text-black placeholder:text-gray-400" />
          <input type="password" placeholder="Ingresar Contraseña" className="w-full bg-[#f3f3f3] px-6 py-3 rounded-full text-xs outline-none text-black placeholder:text-gray-400" />
          <input type="password" placeholder="Repetir Contraseña" className="w-full bg-[#f3f3f3] px-6 py-3 rounded-full text-xs outline-none text-black placeholder:text-gray-400" />
          <input type="text" placeholder="Ingresar Código Postal" className="w-full bg-[#f3f3f3] px-6 py-3 rounded-full text-xs outline-none text-black placeholder:text-gray-400" />

          <button className="w-full bg-white border-2 border-black py-4 rounded-full font-black text-sm mt-6 hover:bg-black hover:text-white transition-all text-black uppercase">
            REGISTRARSE
          </button>

          <div className="text-center pt-4">
            <Link href="/auth/login" className="text-[10px] text-gray-400 italic hover:text-black uppercase">
              ¿Ya tenés cuenta? Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}