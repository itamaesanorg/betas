import type { NextPage } from 'next'

import Menu from '../components/common/01 Head/01 Menu'
import Hero from '../components/common/01 Head/02 Hero'
import Clients from '../components/common/02 Body/03 Clients'
import Well from '../components/uncommon/01 Home/00 Index/02 Body/03 Well'
import Footer from '../components/common/03 Footer/25 Footer'

export default function Home() {
  return (
    <>
    <Menu />
    <Hero />
    <Well />
    <Clients />
    <Footer />
    </>
  )
}
