import { create } from 'zustand'

import { Colors, FigureNames, ICell, initialFigurePlacements, PlayerColor } from '#/shared'
import { createSelectorFunctions } from '#/shared/lib/selectors'

interface IBoardStore {
  board: ICell[][]
  madeMove: boolean
  selectedFigure: ICell | null
  initBoard: () => void
  initFigures: () => void
  selectFigure: ({ y, x, currentPlayerColor }: { y: number; x: number; currentPlayerColor: PlayerColor }) => void
  showAvailableMoves: ({ y, x, currentPlayerColor }: { y: number; x: number; currentPlayerColor: PlayerColor }) => void
  makeMove: ({ y, x }: { y: number; x: number }) => void
}

export const useBoard = create<IBoardStore>((set, get) => ({
  board: [],
  madeMove: false,
  selectedFigure: null,
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
  selectFigure: ({ y, x, currentPlayerColor }) => {
    const updatedBoard = get().board.map((row, i) =>
      row.map((cell, j) => {
        const isCurrentCell = y === j && x === i
        const isFigure = !!(get().board[x] as ICell[])[y]?.figure
        const isBlackCell = (i + j) % 2 !== 0

        if (isCurrentCell && isFigure && cell.figure && currentPlayerColor === cell.figure.color) {
          set({ selectedFigure: cell })
          set({ madeMove: false })
          return {
            ...cell,
            color: Colors.ACTIVE
          }
        }
        if ((isCurrentCell && !isFigure) || (isCurrentCell && currentPlayerColor !== cell.figure?.color)) {
          set({ selectedFigure: null })
          set({ madeMove: false })
          return {
            ...cell,
            color: isBlackCell ? Colors.BLACK : Colors.WHITE
          }
        }
        return {
          ...cell,
          color: isBlackCell ? Colors.BLACK : Colors.WHITE
        }
      })
    )

    set({ board: updatedBoard })
  },
  showAvailableMoves: ({ y, x, currentPlayerColor }) => {
    const updatedBoard = get().board.map((row, i) =>
      row.map((cell, j) => {
        const isAvailableMove = showAvailableMove(get().selectedFigure, cell, x, y, j, i)

        return {
          ...cell,
          available: isAvailableMove
        }
      })
    )
    if (get().selectedFigure?.figure && get().selectedFigure?.figure?.color === currentPlayerColor) {
      set({ board: updatedBoard })
    } else {
      set({
        board: get().board.map(row => {
          return row.map(cell => {
            return {
              ...cell,
              available: false
            }
          })
        })
      })
    }
  },
  makeMove: ({ y, x }) => {
    if (get().selectedFigure && (get().board[x] as ICell[])[y]?.available) {
      set({
        board: get().board.map((row, yCoord) => {
          return row.map((cell, xCoord) => {
            if (yCoord === get().selectedFigure!.x && xCoord === get().selectedFigure!.y) {
              return { ...cell, x, y, figure: null }
            }
            if (y === xCoord && x === yCoord) {
              return { ...cell, x, y, figure: get().selectedFigure!.figure }
            }
            return cell
          })
        })
      })
      set({ madeMove: true })
    }
  }
}))

const showAvailableMove = (
  selectedCell: ICell | null,
  boardCell: ICell,
  selectedCellXCoords: number,
  selectedCellYCoords: number,
  y: number,
  x: number
) => {
  if (selectedCell) {
    const dx = Math.abs(x - selectedCellXCoords)
    const dy = Math.abs(y - selectedCellYCoords)
    const isOccupied = !!boardCell.figure
    // const isEmptyHorizontal = () => true
    // const isEmptyVertical = () => true
    // const isEmptyDiagonal = () => true
    // const forward: 1 | -1 = selectedCell.figure?.color === 'white' ? 1 : -1

    switch (selectedCell.figure?.name) {
      case FigureNames.PAWN: {
        return ((dy === 1 && dx === 0) || (dy === 2 && dx === 0)) && !isOccupied
      }
      case FigureNames.ROOK: {
        return (dx === 0 || dy === 0) && !isOccupied
      }
      case FigureNames.BISHOP: {
        return dx === dy && !isOccupied
      }
      case FigureNames.QUEEN: {
        return (dx === dy || dx === 0 || dy === 0) && !isOccupied
      }
      case FigureNames.KNIGHT: {
        return ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) && !isOccupied
      }
      default: {
        return dx <= 1 && dy <= 1 && !isOccupied
      }
    }
  }
  return false
}

export const boardSelectors = createSelectorFunctions(useBoard)
