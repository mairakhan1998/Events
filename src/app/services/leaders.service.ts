import { Injectable } from '@angular/core';
import { LEADER } from '../shared/leader';
import { leaders } from '../shared/leaders';
import { Observable , of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {


  getLeader(): Observable<LEADER[]>{
    return of(leaders).pipe(delay(2000));
    }

    getLeaders(id:string){
      return leaders.filter((leaders)=>(leaders.id === id))[0];
    }

  constructor() { }
}
