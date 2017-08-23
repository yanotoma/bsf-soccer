import { PlayerService } from '../player/player.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { Player } from '../player/player';
import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

import * as _ from "lodash";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  

  @Input() teamName: string;

  playersToShow: Array<Player> = [];
  subscription: Subscription;
  

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
   this.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscribe(){
    
    this.subscription = this.playerService.getObservable().subscribe( players => {
      const grouped = _.groupBy(players, 'team');
      console.log(grouped[this.teamName]);
      if(grouped[this.teamName]){
        this.playersToShow = grouped[this.teamName].sort( (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0 );
      }
    });
  }



}
   