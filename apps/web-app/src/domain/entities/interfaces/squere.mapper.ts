import {Color, Piece, PieceType, Square} from './square.domain';

export class SquareMapper {
  static readonly MAP: Record<string, PieceType> = {
    p: PieceType.Pawn,
    r: PieceType.Rook,
    n: PieceType.Knight,
    b: PieceType.Bishop,
    q: PieceType.Queen,
    k: PieceType.King
  };

  static mapIndexToSquareColor(index: number): Color {
    return (index + Math.floor(index / 8)) % 2 === 0 ? Color.White : Color.Black;
  }

  static mapFEN(notation: string): Square[] {
    if (!notation) {
      return [];
    }

    let index = 0;
    const list: Square[] = [];

    notation
      .replaceAll('\/', '')
      .split('')
      .forEach((char) => {
      if (/\d/.test(char)) {
        const empty = Number(char);
        for (let i = 0; i < empty; i++) {
          const square: Square = {
            id: `#${index}`,
            piece: null,
            color: SquareMapper.mapIndexToSquareColor(index),
          };
          list.push(square);
          index++;
        }
        return;
      }

      const lower = char.toLowerCase();
      if (!SquareMapper.MAP.hasOwnProperty(lower)) {
        throw new Error('Value must be a "p" "r" "n" "b" "q" "k"');
      }

      const square: Square = {
        id: `#${index}`,
        color: SquareMapper.mapIndexToSquareColor(index),
        piece: SquareMapper.mapFENToPieceDomain(char),
      };
      list.push(square);
      index++;
    });

    return list;
  }

  static mapFENToPieceDomain(value: string): Piece {
    if (!value) {
      throw new Error('Value must be a string');
    }

    const lower = value.toLowerCase();
    if (!SquareMapper.MAP.hasOwnProperty(lower)) {
      throw new Error('Value must be a "p" "r" "n" "b" "q" "k"');
    }

    const isWhitePiece = /([PRNBQK])/.test(value);
    const isBlackPiece = /([prnbqk])/.test(value);
    const pieceType = SquareMapper.MAP[lower];

    const piece: Piece = {} as Piece;

    if (isWhitePiece) {
      piece.color = Color.White;
    }

    if (isBlackPiece) {
      piece.color = Color.Black;
    }

    piece.type = pieceType;

    return piece;
  }
}
