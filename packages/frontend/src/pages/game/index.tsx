import { useEffect, useState } from 'react'

import { Board } from '#/entities'
import { Colors } from '#/shared'
import { BoardComponent } from '#/widgets'

export const Game = () => {
  const [board, setBoard] = useState(new Board())
  const [currentPlayer, setCurrentPlayer] = useState(Colors.WHITE)

  useEffect(() => {
    restart()
    setCurrentPlayer(Colors.WHITE)
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer === Colors.WHITE ? Colors.BLACK : Colors.WHITE)
  }

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-[#E8EDF9] p-2'>
      <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />
    </div>
  )
}
