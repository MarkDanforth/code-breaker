import { Round } from '../models/round.model';
import { Game } from '../models/game.model';

import { Injectable } from '@angular/core';

@Injectable()
export class MastermindService {

  public game: Game;

  constructor() { }

  newGame(): Game {
    let i: number;
    const nextGame = new Game({ answer: new Round({}) });

    for (i = 0; i < nextGame.numSlots; i++) {
      nextGame.answer.slots.push(Math.floor((Math.random() * nextGame.maxValues) + 1));
    }

    this.game = nextGame;
    return this.game;
  }

  submitGuess(guess: number[]) {
    if (guess.length == this.game.answer.slots.length) {
      const round = new Round({ slots: guess });

      const rowStatus = [];

      // check for right number right place
      round.slots.forEach((element, index) => {
        if (this.game.answer.slots[index] == element) {
          round.hints.push(2);
          rowStatus[index] = 2;
        } else {
          rowStatus[index] = 0;
        }
      });

      this.game.answer.slots.forEach((answerElement, answerIndex) => {
        if (rowStatus[answerIndex] != 2) {
          for (let i = 0; i < round.slots.length; i++) {
            if (rowStatus[i] == 0 && round.slots[i] == answerElement) {
              round.hints.push(1);
              rowStatus[i] = 1;
              break;
            }
          }
        }
      });

      while (round.hints.length < this.game.answer.slots.length) {
        round.hints.push(0);
      }

      this.game.rounds.push(round);
    }
  }
}
