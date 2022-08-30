import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const brand = [
{
Name: 'Adidas',
Image:
'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/adidas.png?raw=true',
},
{
Name: 'agusti-torello-mata',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/agusti-torello-mata.png?raw=true',
},
{
Name: 'alfaparf',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/alfaparf.png?raw=true',
},
    {
Name: 'audi',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/audi.png?raw=true',
},
{
Name: 'bacardi',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/bacardi.png?raw=true',
},
{
Name: 'carrefour',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/carrefour.png?raw=true',
},
{
Name: 'cebado',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/cebado.png?raw=true',
},
{
Name: 'cinesa',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/cinesa.png?raw=true',
},
{
Name: 'ciruit-catalunya',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/ciruit-catalunya.png?raw=true',
},
{
Name: 'clarion',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/clarion.png?raw=true',
},
{
Name: 'Danone',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/Danone.png?raw=true',
},
{
Name: 'dulcesol',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/dulcesol.png?raw=true',
},
{
Name: 'elpozo',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/elpozo.png?raw=true',
},
{
Name: 'farina',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/farina.png?raw=true',
},
{
Name: 'ferrari',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/ferrari.png?raw=true',
},
{
Name: 'freeman',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/freeman.png?raw=true',
},
{
Name: 'freixenet',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/freixenet.png?raw=true',
},
{
Name: 'GinMG',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/GinMG.png?raw=true',
},
{
Name: 'isabel',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/isabel.png?raw=true',
},
{
Name: 'jamon-teruel',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/jamon-teruel.png?raw=true',
},
{
Name: 'kellogs',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/kellogs.png?raw=true',
},
{
Name: 'lakme',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/lakme.png?raw=true',
},
{
Name: 'llongueras',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/llongueras.png?raw=true',
},
{
Name: 'loreal',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/loreal.png?raw=true',
},
{
Name: 'lucky',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/lucky.png?raw=true',
},
{
Name: 'mango',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/mango.png?raw=true',
},
{
Name: 'marco_aldany',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/marco_aldany.png?raw=true',
},
{
Name: 'massimo',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/massimo.png?raw=true',
},
{
Name: 'melia',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/melia.png?raw=true',
},
{
Name: 'mercedes',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/mercedes.png?raw=true',
},
{
Name: 'mga-grupo',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/mga-grupo.png?raw=true',
},
{
Name: 'montibello',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/montibello.png?raw=true',
},
{
Name: 'nal3comunicacio',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/nal3comunicacio.png?raw=true',
},
{
Name: 'norma',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/noel.png?raw=true',
},
{
Name: '',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/norma.png?raw=true',
},
{
Name: 'oleoestepa',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/oleoestepa.png?raw=true',
},
{
Name: 'onecowork',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/onecowork.png?raw=true',
},
{
Name: 'oysho',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/oysho.png?raw=true',
},
{
Name: 'parc-valles',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/parc-valles.png?raw=true',
},
{
Name: 'PhilipMorris',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/PhilipMorris.png?raw=true',
},
{
Name: 'porsche',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/porsche-300x188.png?raw=true',
},
{
Name: 'privalia',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/privalia.png?raw=true',
},
{
Name: 'rally-car',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/rally-car.png?raw=true',
},
{
Name: 'revlon',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/revlon.png?raw=true',
},
{
Name: 'sasson',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/sasson.png?raw=true',
},
{
Name: 'schwarkopf',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/schwarkopf.png?raw=true',
},
{
Name: 'seat',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/seat.png?raw=true',
},
{
Name: 'seatra',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/seatra.png?raw=true',
},
{
Name: 'sorisa',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/sorisa.png?raw=true',
},
{
Name: 'suzuki',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/suzuki.png?raw=true',
},
{
Name: 'telefonica',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/telefonica.png?raw=true',
},
{
Name: 'thuya',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/thuya.png?raw=true',
},
{
Name: 'tony-guy',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/tony-guy.png?raw=true',
},
{
Name: 'vice',
Image:
  'https://github.com/sushi-js/sushis-demo/blob/main/src/common/components/elements/02%20Body/11%20CaseStudies/Case-Study-Clientes/Brands/vice.png?raw=true',
},

]

export default function Example() {
  return (
    <div
    className="w-screen">
    <div className="grid grid-flow-col auto-cols-max gap-5 py-0 px-4 max-w-fit sm:px- lg:px-8 lg:py-0 box-border border-blue-400 border-4">
              {brand.map((brand) => (
                <div key={brand.Name}>
                    <Image
                      className="col-span-1"
                      src={brand.Image}
                      width={75}
                      height={50}
                      alt="Brand"
                    />
                    <ul role="list" className="">
                    </ul>
                  </div>
              ))}
          </div>
          </div>


  )
}
