import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser, AppUserRequestDTO, AppUsersDTOList, ConnectedUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  host="https://vcars-services.onrender.com/";
  constructor(private http:HttpClient) { }

  getAllConnectedUsers(){
    return this.http.get<ConnectedUser[]>(this.host+`users/connected-users`);
  }
  disconnectUser(jwt:string){
    return this.http.post<ConnectedUser>(this.host+`users/connected-users`,jwt);
  }
  getAllAppUsers(){
    return this.http.get<AppUsersDTOList>(this.host+`users`);
  }
  getAppUser(userId:number){
    return this.http.get<AppUser>(this.host+`users/${userId}`);
  }
  addNewAppUser(appUserRequestDTO:AppUserRequestDTO){
    return this.http.post<boolean>(this.host+`users`,appUserRequestDTO);
  }
  updateAppUser(userId:number, appUserRequestDTO:AppUserRequestDTO){
    return this.http.put<boolean>(this.host+`users/${userId}`,appUserRequestDTO);
  }
  deleteAppUser(userId:number){
    return this.http.delete<boolean>(this.host+`users/${userId}`);
  }
}
