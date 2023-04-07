import { memo } from 'react'

import { Cell } from '#/entities'
import { CellComponent } from '#/features'

type RowProps = {
  row: Cell[]
  selectedCell: Cell | null
  click: (cell: Cell) => void
  boardStyle: string
}
export const RowComponent = memo(({ row, selectedCell, click, boardStyle }: RowProps) => {
  return (
    <div className='min-w-full h-[64px] flex flex-wrap'>
      {row.map(cell => (
        <CellComponent
          key={cell.id}
          click={click}
          cell={cell}
          selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
          boardStyle={boardStyle}
        />
      ))}
    </div>
  )
})

RowComponent.displayName = 'Row'
