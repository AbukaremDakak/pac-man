import { DotContext } from '@/context/DotCount'
import React, { useContext } from 'react'

function Score() {
  const {dotCount} = useContext(DotContext)
  return (
    <div className='flex justify-center items-center bg-black text-white w-52 mt-5 text-2xl border-4 border-solid border-blue-700'>{dotCount}</div>
  )
}

export default Score