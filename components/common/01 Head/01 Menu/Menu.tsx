// Welcome to SushiJS at SushiJS.com by ITAMAESAN at Itamaesan.org
import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'



export default function Menu() {
  return (
    <div className='hidden md:inline'>
      <motion.nav
        className='px-8 drop-shadow-xl max-w-6xl w-full bg-white-800 z-[1] filter-blur dark:bg-white top-2 md:top-4 rounded-md mx-auto flex justify-between items-center'
        animate={{ y: 25 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='./pages/instore'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            Inscríbete
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='./pages/servicios/inscribete'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            Inscríbete
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/Presupuesto'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            Presupuesto
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/#'>
            <a className='hover:text-primary transition-all cursor-pointer'>
              <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
                <img
                  className='h-24'
                  src='https://raw.githubusercontent.com/miguelgargallo/SushiJS-Example-001/cf74497949cad84b0544e17b840cd5165c37545a/public/static/favicons/logo.svg'
                  alt='BCN Hostess'
                />
              </div>
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/Conocenos'>
            <a className='hover:text-primary transition-all cursor-pointer'>
              Conócenos
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/Contacto'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            Contacto
            </a>
          </Link>
        </div>
      </motion.nav>
  
    <div className="py-24 text-center">
    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span className="block xl:inline">Inspiring people</span>{' '}
      <span className="block text-indigo-600 xl:inline">anywhere anytime</span>
    </h1>
    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Over 3 decades of experience in the hostess industry.
    </p>
    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div className="rounded-md shadow">
        <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Sign up
        </a>
      </div>
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-white md:py-4 md:text-lg md:px-10"
        >
          Sales
        </a>
      </div>
    </div>
    </div>
    </div>
  )
}
