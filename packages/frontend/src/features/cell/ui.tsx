import { memo } from 'react'

import { Cell } from '#/entities'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

export const CellComponent = memo(({ cell, selected, click }: CellProps) => {
  return (
    <div
      className='flex justify-center items-center w-[12.5%]'
      style={{
        background: selected ? 'rgba(123,97,255,0.7)' : cell.color
      }}
      onClick={() => {
        click(cell)
      }}
    >
      {cell.available && !cell.figure && <div className='w-[15px] h-[15px] bg-[rgba(123,97,255,0.7)] rounded-full' />}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt='' className='min-w-[75%] max-w-[75%] min-h-[75%] max-h-[75%]' />
      )}
    </div>
  )
})

CellComponent.displayName = 'CellComponent'
