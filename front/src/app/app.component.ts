import { Player } from './player/player';
import { PlayerService } from './player/player.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{

  teamA: string = 'FC Barcelona';
  teamB: string = 'Real Madrid';
  observable: Observable<any>;
  teamAPlayers: Player[] = [];
  teamBPlayers: Player[] = [];

  constructor(private playerService: PlayerService){}

  ngOnInit() {

    this.playerService.getAllPlayers()
      .subscribe( players => {
        this.playerService.emmitUpdate(players);
      });

  }

  ngOnChanges(changes) {
    console.log('changes', changes);
  }
}
