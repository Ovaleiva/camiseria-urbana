import Link from 'next/link';

export default function ExitoRecuperarPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-6xl font-black uppercase mb-12 text-black leading-none">
          INICIAR<br />SESIÓN
        </h1>

        {/* El recuadro con la sombra negra desplazada */}
        <div className="bg-white border-2 border-black p-10 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center">
          <h2 className="font-black text-xl mb-4 text-black uppercase italic tracking-tighter">
            HEMOS ENVIADO EL ENLACE
          </h2>
          <p className="text-[11px] text-gray-500 mb-10 leading-relaxed uppercase">
            Revisa Tu Bandeja De Entrada Para Obtener El Enlace Y Poder Ingresar A Tu Cuenta
          </p>
          
          <Link href="/auth/login">
            <button className="w-full border-2 border-black py-3 rounded-full font-black text-xs hover:bg-black hover:text-white transition-all text-black uppercase">
              INICIAR SESIÓN
            </button>
          </Link>
        </div>

        <div className="text-center pt-8">
          <Link href="/auth/registro" className="text-[10px] text-gray-400 italic hover:text-black">
            ¿No tenés cuenta aún? Crear cuenta
          </Link>
        </div>
      </div>
    </div>
  );
}