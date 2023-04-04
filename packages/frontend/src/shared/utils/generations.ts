import { FigureNames, PlayerColor } from '#/shared'

const generateFigurePlacement = (row: number, col: number, name: FigureNames, img: string, color: PlayerColor) => ({
  row,
  col,
  name,
  img,
  color
})

export const initialFigurePlacements = [
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
  generateFigurePlacement(2, 0, FigureNames.BISHOP, '/assets/black-bishop.png', 'black'),
  generateFigurePlacement(5, 0, FigureNames.BISHOP, '/assets/black-bishop.png', 'black'),
  generateFigurePlacement(2, 7, FigureNames.BISHOP, '/assets/white-bishop.png', 'white'),
  generateFigurePlacement(5, 7, FigureNames.BISHOP, '/assets/white-bishop.png', 'white')
]
