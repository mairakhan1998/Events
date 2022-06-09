import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'home',component: MenuComponent},
{path: '', redirectTo: '/menu', pathMatch: 'full'},
{path:'dishdetail/:id',component:DishDetailComponent},
{path: 'about',component:AboutComponent},
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
