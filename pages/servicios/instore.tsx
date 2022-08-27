import type { NextPage } from 'next'

import Menu from '../../components/common/01 Head/01 Menu'
import Info from '../../components/uncommon/02 Services/01 In-Store/02 Body/04 info/info'
import Clients from '../../components/uncommon/02 Services/01 In-Store/02 Body/05 Clients/Clients'
import Brand from '../../components/uncommon/02 Services/01 In-Store/02 Body/03 Brand/brand'

export default function Home() {
  return (
    <>
    <Menu />
    <Info />
    <Brand />
    <Clients />
    </>
  )
}
