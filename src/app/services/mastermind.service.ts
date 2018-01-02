import { Round } from '../models/round.model';
import { Game } from '../models/game.model';

import { Injectable } from '@angular/core';

@Injectable()
export class MastermindService {

  public game: Game;

  constructor() { }

  newGame(): Game {
    const answer = new Round({ slots: [Math.floor((Math.random() * 6) + 1),
      Math.floor((Math.random() * 6) + 1),
      Math.floor((Math.random() * 6) + 1),
      Math.floor((Math.random() * 6) + 1)] });

    this.game = new Game({ answer: answer });

    this.submitGuess([ 1, 2, 3, 4 ]);
    this.submitGuess([ 2, 3, 4, 1 ]);
    this.submitGuess([ 3, 4, 1, 2 ]);

    return this.game;
  }

  submitGuess(guess: number[]) {
    if (guess.length == this.game.answer.slots.length) {
    const round = new Round( {slots: guess} );

    const rowStatus = [];

    // check for right number right place
    round.slots.forEach((element, index) => {
      if (this.game.answer.slots[index] == element) {
        round.rnrp += 1;
        rowStatus[index] = 3;
      } else {
        rowStatus[index] = 0;
      }
    });

    // check for right number wrong place
    round.slots.forEach((guessElement, guessIndex) => {
      if (rowStatus[guessIndex] === 0 || rowStatus[guessIndex] === 2) {
        console.log('GIdx: ' + guessIndex + ', GStatus: ' + rowStatus[guessIndex] + ', GVal: ' + guessElement);
        this.game.answer.slots.forEach((answerElement, answerIndex) => {
          console.log('AIdx: ' + answerIndex + ', AStatus: ' + rowStatus[answerIndex] + ', AVal: ' + answerElement);

          if (rowStatus[answerIndex] < 2 && guessElement === answerElement) {
            console.log('Match!')
            round.rnwp += 1;
            rowStatus[guessIndex] += 1;
            rowStatus[answerIndex] += 2;
          }
        });
      }
    });

    this.game.rounds.push(round);
  }
  }
}
