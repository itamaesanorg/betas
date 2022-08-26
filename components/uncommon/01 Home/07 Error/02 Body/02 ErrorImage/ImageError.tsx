import Image from 'next/image'
import Link from 'next/link'

function ErrorImage() {
  return (
    <div className='justify-center items-center'>
    <Link href="/#">
      <Image
        src='https://images.unsplash.com/photo-1549415697-8e9a0872f910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
        alt='BCN Hostess Logo'
        height={2961}
        width={1974}
      />
    </Link>
    </div>
  )
}

export default ErrorImage