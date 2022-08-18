import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseurl } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class DishServiceService {

  constructor(private http: HttpClient) { 
    
  }

  getDishes(): Observable<Dish[]>{
    return this.http.get<Dish[]>(baseurl + 'dishes');

  }
  getDish(id:number){
    return DISHES.filter((dish) =>(dish.id ===id))[0];
  }

  getDishIds(): Observable<number[] | any>{
    return of(DISHES.filter(dish => dish.id));
  }

  
}
