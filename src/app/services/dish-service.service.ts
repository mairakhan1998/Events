import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishServiceService {

  getDishes(): Dish[]{
    return DISHES;

  }

  constructor() { }
}
