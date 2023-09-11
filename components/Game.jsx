import React, {useContext, useEffect, useState } from 'react'
import { DotContext } from '@/context/DotCount';
import '@/style/main.css'
import Pacman from './Pacman';

function Game() {
  const {dotCount, setDotCount, startGame, boardDiv} = useContext(DotContext)
 
      

  return (
    <div className="relative bg-black flex flex-wrap max-w-[480px] mt-7">    
      {boardDiv}
      {startGame && <Pacman/>}

    </div>
  );
}

export default Game;