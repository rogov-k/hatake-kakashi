import {Component, input} from '@angular/core';
import {Square as SquareComponent} from '../square/square';
import {Square} from '../../domain/entities/interfaces/square.domain';

@Component({
  selector: 'app-board',
  templateUrl: './board.html',
  styleUrl: './board.scss',
  imports: [
    SquareComponent
  ]
})
export class Board {
  public readonly squareList = input.required<Square[]>();
}
