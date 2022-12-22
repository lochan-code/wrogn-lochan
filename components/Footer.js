import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-slate-300'>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center m-2">
            <Image src='/cash.69be4d72e9e3.svg' width={30} height={30} />
            <p className='m-1'>Cash On Delivery</p>
        </div>
        <div className="flex justify-center items-center m-2">
            <Image src='/delivery.5a9de78e31ac.svg' width={30} height={30} />
            <p className='m-1'>Fast  Delivery</p>
        </div>
        <div className="flex justify-center items-center m-2">
            <Image src='/15days.38b7d1563ea9.png' width={30} height={30} />
            <p className='m-1'>Easy Exchange</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
