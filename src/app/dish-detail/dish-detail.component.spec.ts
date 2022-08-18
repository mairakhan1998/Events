import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailComponent } from './dish-detail.component';
import { DishServiceService } from '../services/dish-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DishDetailComponent', () => {
  let component: DishDetailComponent;
  let fixture: ComponentFixture<DishDetailComponent>;
  let mockDishService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishDetailComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
});
