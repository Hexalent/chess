import { useCallback, useEffect, useId } from 'react'

import { boardSelectors } from '#/entities'
import { Row } from '#/features'

export const Board = () => {
  const board = boardSelectors.use.board()
  const initBoard = boardSelectors.use.initBoard()
  const initFigures = boardSelectors.use.initFigures()
  const key = useId()

  const buildBoard = useCallback(() => {
    initBoard()
    initFigures()
  }, [initBoard, initFigures])

  useEffect(() => {
    buildBoard()
  }, [buildBoard])

  return (
    <div className='w-[calc(64px * 8)] h-[calc(64px * 8)] flex flex-wrap'>
      {board.map(row => (
        <div key={key}>
          <Row row={row} />
        </div>
      ))}
    </div>
  )
}
