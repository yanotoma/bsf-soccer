import { PlayerService } from '../player/player.service';
import { Observable, Subject } from 'rxjs/Rx';


import { Player } from '../player/player';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-player-crud',
  templateUrl: './player-crud.component.html',
  styleUrls: ['./player-crud.component.css']
})
export class PlayerCrudComponent implements OnInit {

  @Input() players: Array<Player>;
  @Input() teamName: string;
  @Input() subject: Subject<Player[]>;

  MAX_PLAYERS = 11;
  showForm: Boolean = false;
  player: Player;
  isNew: Boolean;
  currentPlayer: number = -1;

  constructor() { }

  ngOnInit() {
    
  }

  resetPlayer() {
    this.currentPlayer = -1;
    this.player = {
      id: 0,
      number: 0,
      name: '',
      team: this.teamName
    };

    this.subject.next(this.players);
  }

  onNew() {
    if (this.players.length < this.MAX_PLAYERS) {
      this.resetPlayer();
      this.showForm = true;
      this.isNew = true;
    }
  }

  onCancelPlayer() {
    this.showForm = false;
    this.resetPlayer();
  }

  onAddPlayer() {

    this.players.push(this.player);
    this.showForm = false;
    this.resetPlayer();
  }

  onEditPlayer() {
    this.players[this.currentPlayer] = this.player;
    this.showForm = false;
    this.resetPlayer();
  }

  onSelectPlayer(index) {
    this.isNew = false;
    this.showForm = true;
    this.currentPlayer = index;
    this.player = this.players[index];
  }

  onRemovePlayer(index) {
    this.players.splice(index, 1);
  }

}
