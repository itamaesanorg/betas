import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <>
    <Link href="/">
      <Image
        src='https://raw.githubusercontent.com/miguelgargallo/betas/e40cac753b95eefab7f8bd189dc95e614640004d/public/logo.svg'
        alt='BCN Hostess Logo'
        width={250}
        height={105}
      />
    </Link>
    </>
  )
}

export default Logo