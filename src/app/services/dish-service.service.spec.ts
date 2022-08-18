import { TestBed } from '@angular/core/testing';

import { DishServiceService } from './dish-service.service';
import { DISHES } from '../shared/dishes';

describe('DishServiceService', () => {
  let service: DishServiceService;
  


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishServiceService);

  });

  /*8it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('method_test',()=>{
    expect(service.getDishes()).toHaveBeenCalled()
  })*/

});
