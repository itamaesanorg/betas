import Link from 'next/link'

const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <div className="box-border border-rose-400 border-4">
      <hr className='w-full mb-8' />
      <div className='w-full max-w-4xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3 mx-auto flex justify-between items-center'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='text-black hover:text-black transition'>Home</a>
          </Link>
          <Link href='/contacto/inscribete'>
          Conacto
          </Link>
          <Link href='/contacto/presupuesto'>
          Presupuesto
          </Link>
          <ExternalLink href='https://instagram.com/bcnhostess_hair'>
          Instagram
          </ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/servicios/instore'>
            In Store
          </Link>
          <Link href='/servicios/streetmarketing'>
          Street Marketing
          </Link>
          <Link href='/servicios/feriascongresos'>
          Ferias y Congresos
          </Link>
          <Link href='/legal/tos'>
          Otros Eventos
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/servicios/eventosimagen'>
          Eventos de Imagen
          </Link>
          <Link href='/servicios/otroseventos'>
          Otros Eventos
          </Link>
          <Link href='/servicios/uniformes'>
          Uniformes
          </Link>
          <Link href='/legal/legal'>
          Eventos de Imagen
          </Link>
        </div>
       
      </div>
    </div>
  )
}
