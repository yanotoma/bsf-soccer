import { Player } from './player';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {

    baseUrl = 'http://localhost:3000';

    constructor(private http: Http) { }

    getPlayersByTeam(team: string): Observable<any[]> {
        const url = `${this.baseUrl}/players`;

        let options: RequestOptions = new RequestOptions({
            params: { team: team }
        });

        return this.http.get(url, options).map(result => result.json());
    }


}