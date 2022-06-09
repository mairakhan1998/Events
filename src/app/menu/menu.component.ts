import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishServiceService } from '../services/dish-service.service';
import { LeadersService } from '../services/leaders.service';
import { LEADER } from '../shared/leader';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedDish:Dish | undefined;
  dishes:Dish[] | undefined;

  constructor(private dishService:DishServiceService) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

  onSelect(dish:Dish){
    this.selectedDish=dish;
  }

}
