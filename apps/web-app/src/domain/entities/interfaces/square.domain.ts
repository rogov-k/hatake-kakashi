export enum Color {
  White = 'White',
  Black = 'Black',
}

export enum PieceType {
  Pawn = 'Pawn',
  Knight = 'Knight',
  Bishop = 'Bishop',
  Rook = 'Rook',
  Queen = 'Queen',
  King = 'King',
}

export interface Piece {
  type: PieceType;
  color: Color;
}

export interface Square {
  id: string;
  color: Color;
  piece: Piece | null;
}
