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

  constructor(private mastermindService: MastermindService) { }

  ngOnInit() {
    this.game = this.mastermindService.newGame();
  }
}
