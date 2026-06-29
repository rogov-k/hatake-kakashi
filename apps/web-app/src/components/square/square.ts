import {Component, input, computed} from '@angular/core';
import {Color, Square as SquareDomain} from '../../domain/entities/interfaces/square.domain';
import {Piece} from '../piece/piece';

@Component({
  selector: 'app-square',
  templateUrl: './square.html',
  styleUrl: './square.scss',
  imports: [Piece],
  host: {
    '[class.white]': 'isWhite()',
    '[class.black]': 'isBlack()',
  }
})
export class Square {
  public readonly square = input.required<SquareDomain>();

  public readonly isWhite = computed(() => this.square().color === Color.White);
  public readonly isBlack = computed(() => this.square().color === Color.Black);
}
