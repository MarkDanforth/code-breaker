import { Round } from '../models/round.model';
import { Game } from '../models/game.model';

import { Injectable } from '@angular/core';

@Injectable()
export class MastermindService {

  public game: Game;

  constructor() { }

  newGame(): Game {
    let i: number;
    const nextGame = new Game({ answer: new Round({})});

    for (i = 0; i < nextGame.numSlots; i++) {
      nextGame.answer.slots.push(Math.floor((Math.random() * nextGame.maxValues) + 1));
    }

    this.game = nextGame;
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
        this.game.answer.slots.forEach((answerElement, answerIndex) => {
          if (rowStatus[answerIndex] < 2 && guessElement == answerElement) {
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
