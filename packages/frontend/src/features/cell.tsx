import { FC } from 'react'

import { boardSelectors, playerSelectors } from '#/entities/zoostand'
import { ICell } from '#/shared'

interface Props {
  cell: ICell
}

export const Cell: FC<Props> = ({ cell }) => {
  const highlightCell = boardSelectors.use.highlightCell()
  const currentPlayerColor = playerSelectors.use.color()
  return (
    <div
      className={`w-[64px] h-[64px] flex items-center justify-center`}
      style={{ backgroundColor: cell.color }}
      onClick={() => highlightCell({ y: cell.y, x: cell.x, currentPlayerColor })}
    >
      {cell.figure && <img src={cell.figure.img} alt={cell.figure.name} className='w-[48px] h-[48px]' />}
    </div>
  )
}
