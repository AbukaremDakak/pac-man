import React, { useContext, useEffect, useRef, useState } from 'react'
import '@/style/main.css'
import { DotContext } from '@/context/DotCount'

function Pacman() {
   const {pacmanPosition, setPacmanPosition, pacIndex, setPacIndex, level0, boardDiv, setBoardDiv } = useContext(DotContext)
   const [pacDir, setPacDir] = useState('left')
   const [allowMove, setAllowMove] = useState(true)
   const [nextIndex, setNextIndex] = useState({Ix:8,Iy:14})
      
  
   

     useEffect(() => {
        const { x, y } = pacmanPosition;
        let newX = x;
        let newY = y;
        let pacI = nextIndex.Ix + nextIndex.Iy *20;
        let newPos = pacI;
        
        const moving = setInterval(() => {
        // if (!allowMove) return
        
        if (pacI >= 0  && pacI <= 449) {
        switch (pacDir) {
          case 'left':
            if (level0[pacI-1] === 1) return
            newX = x - 24;
            setNextIndex(prev => ({Ix: prev.Ix -1 > 0 ? prev.Ix -1 : prev.Ix , Iy: prev.Iy}))                
            newPos = pacI -1;
            break;
          case 'up':
            if (level0[pacI-20] === 1) return
            newY = y - 24;
            setNextIndex(prev => ({Ix: prev.Ix , Iy: prev.Iy - 1 > 0 ? prev.Iy -1 : prev.Iy}))
            newPos = pacI +1;
            break;
          case 'right':
            if (level0[pacI+1] === 1) return
            newX = x + 24;
            setNextIndex(prev => ({Ix: prev.Ix + 1 < 19 ? prev.Ix +1 : prev.Ix , Iy: prev.Iy}))   
            newPos = pacI +1;
            break;
          case 'down':
            if (level0[pacI+20] === 1) return
            newY = y + 24;
            setNextIndex(prev => ({Ix: prev.Ix , Iy: prev.Iy + 1 < 22 ? prev.Iy + 1 : prev.Iy}))
            newPos = pacI -1;
            break;
          default:
            newX = x;
            newY = y;
            setNextIndex({Ix: prev.Ix,Iy: prev.Iy})
            return;      
      }
    }        
        if (isValidPosition(newX, newY) ) {
          // console.log(pacI);
          // console.log(level0[pacI]);
          // console.log(newPos);
          // console.log(level0[newPos]);
          // console.log(nextIndex);
          setPacmanPosition({ x: newX, y: newY });
          setPacIndex(nextIndex)
          eating();
        }
    }, 250)
    
    
    const isValidPosition = (x, y) => {     
      if (x >= 24 && y >= 24 && x <= 432 && y <= 504 ) {
        setAllowMove(true)
        return true 
      } else {
        setAllowMove(false)
        return false
      }     
    };

    const eating = () => {
      setBoardDiv(prev => {
        const modifiedBoardDiv = [...prev]; 
        modifiedBoardDiv[pacI] = <div key={pacI} className={`blank flex justify-center items-center w-6 h-6`}></div>; 
        return modifiedBoardDiv;
      });
    }
     
      window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(moving);
    };
  }, [pacmanPosition, pacDir, nextIndex, setPacmanPosition, setPacIndex, setBoardDiv, level0 ]);
  
  
  
  const handleKeyPress = (e) => {
    const { keyCode } = e;      
      switch (keyCode) {
        case 37: // Left Arrow Key
        setPacDir('left')            
        break;
        case 38: // Up Arrow Key
        setPacDir('up')
        break;
        case 39: // Right Arrow Key
        setPacDir('right')        
        break;
        case 40: // Down Arrow Key
        setPacDir('down')            
        break;
      }  }

  const getRotationAngle = () => {
    switch (pacDir) {
      case 'up':
        return -90;
      case 'down':
        return -270;
      case 'left':
        return -180;
      case 'right':
        return 0;
      default:
        return 0;
    }
  };
  
   const pacmanStyle = {
    top: `${pacmanPosition.y}px`,
    left: `${pacmanPosition.x}px`,
    transform: `rotate(${getRotationAngle()}deg)`,     
  };

  return (
    <div className='pacman w-6 h-6' style={pacmanStyle }></div>
  )
}

export default Pacman