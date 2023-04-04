export enum Colors {
  WHITE = '#E8EDF9',
  BLACK = '#B7C0D8',
  ACTIVE = 'rgba(123,97,255,0.7)'
}
export enum FigureNames {
  KING = 'King',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  QUEEN = 'Queen',
  ROOK = 'Rook',
  BISHOP = 'Bishop'
}

export type PlayerColor = 'black' | 'white'

export type Figure = { name: FigureNames; img: string; color: PlayerColor }
export interface ICell {
  x: number
  y: number
  color: Colors
  available: boolean
  figure: Figure | null
  id: number
}
