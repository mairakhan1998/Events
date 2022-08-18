import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormBuilder , FormControl,FormGroup , FormsModule } from '@angular/forms';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { ReactiveFormsModule  } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { baseurl } from './shared/baseURL';
import { ContentComponent } from './content/content.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import {style, trigger, state, animate, transition } from '@angular/animations';
import { DishServiceService } from './services/dish-service.service';
import { LeadersService } from './services/leaders.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    ContentComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    LoginComponent
  ],
  providers: [ DishServiceService, LeadersService, {provide:'baseURL',useValue:baseurl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
