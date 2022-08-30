import Image from 'next/image'

const clients = [
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Tinder.jpg?raw=true',
    name: 'Tinder',
    category: { name: 'Eventos, Street Marketing' },
    description:
      'Evento en el Hotel Wela, en donde se informo el funcionamiento de la aplicación.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Perrier.jpg?raw=true',
    name: 'Perrier',
    category: { name: 'Bebidas, Eventos, Festival, Sampling' },
    description:
      'Evento con Perrier en festivales: Madrid - Mercado de diseño, Mercado de Motores, Mulafest',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-MOTOGP.jpg?raw=true',
    name: 'MotoGP',
    category: { name: 'Bebidas, Eventos, Festival, Sampling' },
    description: 'Gran Premio de Cataluña, circuito de Montemelo.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Samsung.jpg?raw=true',
    name: 'Samsung',
    category: { name: 'Eventos' },
    description:
      'Evento privado para invitados del MWC (mobile World congress).',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-MM.jpg?raw=true',
    name: 'M&M',
    category: { name: 'Sampling' },
    description: 'Campaña de Sampling M&M, realizada en Andorra y Baqueira',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Figaro.jpg?raw=true',
    name: 'Figaro',
    category: { name: 'Eventos, Peluquería' },
    description:
      'Premios Fígaro. El evento más importante del calendario de la peluquería española, donde se presentaron las quince colecciones finalistas antes de la entrega de galardones.',
  },
  {
    Image: 
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Vikingo.jpg?raw=true',
    name: 'Vikingo',
    category: { name: 'Bebidas, Eventos' },
    description:
      'Evento realizado en el congreso CCIB (centre convencions internacional Barcelona).',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Telefonica.jpg?raw=true',
    name: 'Telefónica',
    category: { name: 'Eventos, Fashion' },
    description:
      'Proveedores oficiales durante 4 años, evento realizado en Diagonal 00 Torre Telefónica.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Corona.jpg?raw=true',
    name: 'Corona',
    category: { name: 'Bebidas, Eventos, Street Marketing' },
    description: 'Campaña de verano realizada en Barcelona y alrededores.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-IQOS.jpg?raw=true',
    name: 'IQOS',
    category: { name: 'Eventos, In Store' },
    description:
      'Co_Lab Café by IQOS, Madrid. Espacio en el que nuestros expertos te asesorarán sobre este nuevo dispositivo electrónico que calienta el tabaco en lugar de quemarlo y te resolverán cualquier duda o incidencia.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-VICE.jpg?raw=true',
    name: 'VICE',
    category: { name: 'Eventos, Eventos deportivos' },
    description:
      'Festival Cara B, es un festival de cultura musical independiente y urbana, que se celebra en Barcelona, se posiciona como el principal escaparate de las tendencias musicales y los sonidos más frescos del momento.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Movistar.jpg?raw=true',
    name: 'Movistar',
    category: { name: 'Eventos, Fashion' },
    description:
      'Durante años fuimos los responsable de proveer el staff para grandes premios no solo de F1 sino que también de Moto GP, conocemos muy bien los protocolos de actuación en los circuitos.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Montibello.jpg?raw=true',
    name: 'Montibello',
    category: { name: 'Eventos, Peluquería' },
    description:
      'Principal cliente, servicio en la Gala realizada en la feria Cosmo Beauty. Fabrican y distribuyen productos de cosmética profesional.',
  },
  {
    Image: 
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Adidas.jpg?raw=true',
    name: 'Adidas',
    category: { name: 'Eventos deportivos, Motor' },
    description:
      'Presentación nuevo lanzamiento, en el Gran Premio de España F1, Montemelo, circuito de Catalunya.',
  },
  {
    Image:
      'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Beefeater.jpg?raw=true',
    name: 'Beefeater',
    category: { name: 'Bebidas, Eventos, Street Marketing' },
    description:
      'Evento con Beefeater en Mad Cool Festival. Festival de música que se realiza en Madrid en donde el arte.',
  },
]

export default function Clients() {
  return (
    <div className="bg-white overflow-y-scroll h-75 box-border border-emerald-400 border-4">
      <div className="flex">
        <aside className="h-screen sticky top-0">
      <div className="mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-2">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-3">
          <div className="">
            <ul
              role="list"
              className="overflow-y-scrollspace-y-12 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {clients.map((client) => (
                <li key={client.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3">
                    <Image
                      className="object-cover shadow-lg rounded-lg"
                      src={client.Image}
                      alt={client.name}
                      width={720}
                      height={1080}
                    />
                    </div>
                    <div className="text-lg text-black leading-6 font-medium space-y-1">
                      <h3>{client.name}</h3>
                    </div>
                    <div className="text-lg">
                      <p className="text-black">{client.description}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </div>
      </aside>
      </div>
    </div>
  )
}
