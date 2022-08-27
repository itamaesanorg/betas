import React from 'react'

import Image from 'next/image'

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
      <div className="flex items-center">
          <Image className="rounded-full"
            src='https://avatars.githubusercontent.com/u/5947268?v=4'
            alt='BCN Hostess Logo'
            width={100}
            height={100}
          />
      <div>
        <strong>Andrew Alfred</strong>
        <span>Technical advisor</span>
      </div>
    </div>
    <p>
      Today I spent most of the day researching ways to ...
    <span className="inline-flex items-baseline">
  <Image className='self-center w-5 h-5 rounded-full mx-1'
            src='https://avatars.githubusercontent.com/u/5947268?v=4'
            alt='BCN Hostess Logo'
            width={20}
            height={20} />
            <span>Kramer</span>
  </span>
  keeps telling me there is no way to make it work, that ...
</p>
      </div>
    </div>
  )
}
