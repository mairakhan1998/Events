import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  @Input()
  dish:Dish | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  Dishes:Dish[] = DISHES;
  selectedDish = this.Dishes[0];

}
