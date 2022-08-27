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

    <div className="py-24 text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Inspiring people</span>{' '}
        <span className="block text-indigo-600 xl:inline">anywhere anytime</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Over 3 decades of experience in the hostess industry.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link
            href="/contacto/contacto"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-white md:py-4 md:text-lg md:px-10"
          >
            Contacto
          </Link>
        </div>
     
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link
            href="/contacto/presupuesto"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-white md:py-4 md:text-lg md:px-10"
          >
            Presupuesto
          </Link>
        </div>
        </div>
      </div>
      </>
  )
}
