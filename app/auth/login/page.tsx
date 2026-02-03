import Link from 'next/link';
import { X, Eye } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative">
      {/* Botón de cerrar (redirige al inicio) */}
      <Link href="/" className="absolute top-8 right-8 text-black p-2 border border-gray-200 rounded-full hover:border-black transition-all">
        <X size={24} />
      </Link>

      <div className="w-full max-w-md">
        <h1 className="text-6xl font-black uppercase mb-12 text-black leading-none">
          INICIAR<br />SESIÓN
        </h1>

        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Ingresar Email" 
            className="w-full bg-[#f3f3f3] px-6 py-4 rounded-full text-sm outline-none text-black placeholder:text-gray-400"
          />
          
          <div className="relative">
            <input 
              type="password" 
              placeholder="Ingresar Contraseña" 
              className="w-full bg-[#f3f3f3] px-6 py-4 rounded-full text-sm outline-none text-black placeholder:text-gray-400"
            />
            <Eye className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <div className="text-right">
            <Link href="/auth/recuperar" className="text-[10px] text-gray-400 italic hover:text-black">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Botones Sociales */}
          <div className="space-y-3 pt-6">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-full text-xs font-bold hover:bg-gray-50 transition-all text-black">
              <img src="/google-icon.png" alt="Google" className="w-4 h-4" />
              Iniciar Sesión con Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-full text-xs font-bold hover:bg-gray-50 transition-all text-black">
              <img src="/facebook-icon.png" alt="Facebook" className="w-4 h-4" />
              Iniciar Sesión con Facebook
            </button>
          </div>

          <button className="w-full bg-white border-2 border-black py-4 rounded-full font-black text-sm mt-8 hover:bg-black hover:text-white transition-all text-black uppercase">
            INICIAR SESIÓN
          </button>

          <div className="text-center pt-4">
            <Link href="/auth/registro" className="text-[10px] text-gray-400 italic hover:text-black">
              ¿No tenés cuenta aún? Crear cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}