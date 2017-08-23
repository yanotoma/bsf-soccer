import { PlayerService } from '../player/player.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Player } from '../player/player';
import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck } from '@angular/core';

import * as _ from "lodash";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() teamName: string;

  playersToShow: Array<Player> = [];
  

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
   this.subscribe();
  }

  subscribe(){
    
    this.playerService.getObservable().subscribe( players => {
      const grouped = _.groupBy(players, 'team');
      console.log(grouped[this.teamName]);
      if(grouped[this.teamName]){
        this.playersToShow = grouped[this.teamName].sort( (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0 );
      }
    });
  }



}
   