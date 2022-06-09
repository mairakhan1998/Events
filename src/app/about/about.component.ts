import { Component, OnInit } from '@angular/core';
import { DishServiceService } from '../services/dish-service.service';
import { leaders } from '../shared/leaders';
import { LEADER } from '../shared/leader';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders: LEADER[] | undefined;
  funcCall(){
   
  }

  constructor(private leaderService:LeadersService) { }

  ngOnInit(): void {
    this.leaderService.getLeader().subscribe(leaders => leaders = leaders);
  }

}
