import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { TaxationsComponent } from './components/taxations/taxations.component';
import { LoginComponent } from './components/login/login.component';
import { AccessdeniedComponent } from './components/accessdenied/accessdenied.component';
import { UserTemplateComponent } from './components/user-template/user-template.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AppUsersComponent } from './components/app-users/app-users.component';
import { EditAppuserComponent } from './components/edit-appuser/edit-appuser.component';
import { ConnectedAppuserComponent } from './components/connected-appuser/connected-appuser.component';

const routes: Routes = [
  {path:"login", component:LoginComponent },
  {path:"", redirectTo:"/login", pathMatch:'full'},
  
  {path:"user", component:UserTemplateComponent, canActivate:[AuthenticationGuard],  children:[
    {path:"home", component:HomeComponent},
    {path:"cars", component:CarsComponent},
    {path:"accessDenied", component:AccessdeniedComponent},
    {path:"taxations", component:TaxationsComponent},
    {path:"edit-appuser/:id", component:EditAppuserComponent, canActivate:[AuthorizationGuard], data:{role:'USER_MANAGER'}},
    {path:"app-users", component:AppUsersComponent, canActivate:[AuthorizationGuard], data:{role:'USER_MANAGER'}},
    {path:"app-users/connected-appusers", component:ConnectedAppuserComponent, canActivate:[AuthorizationGuard], data:{role:'USER_MANAGER'}},
    {path:"new-car", component:NewCarComponent, canActivate: [AuthorizationGuard], data:{role:"CAR_MANAGER"} },
    {path:"edit-car/:id", component:EditCarComponent, canActivate: [AuthorizationGuard], data:{role:"ADMIN"}}
  ]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
