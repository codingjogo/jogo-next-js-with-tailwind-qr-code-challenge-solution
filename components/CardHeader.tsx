import Image from 'next/image'
import React from 'react'
import imageQrCode from '@/public/images/image-qr-code.png'

const CardHeader = () => {
  return (
    <Image
      src={imageQrCode}
      alt='image-qr-code'
      className='w-full object-contain rounded-[15px]'
    />
  )
}

export default CardHeader