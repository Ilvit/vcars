import { Component, OnInit } from '@angular/core';
import { ConnectedUser } from 'src/app/models/user.model';
import { AppUserService } from 'src/app/services/app-user.service';

@Component({
  selector: 'app-connected-appuser',
  templateUrl: './connected-appuser.component.html',
  styleUrls: ['./connected-appuser.component.css']
})
export class ConnectedAppuserComponent implements OnInit {


  connectedUsers!:ConnectedUser[];

  constructor(private appUserService:AppUserService){}

  ngOnInit(): void {
    this.getAllConnectedUsers();
  }
  disconnectUser(jwt:string){
    this.appUserService.disconnectUser(jwt).subscribe({
      next:isDone=>{
        this.getAllConnectedUsers();
      }
    })
  }
  getAllConnectedUsers(){
    this.appUserService.getAllConnectedUsers().subscribe({
      next:data=>{
        this.connectedUsers=data;
      },error:err=>console.log(err)
    })
  }
}
