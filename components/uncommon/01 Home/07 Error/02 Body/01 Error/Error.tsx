/* eslint-disable @next/next/no-img-element */
// Welcome to SushiJS at SushiJS.com by ITAMAESAN at Itamaesan.org
import React from 'react'

import Logo from '../../../../common/components/01 Head/03 Logo'

export default function Error() {
  return (
    <div className="bg-white min-h-full flex flex-col lg:placeholder-white">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-white">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex  flex-cflex-shrink-0 pt-10 sm:pt-16">
              <Logo />
              </div>
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Esta página no existe!
                </h1>
                <p className="mt-2 text-base text-gray-500">No se que estás buscano, pero aquí no está.</p>
                <div className="mt-6">
                  <a href="/" className="text-base font-medium text-orange-500 hover:text-orange-700">
                    Volver a home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>      
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image />
        </div>
      </div>
  )
}
