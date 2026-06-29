import {Component, signal, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {Board} from '../board/board';
import {SquareMapper} from '../../domain/entities/interfaces/squere.mapper';
import {Square} from '../../domain/entities/interfaces/square.domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInput,
    Board,
  ],
})
export class App implements OnInit {
  public readonly notationControl = new FormControl('', {nonNullable: true, validators: [Validators.required]},);
  public readonly squareList = signal<Square[]>([]);

  public ngOnInit() {
    this.notationControl.valueChanges.subscribe((notation) => {
      const squares = SquareMapper.mapFEN(notation);
      this.squareList.set(squares)
    })
    this.notationControl.setValue('rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR', {emitEvent: true});
  }
}
