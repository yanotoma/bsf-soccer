import { Player } from './player/player';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{

  teamA: Array<Player> = [
    { number: 1, name: 'C', team: 'TEAM A' },
    { number: 2, name: 'B', team: 'TEAM A' },
    { number: 3, name: 'A', team: 'TEAM A' },
    { number: 4, name: 'A', team: 'TEAM A' },
    { number: 5, name: 'A', team: 'TEAM A' },
    { number: 6, name: 'A', team: 'TEAM A' },
    { number: 7, name: 'A', team: 'TEAM A' },
    { number: 8, name: 'A', team: 'TEAM A' },
    { number: 9, name: 'A', team: 'TEAM A' },
    { number: 10, name: 'A', team: 'TEAM A' },
  ];

  teamB: Array<Player> = [
    { number: 1, name: 'B', team: 'TEAM B' },
    { number: 2, name: 'B', team: 'TEAM B' },
    { number: 3, name: 'B', team: 'TEAM B' },
    { number: 4, name: 'B', team: 'TEAM B' },
    { number: 5, name: 'B', team: 'TEAM B' },
    { number: 6, name: 'B', team: 'TEAM B' },
    { number: 7, name: 'B', team: 'TEAM B' },
    { number: 8, name: 'B', team: 'TEAM B' },
    { number: 9, name: 'B', team: 'TEAM B' },
    { number: 10, name: 'B', team: 'TEAM B' },
  ];

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }

  ngOnChanges(changes) {
    console.log('changes', changes);
  }
}
