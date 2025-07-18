import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegComponent} from './reg/reg.component';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import {CategoriesFormComponent} from './dashboard/categories-form/categories-form.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'reg', component: RegComponent},
{path: 'auth', component: AuthComponent},
{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
{path: 'categories/new', component: CategoriesFormComponent},
{path: 'categories/:id', component: CategoriesFormComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
