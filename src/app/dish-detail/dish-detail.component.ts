import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Params , ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishServiceService } from '../services/dish-service.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish:Dish | undefined;
  dishId:number[] | undefined;
  prev:number | undefined;
  next:number | undefined;


  constructor(private dishService:DishServiceService, private location:Location , private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  getBack():void{
    this.location.back;
  }

  Dishes:Dish[] = DISHES;
  selectedDish = this.Dishes[0];

}
