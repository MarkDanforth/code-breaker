import { Component, OnInit } from '@angular/core';
import { MastermindService } from './../../services/mastermind.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnInit {

  public game: Game;
  public guess = [];
  public error: string;

  constructor(private mastermindService: MastermindService) { }

  ngOnInit() {
    this.game = this.mastermindService.newGame();
    this.guess = new Array(this.game.numSlots).fill(0);
  }

  public makeGuess() {
    console.log(this.guess);
    if (this.guess.indexOf('0') < 0) {
      this.mastermindService.submitGuess(this.guess);
      this.error = null;
    } else {
      this.error = "Unexpected number in the baggi .. number area!"
    }
  }
}
