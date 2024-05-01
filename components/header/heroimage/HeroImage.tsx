import Image from 'next/image'
import React from 'react'
import HeroImg from '../../../assets/images/image01.png'

export const HeroImage = () => {
  return (
    <div className='mt-20 flex flex-col items-center'>
        <Image 
         src={HeroImg}
         alt = 'Hero Image'
         className='rounded-3xl flex flex-grow'
        />
    </div>
  )
}
