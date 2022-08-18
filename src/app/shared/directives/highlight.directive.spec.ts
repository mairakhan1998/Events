import { Component, ElementRef, Renderer2, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { MenuComponent } from '../../menu/menu.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

@Component({
  template:'menu.component.html'
})

class HighlightDirectiveTest{

}
describe('HighlightDirective', () => {  
 let comp:MenuComponent;
 let fixture:ComponentFixture<MenuComponent>
 let spp:DebugElement;

 beforeEach(() => {
  TestBed.configureTestingModule({
    declarations:[HighlightDirective,HighlightDirectiveTest]
});
  fixture=TestBed.createComponent(MenuComponent);
  comp = fixture.componentInstance;
        spp = fixture.debugElement.query(By.css('li'));
});

/*it('hovering over input', () => {
  spp.triggerEventHandler('mouseenter', null);
  fixture.detectChanges();
  expect(spp.nativeElement).toBe('<li class="list-group-item"></li>');

  spp.triggerEventHandler('mouseleave', null);
  fixture.detectChanges();
  expect(spp.nativeElement).toBe('<li>');
});*/



});
