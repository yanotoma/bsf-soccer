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

  teamASubject: Subject<Player[]> = new Subject<Player[]>();
  teamBSubject: Subject<Player[]> = new Subject<Player[]>();

  constructor(private playerService: PlayerService){}

  ngOnInit() {
    this.observable = Observable.zip(this.playerService.getPlayersByTeam(this.teamA), this.playerService.getPlayersByTeam(this.teamB));
    
    this.observable.subscribe(([a, b]) => {
      this.teamAPlayers = a;
      this.teamBPlayers = b;
      this.teamASubject.next(this.teamAPlayers);
      this.teamBSubject.next(this.teamBPlayers);
    });
  }

  ngOnChanges(changes) {
    console.log('changes', changes);
  }
}
