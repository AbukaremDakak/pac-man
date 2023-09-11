'use client'

import Game from '@/components/Game'
import Score from '@/components/Score'
import StartButton from '@/components/StartButton'
import { DotProvider } from '@/context/DotCount'
import React from 'react'

export default function Index() {
  return (
    <div className='mx-auto flex justify-evenly items-center  relative'>
        <DotProvider>
            <Game />
            <div className='flex flex-col items-center'>
                <Score />
                <StartButton/>
            </div>
        </DotProvider>
    </div>
  )
}
