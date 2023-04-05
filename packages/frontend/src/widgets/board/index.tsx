import { FC, useEffect, useState } from 'react'

import { Board, Cell } from '#/entities'
import { RowComponent } from '#/features'
import { Colors } from '#/shared'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Colors
  swapPlayer: () => void
}

export const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const click = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
    } else {
      if (cell.figure?.color === currentPlayer) {
        setSelectedCell(cell)
      }
    }
  }

  useEffect(() => {
    const newBoard = board.getCopyBoard()
    board.highlightCells(selectedCell)
    setBoard(newBoard)
  }, [selectedCell])

  return (
    <div className='p-2 bg-white rounded'>
      <div className='w-[384px] h-[384px] flex flex-wrap'>
        {board.cells.map(row => (
          <RowComponent key={Math.random()} click={click} row={row} selectedCell={selectedCell} />
        ))}
      </div>
    </div>
  )
}
