import { DotContext } from '@/context/DotCount'
import React, { useContext, useEffect } from 'react'

function StartButton() {
  const {startGame, setStartGame ,pacmanPosition} = useContext(DotContext);
 const strat = () => {
    setStartGame(true)
  }
  return (
    <div className='mt-5'>
      <button onClick={strat}>StartButton</button></div>
  )
}

export default StartButton