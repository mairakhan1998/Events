import { Component, OnInit } from '@angular/core';
import { record } from './records';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
   public event:any = [{
     id:1,
     name: "event created",
     place:"lucknow",
     country:"india"
   },
   {
    id:2,
    name: " 2nd event created",
    place:"Delhi",
    country:"india"
   },
   {
    id:3,
    name: "3rd event created",
    place:"lundon",
    country:"UK"
   }]

  ngOnInit(): void {
  }

}
