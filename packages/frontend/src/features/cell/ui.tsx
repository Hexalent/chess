import { FC } from 'react'

import { boardSelectors, playerSelectors } from '#/entities'
import { ICell } from '#/shared'

interface Props {
  cell: ICell
}

export const Cell: FC<Props> = ({ cell }) => {
  const selectFigure = boardSelectors.use.selectFigure()
  const showMoves = boardSelectors.use.showAvailableMoves()
  const makeMove = boardSelectors.use.makeMove()
  const madeMove = boardSelectors.use.madeMove()
  const togglePlayer = playerSelectors.use.togglePlayer()
  const currentPlayerColor = playerSelectors.use.color()
  return (
    <div
      className={`w-[64px] h-[64px] flex items-center justify-center`}
      style={{ backgroundColor: cell.color }}
      onClick={() => {
        if (madeMove) {
          togglePlayer()
          return
        }
        makeMove({ y: cell.y, x: cell.x })
        selectFigure({ y: cell.y, x: cell.x, currentPlayerColor })
        showMoves({ y: cell.y, x: cell.x, currentPlayerColor })
      }}
    >
      {cell.available && <div className='min-w-[20px] min-h-[20px] rounded-full bg-[rgba(123,97,255,0.7)]' />}
      {cell.figure && <img src={cell.figure.img} alt={cell.figure.name} className='w-[48px] h-[48px]' />}
    </div>
  )
}
