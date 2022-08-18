import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { LEADER } from '../shared/leader';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 lead!:LEADER[];

  

  constructor() { }

  ngOnInit(): void {
  }

  

}
