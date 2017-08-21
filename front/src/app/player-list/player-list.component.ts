import { PlayerService } from '../player/player.service';
import { Observable, Subject } from 'rxjs/Rx';

import { Player } from '../player/player';
import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() teamName: string;
  @Input() set subject(value: Subject<Player[]>){
    if(value){
      this.observable = value.asObservable();
      this.subscribe();
    }
  }

  observable: Observable<Player[]>;

  playersToShow: Array<Player>;
  

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
   
  }

  subscribe(){
    this.observable.subscribe( players => {
      this.playersToShow = players.slice().sort( (a, b) => a.name.toLocaleLowerCase() > b.name.toLowerCase() ? 1 : 0 );
    });
  }



}
