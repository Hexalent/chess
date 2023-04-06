import { memo } from 'react'

import { Cell } from '#/entities'
import { BoardStyle } from '#/shared'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
  boardStyle: string
}

export const CellComponent = memo(({ cell, selected, click, boardStyle }: CellProps) => {
  const chessAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const isNumberLabelVisible = cell.x === 0 && boardStyle !== BoardStyle.NO_STYLES
  const isLetterLabelVisible = cell.y === 7 && boardStyle !== BoardStyle.NO_STYLES

  const getNumberLabelPosition = () => {
    if (boardStyle === BoardStyle.INSIDE_BOARD) {
      return 'top-0.5 left-1'
    } else {
      return 'top-5 -left-4'
    }
  }

  const getLetterLabelPosition = () => {
    if (boardStyle === BoardStyle.INSIDE_BOARD) {
      return 'top-[44px] left-[52px]'
    } else {
      return 'top-[68px] left-[26px]'
    }
  }

  return (
    <div
      className='cell flex justify-center items-center w-[12.5%] relative'
      style={{
        background: selected ? 'rgba(123,97,255,0.7)' : cell.color
      }}
      onClick={() => {
        click(cell)
      }}
    >
      {cell.available && !cell.figure && (
        <div className='dot w-[20px] h-[20px] bg-[rgba(123,97,255,0.7)] rounded-full' />
      )}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt='' className='figure min-w-[75%] max-w-[75%] min-h-[75%] max-h-[75%]' />
      )}
      {isNumberLabelVisible && (
        <div className={`number-label absolute text-sm font-bold text-gray-600 ${getNumberLabelPosition()}`}>
          {cell.y}
        </div>
      )}
      {isLetterLabelVisible && (
        <div className={`letter-label absolute text-sm font-bold text-gray-600 ${getLetterLabelPosition()}`}>
          {chessAlphabet[cell.x]}
        </div>
      )}
    </div>
  )
})

CellComponent.displayName = 'CellComponent'
