import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function info() {
  return (
    <div className="container mx-auto py-24 text-center columns-2">
    <div className="box-border p-4 border-4">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">In Store</h1>
    </div>
    <div className="box-border p-4 border-4">
      <p className="break-after-auto">Para todas las actividades INDOOR, contamos con personal cuidadosamente seleccionado y formado para todo tipo de eventos. Seleccionamos personal cualificado con un cuidado especial en los retailtainment y promoción directa a públicos específicos en todos los canales de distribución: no solo los principales centros comerciales y puntos de venta de un solo brand, sino también aeropuertos, asegurándose cada vez que todas las certificaciones requeridas estén vigentes.</p>
    </div>
    <div className="box-border p-4 border-4">
      <Link href="/#">
        <Image
          src='https://avatars.githubusercontent.com/u/5947268?v=4'
          alt='BCN Hostess Logo'
          width={250}
          height={105} />
      </Link>
    </div>
  </div>

    <div className='relative bg-white dark:bg-white pt-16 px-4 sm:px-6 lg:pt-12 lg:px-8'>
      <div className='bg-white dark:bg-white h-1/3 sm:h-2/3' />
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold sm:text-4xl dark:text-black'>
          In Store
          </h2>
          <p className='px-4 sm:px-6 lg:px-8 mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
          Para todas las actividades INDOOR, contamos con personal cuidadosamente seleccionado y formado para todo tipo de eventos. Seleccionamos personal cualificado con un cuidado especial en los retailtainment y promoción directa a públicos específicos en todos los canales de distribución: no solo los principales centros comerciales y puntos de venta de un solo brand, sino también aeropuertos, asegurándose cada vez que todas las certificaciones requeridas estén vigentes.
          </p>
        </div>
      </div>
    </div>
  )
}
