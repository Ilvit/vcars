import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router, public authService:AuthenticationService){}

  gotoUsers(){
    this.router.navigateByUrl("/user/app-users");
  }
  gotoConnectedUsers(){
    this.router.navigateByUrl("/user/app-users/connected-appusers");
  }
  gotoTaxations(){
    this.router.navigateByUrl("/user/taxations");
  }
  gotoCars(){
    this.router.navigateByUrl("/user/cars");
  }

}
