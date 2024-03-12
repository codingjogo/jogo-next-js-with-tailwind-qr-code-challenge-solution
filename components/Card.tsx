import React from 'react'

const Card = ({children} : {children: React.ReactNode;}) => {
  return (
    <div className='w-[315px] h-[484] shadow-main flex flex-col p-[18px] pb-11 rounded-[15px] gap-y-2 font-outfit text-center'>
        {children}
    </div>
  )
}

export default Card