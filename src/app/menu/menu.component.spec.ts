import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Dish } from '../shared/dish';
import { DebugElement, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DishServiceService } from '../services/dish-service.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let service:DishServiceService;
  let details:Dish[];
  let outcome:Boolean;
  let date:Date;

  details =[
    {
      id: 0,
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: 4.99,
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'}]
    },{
    id: 1,
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: 1.99,
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments: [
        {
            rating: 5,
            comment: 'Imagine all the eatables, living in conFusion!',
            author: 'John Lemon',
            date: '2012-10-16T17:57:28.556094Z'}]
        }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MenuComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MenuComponent);
    service = TestBed.get(DishServiceService);
  });
  it('should render the component',()=>{
    const fixtur = TestBed.createComponent(MenuComponent);
    const componen = fixtur.componentInstance;
    //mockDishService.getDishes.and.returnValue(of(details));
    let spy = spyOn(service,'getDishes').and.returnValue(of(details));
    service.getDishes().subscribe();
    expect(spy).toHaveBeenCalled();
    
    
  });

  /*it('console method test',() =>{
    spyOn(console, 'log');
    const fixtur = TestBed.createComponent(MenuComponent);
    const componen = fixtur.componentInstance;
    componen.consoleTestMethod();
    fixtur.detectChanges();
    // do your stuff that should log something
    expect(console.log).toHaveBeenCalledWith("Something");
    expect(alert()).toHaveBeenCalled();
  })*/

  /*beforeEach(() => {
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', () => {
    const fixtur = TestBed.createComponent(MenuComponent);
    const componen = fixtur.componentInstance;
    expect(componen).toBeTruthy();
  });

  /*it('item number check',() =>{
    const fixtur = TestBed.createComponent(MenuComponent);
    const componen = fixtur.componentInstance;
    //expect(component.dishes[1].name).toBeFalsy();
    
    //expect(component.dishes[1].name).toBe('Zucchipakoda');
  });*/

  /*it('should use dishes in the template', () => {
    fixture.detectChanges();

    let de:DebugElement;
    let el:HTMLElement;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    
    expect(el.textContent).toContain(Dish.name.toUpperCase());

  });*/
  /*it('service test',()=>{
    mockDishService.getDishes.and.returnValue(of(details))
    fixture.detectChanges();
    //expect(true).toBe(true);
    //expect(fixture.componentInstance.dishes?.length).toBe(9);
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(1);
  })*/
});
