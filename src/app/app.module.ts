import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CheckformService} from './checkform.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { CategoriesFormComponent } from './dashboard/categories-form/categories-form.component';

// import { RouterModule, Routes } from '@angular/router';

// const appRoute: Routes = [
// {path: '', component: HomeComponent},
// {path: 'reg', component: RegComponent},
// {path: 'auth', component: AuthComponent},
// {path: 'dashboard', component: DashboardComponent},
// ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent,
    LoaderComponent,
    CategoriesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//    RouterModule.forRoot(appRoute)
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
