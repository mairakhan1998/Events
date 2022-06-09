import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedDish:Dish | undefined;
  dishes:Dish[] | undefined;

  constructor() { }


  ngOnInit(): void {
  }

}
