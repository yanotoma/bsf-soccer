import { Observable } from 'rxjs/Rx';

import { Player } from '../player/player';
import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnChanges, DoCheck {

  @Input() teamName: string;
  @Input() players: Array<Player>;

  playersToShow: Array<Player>;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('change!');
  }

  ngDoCheck() {
    console.log('Check!');
    this.playersToShow = this.players.slice().sort( (a, b) => a.name.toLocaleLowerCase() > b.name.toLowerCase() ? 1 : 0 );
    console.log(this.playersToShow);
 }


}
