import Link from 'next/link';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  return (
  <>
    <div className="py-24 text-center box-border border-purple-400 border-4">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">BCN Hostess</span>{' '}
        <span className="block text-gray-600 xl:inline">Inspirando profesionales</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Mas de 3 décadas de experiéncia en la indústria.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-2 hover:box-decoration-slice md:box-decoration-slice">
          <Link
            href="/contacto/inscribete"
            className=""
          >
            Inscríbete ahora
          </Link>
        </div>
        <div className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-2 hover:box-decoration-slice md:box-decoration-slice">
          <Link
            href="/contacto/presupuesto"
            className=""
          >
            Pide Presupuesto
          </Link>
        </div>
      </div>
      </div>
      </>
  )
}
