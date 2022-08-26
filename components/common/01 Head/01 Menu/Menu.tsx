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
          <Link href='/servicios/instore'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            In Store
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/servicios/streetmarketing'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            Street Marketing
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/servicios/feriascongresos'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            Ferias y Congresos
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
          <Link href='/servicios/eventosimagen'>
            <a className='hover:text-primary transition-all cursor-pointer'>
              Eventos de Imagen
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/servicios/otroseventos'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            Otros Eventos
            </a>
          </Link>
        </div>
        <div className='flex flex-row gap-1 text-tertiary'>
          <Link href='/servicios/uniformes'>
            <a className='hover:text-primary transition-all cursor-pointer'>
            Uniformes
            </a>
          </Link>
        </div>
      </motion.nav>
    </div>
  )
}
