import Image from 'next/image'
import { isArgumentsObject } from 'util/types'

export default function brand() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image className="h-12" src="/public/brands/adidas.svg"
            width={160}
            height={100}
            alt="Adidas" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image className="h-12" src="https://upload.wikimedia.org/wikipedia/it/thumb/4/48/Bacardi_Logo.svg/500px-Bacardi_Logo.svg.png"
            width={160}
            height={100}
            alt="Adidas" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/7/74/Massimo_Dutti.png"
            width={160}
            height={100}
            alt="Adidas" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/800px-Adidas_Logo.svg.png"
            width={160}
            height={100}
            alt="Adidas" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/800px-Adidas_Logo.svg.png"
            width={160}
            height={100}
            alt="Adidas" />
          </div>
        </div>
      </div>
    </div>
  )
}

