import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public authService:AuthenticationService, private router:Router){}


  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
