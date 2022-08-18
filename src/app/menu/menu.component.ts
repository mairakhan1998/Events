import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishServiceService } from '../services/dish-service.service';
import { LeadersService } from '../services/leaders.service';
import { LEADER } from '../shared/leader';
import { baseurl } from '../shared/baseURL';
import { subscribeOn, Subscription } from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  selectedDish:Dish | undefined;
  public dishes:Dish[] | undefined;
  public array:string[] =["weekly" , "monthly" , "daily" , "adhoc" , "annually"];
  

  constructor(private dishService:DishServiceService,  
    @Inject('baseurl') private baseUrl:any ){}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

  public consoleTestMethod(){
    console.log("Something");
    alert("Attention");
  }

  public method(obj:any, key:any){
    let anotherArray:Array<any> =[];
    let i=0;
    if(obj[key] !== undefined){
      obj[key].sort().forEach(function(v:any,i:any){
        anotherArray.push({value:v,label:v,guid:i,name:v});
        i++;
      });
    }
    return anotherArray;
  }

  public calling(){
console.log(this.method(this.array,"weekly"));
  }



 /* onSelect(dish:Dish){
    this.selectedDish=dish;
  }*/

}
