import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  isAuthenticated:boolean=false;
  roles:any; 
  username!:string;
  accessToken:any;
  host="https://vcars-services.onrender.com/";

  constructor(private http:HttpClient, private router:Router) { }

  public login(username:string, password:string){
    let options={
      headers:new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }    
    let params=new HttpParams().set("username",username).set("password",password);
    return this.http.post(this.host+`authentication/login`,params,options)
  }

  loadProfile(data:any){
    this.isAuthenticated=true;
    this.accessToken=data['access-token'];
    let decodedJwt:any=jwtDecode(this.accessToken);
    this.username=decodedJwt.sub;
    this.roles=decodedJwt.scope;
    window.localStorage.setItem("jwt-token",this.accessToken);
  } 
  loadJwtTokenFromLocalStorage(){
    let token=window.localStorage.getItem("jwt-token");
    if(token){
      this.loadProfile({"access-token":token});
      this.router.navigateByUrl("/user/cars");
    }
  }
  logout() {
    this.isAuthenticated=false;
    this.accessToken=undefined;
    this.username="";
    this.roles=[];
    window.localStorage.removeItem("access-token");
  }

}
