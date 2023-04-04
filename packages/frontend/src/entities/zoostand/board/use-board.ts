import { create } from 'zustand'

import { Colors, ICell, initialFigurePlacements, PlayerColor } from '#/shared'
import { createSelectorFunctions } from '#/shared/lib/selectors'

interface IBoardStore {
  board: ICell[][]
  initBoard: () => void
  initFigures: () => void
  highlightCell: ({ y, x, currentPlayerColor }: { y: number; x: number; currentPlayerColor: PlayerColor }) => void
}

export const useBoard = create<IBoardStore>((set, get) => ({
  board: [],
  initBoard: () => {
    const newBoard: ICell[][] = Array.from({ length: 8 }, (_, i) =>
      Array.from({ length: 8 }, (_, j) => ({
        x: i,
        y: j,
        color: (i + j) % 2 === 0 ? Colors.WHITE : Colors.BLACK,
        id: Math.random(),
        figure: null,
        available: false
      }))
    )

    set({ board: newBoard })
  },
  initFigures: () => {
    const initialBoard = get().board

    const newBoard = initialFigurePlacements.reduce((board, { row, col, name, img, color }) => {
      const updatedRow = board[row] as ICell[]
      updatedRow[col] = { ...(updatedRow[col] as ICell), figure: { name, img, color } }
      return [...board.slice(0, row), updatedRow, ...board.slice(row + 1)]
    }, initialBoard)

    set({ board: newBoard })
  },
  highlightCell: ({ y, x, currentPlayerColor }) => {
    const updatedBoard = get().board.map((row, i) =>
      row.map((cell, j) => {
        const isCurrentCell = y === j && x === i
        const isBlackCell = (i + j) % 2 !== 0

        return {
          ...cell,
          color:
            isCurrentCell && cell.figure && currentPlayerColor === cell.figure.color
              ? Colors.ACTIVE
              : isBlackCell
              ? Colors.BLACK
              : Colors.WHITE
        }
      })
    )

    set({ board: updatedBoard })
  }
}))

export const boardSelectors = createSelectorFunctions(useBoard)
