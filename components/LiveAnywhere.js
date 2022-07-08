import React from 'react'
import Image from 'next/dist/client/image'

function LiveAnywhere({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        {/* Imgage */}
        <div className='relative h-80 w-80'>
            <Image className='rounded-xl' src={img} layout="fill"  alt='Scroll view images'/>
        </div>
        <h3 className='text-2xl mt-3 '>{title}</h3>
    </div>
  )
}

export default LiveAnywhere