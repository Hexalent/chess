import { FC, useEffect, useState } from 'react'

import { Board, Cell } from '#/entities'
import { RowComponent } from '#/features'
import { BoardStyle, Colors, DropDown } from '#/shared'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Colors
  swapPlayer: () => void
}

export const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
  const boardStyles = [
    { id: Math.random(), option: BoardStyle.NO_STYLES },
    { id: Math.random(), option: BoardStyle.INSIDE_BOARD },
    { id: Math.random(), option: BoardStyle.OUTSIDE_BOARD }
  ]
  const [boardStyle, setBoardStyle] = useState<{ id: number; option: string }>(
    boardStyles[0] as { id: number; option: string }
  )

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
    <div>
      <DropDown title='Board Style' options={boardStyles} boardStyle={boardStyle} setBoardStyle={setBoardStyle} />
      <div
        className={`bg-white rounded ${boardStyle.option === BoardStyle.OUTSIDE_BOARD ? 'pt-2 pr-2 pl-7 pb-7' : 'p-2'}`}
      >
        <div className='w-[512px] h-[512px] flex flex-wrap'>
          {board.cells.map(row => (
            <RowComponent
              key={Math.random()}
              click={click}
              row={row}
              selectedCell={selectedCell}
              boardStyle={boardStyle.option}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
