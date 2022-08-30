import type { NextPage } from 'next'

import Menu from '../../components/common/01 Head/01 Menu'
import Info from '../../components/uncommon/02 Services/01 In-Store/02 Body/04 info/info'
import Brand from '../../components/uncommon/02 Services/01 In-Store/02 Body/03 Brand/brand'
import Footer from '../../components/common/03 Footer/25 Footer'

export default function Home() {
  return (
    <>
    <Menu />
    <Info />
    <Brand />
    <Footer />
    </>
  )
}
