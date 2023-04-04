import { memo } from 'react'

import { boardSelectors } from '#/entities'
import { Cell } from '#/features'

type RowProps = {
  row: ReturnType<typeof boardSelectors.use.board>[number]
}

export const Row = memo(({ row }: RowProps) => {
  return (
    <>
      {row.map(cell => (
        <Cell key={cell.id} cell={cell} />
      ))}
    </>
  )
})

Row.displayName = 'Row'
