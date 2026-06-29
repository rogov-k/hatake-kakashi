import { Component, computed, input } from '@angular/core';
import {Color, Piece as PieceDomain, PieceType} from '../../domain/entities/interfaces/square.domain';

const PIECE_ICON_MAP: Record<PieceType, string> = {
  [PieceType.Pawn]: 'chess_pawn',
  [PieceType.Knight]: 'chess_knight',
  [PieceType.Bishop]: 'chess_bishop',
  [PieceType.Rook]: 'chess_rook',
  [PieceType.Queen]: 'chess_queen',
  [PieceType.King]: 'chess_king_2',
};

@Component({
  selector: 'app-piece',
  templateUrl: './piece.html',
  styleUrl: './piece.scss',
  host: {
    '[class.white]': 'isWhite()',
    '[class.black]': 'isBlack()',
  }
})
export class Piece {
  public readonly piece = input.required<PieceDomain>();

  public readonly icon = computed(() => {
    const piece = this.piece();
    return PIECE_ICON_MAP[piece.type];
  });

  public readonly isWhite = computed(() => this.piece().color === Color.White);
  public readonly isBlack = computed(() => this.piece().color === Color.Black);
}
