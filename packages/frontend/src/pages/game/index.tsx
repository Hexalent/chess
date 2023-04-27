import { useEffect, useState } from 'react'
import { FiSettings } from 'react-icons/fi'

import { Board } from '#/entities'
import { Colors, SettingsModal } from '#/shared'
import { BoardComponent } from '#/widgets'

export const Game = () => {
  const [board, setBoard] = useState(new Board())
  const [currentPlayer, setCurrentPlayer] = useState(Colors.WHITE)
  const [showModal, setShowModal] = useState(false)

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
    <>
      <div
        className={`w-[100vw] h-[100vh] flex items-center justify-center bg-[#E8EDF9] p-2 ${
          showModal ? 'blur-sm' : ''
        }`}
      >
        <button
          className='absolute top-5 right-5 bg-[#B7C0D8] p-1.5 rounded-full text-[#34364C]'
          onClick={() => setShowModal(prevState => !prevState)}
        >
          <FiSettings size={32} />
        </button>
        <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />
      </div>
      {showModal && <SettingsModal setShowModal={setShowModal} />}
    </>
  )
}
