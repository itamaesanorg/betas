import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <>
    <Link href="/#">
      <Image
        src='https://raw.githubusercontent.com/miguelgargallo/SushiJS-Example-001/cf74497949cad84b0544e17b840cd5165c37545a/public/static/favicons/logo.svg'
        alt='BCN Hostess Logo'
        width={1080}
        height={720}
      />
    </Link>
    </>
  )
}

export default Logo