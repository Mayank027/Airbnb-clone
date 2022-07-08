import React from 'react'
import Image from 'next/dist/client/image'

function ExploreNearby({img, location, distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursore-pointer hover:bg-gray-100 hover:scale-105 transiti transform duration-200 ease-out'>
        {/* LeftSide */}
        <div className='relative h-16 w-16'>
            <Image className='rounded-lg' src={img} layout="fill" />
        </div>
         {/* RightSide */}
         <div>
            <h2>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
         </div>
    </div>
  )
}

export default ExploreNearby