import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishServiceService {

  getDishes(): Observable<Dish[]>{
    return of(DISHES).pipe(delay(2000));

  }
  getDish(id:number){
    return DISHES.filter((dish) =>(dish.id ===id))[0];
  }

  getDishIds(): Observable<number[] | any>{
    return of(DISHES.filter(dish => dish.id));
  }

  constructor() { }
}
