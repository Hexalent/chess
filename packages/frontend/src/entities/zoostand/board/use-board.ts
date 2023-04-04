import { create } from 'zustand'

import { Colors, FigureNames, ICell, PlayerColor } from '#/shared'
import { createSelectorFunctions } from '#/shared/lib/selectors'

interface IBoardStore {
  board: ICell[][]
  initBoard: () => void
  initFigures: () => void
  highlightCell: ({ y, x, currentPlayerColor }: { y: number; x: number; currentPlayerColor: PlayerColor }) => void
}

const generateFigurePlacement = (row: number, col: number, name: FigureNames, img: string, color: PlayerColor) => ({
  row,
  col,
  name,
  img,
  color
})

const figurePlacements = [
  ...Array.from({ length: 8 }, (_, i) =>
    generateFigurePlacement(i, 1, FigureNames.PAWN, '/assets/black-pawn.png', 'black')
  ),
  ...Array.from({ length: 8 }, (_, i) =>
    generateFigurePlacement(i, 6, FigureNames.PAWN, '/assets/white-pawn.png', 'white')
  ),
  generateFigurePlacement(1, 0, FigureNames.KNIGHT, '/assets/black-knight.png', 'black'),
  generateFigurePlacement(6, 0, FigureNames.KNIGHT, '/assets/black-knight.png', 'black'),
  generateFigurePlacement(1, 7, FigureNames.KNIGHT, '/assets/white-knight.png', 'white'),
  generateFigurePlacement(6, 7, FigureNames.KNIGHT, '/assets/white-knight.png', 'white'),
  generateFigurePlacement(0, 0, FigureNames.ROOK, '/assets/black-rook.png', 'black'),
  generateFigurePlacement(0, 7, FigureNames.ROOK, '/assets/white-rook.png', 'white'),
  generateFigurePlacement(7, 7, FigureNames.ROOK, '/assets/white-rook.png', 'white'),
  generateFigurePlacement(7, 0, FigureNames.ROOK, '/assets/black-rook.png', 'black'),
  generateFigurePlacement(4, 0, FigureNames.KING, '/assets/black-king.png', 'black'),
  generateFigurePlacement(4, 7, FigureNames.KING, '/assets/white-king.png', 'white'),
  generateFigurePlacement(3, 0, FigureNames.QUEEN, '/assets/black-queen.png', 'black'),
  generateFigurePlacement(3, 7, FigureNames.QUEEN, '/assets/white-queen.png', 'white'),
  generateFigurePlacement(2, 0, FigureNames.ROOK, '/assets/black-bishop.png', 'black'),
  generateFigurePlacement(5, 0, FigureNames.ROOK, '/assets/black-bishop.png', 'black'),
  generateFigurePlacement(2, 7, FigureNames.ROOK, '/assets/white-bishop.png', 'white'),
  generateFigurePlacement(5, 7, FigureNames.ROOK, '/assets/white-bishop.png', 'white')
]

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

    const newBoard = figurePlacements.reduce((board, { row, col, name, img, color }) => {
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
