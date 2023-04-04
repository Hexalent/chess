import { useEffect } from 'react'

import { boardSelectors, useBoard } from '#/entities/zoostand'
import { Cell } from '#/features'

export const Board = () => {
  const board = boardSelectors.use.board()
  const initBoard = boardSelectors.use.initBoard()
  const initFigures = boardSelectors.use.initFigures()

  useEffect(() => {
    initBoard()
    initFigures()

    return () => {
      useBoard.setState({ board: [] })
    }
  }, [initBoard, initFigures])

  return (
    <div className='w-[calc(64px * 8)] h-[calc(64px * 8)] flex flex-wrap'>
      {board.map(row => (
        <div key={Math.random()}>
          {row.map(cell => (
            <Cell key={cell.id} cell={cell} />
          ))}
        </div>
      ))}
    </div>
  )
}
