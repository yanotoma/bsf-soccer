import { Player } from './player';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {

    private baseUrl = 'http://localhost:3000';
    private subject: Subject<Player[]> = new Subject<Player[]>();

    constructor(private http: Http) { }

    getAllPlayers(): Observable<Player[]> {
        const url = `${this.baseUrl}/players`;
        return this.http.get(url).map(result => result.json());
    }

    getPlayersByTeam(team: string): Observable<Player[]> {
        const url = `${this.baseUrl}/players`;

        let options: RequestOptions = new RequestOptions({
            params: { team: team }
        });

        return this.http.get(url, options).map(result => result.json());
    }

    //observable
    getObservable(): Observable<Player[]>{
        return this.subject.asObservable();
    }

    emmitUpdate(value: Player[]){
        this.subject.next(value);
    }


}