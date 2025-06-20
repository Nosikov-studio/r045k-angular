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

import { FormsModule } from '@angular/forms';
import {CheckformService} from './checkform.service';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//    RouterModule.forRoot(appRoute)
    FormsModule
  ],
  providers: [CheckformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
