import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { TaxationsComponent } from './components/taxations/taxations.component';
import { LoginComponent } from './components/login/login.component';
import { AccessdeniedComponent } from './components/accessdenied/accessdenied.component';
import { UserTemplateComponent } from './components/user-template/user-template.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { AppUsersComponent } from './components/app-users/app-users.component';
import { EditAppuserComponent } from './components/edit-appuser/edit-appuser.component';
import { ConnectedAppuserComponent } from './components/connected-appuser/connected-appuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    NewCarComponent,
    EditCarComponent,
    TaxationsComponent,
    LoginComponent,
    AccessdeniedComponent,
    UserTemplateComponent,
    NavBarComponent,
    AppUsersComponent,
    EditAppuserComponent,
    ConnectedAppuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
