import { Cell, Figure, FigureNames } from '#/entities'
import { Colors } from '#/shared'

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? '/assets/black-king.png' : '/assets/white-king.png'
    this.name = FigureNames.KING
  }
  canMove(target: Cell): boolean {
    return super.canMove(target)
  }
}
