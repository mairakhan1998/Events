import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Params , ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishServiceService } from '../services/dish-service.service';
import { switchMap } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css'],
  animations:[
    trigger('visibility',[
      state('shown',style({
        transform:'scale(1.0)',opacity:0})),
        state('hidden',style({
          transform:'scale(0.5)',opacity:1
        })),
        transition('* => *',animate('0.5s ease-in-out'))
    ])
  ]
})
export class DishDetailComponent implements OnInit {

  dish:Dish | undefined;
  dishId:number[] | undefined;
  prev:number | undefined;
  next:number | undefined;
  visibility!:'shown';


  constructor(private dishService:DishServiceService, private location:Location) { }

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe(dishId => this.dishId = dishId);
    
  }

  getBack():void{
    this.location.back;
  }

  Dishes:Dish[] = DISHES;
  selectedDish = this.Dishes[0];

}
