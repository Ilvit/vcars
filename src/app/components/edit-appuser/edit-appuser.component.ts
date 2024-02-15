import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from 'src/app/models/user.model';
import { AppUserService } from 'src/app/services/app-user.service';

@Component({
  selector: 'app-edit-appuser',
  templateUrl: './edit-appuser.component.html',
  styleUrls: ['./edit-appuser.component.css']
})
export class EditAppuserComponent implements OnInit {

  userToUpdate!:AppUser;
  appUserId!:number;
  editAppUserFormGroup!:FormGroup;

  constructor(private appUserService:AppUserService, private fb:FormBuilder,
    private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.appUserId=this.activatedRoute.snapshot.params['id'];
    this.appUserService.getAppUser(this.appUserId).subscribe({
      next:user=>{ 
        this.userToUpdate=user;
        this.editAppUserFormGroup=this.fb.group({
          username:this.fb.control(this.userToUpdate.username),
          password:this.fb.control(""),
          password2:this.fb.control(""),         
          mail:this.fb.control(this.userToUpdate.mail),
          userRoles:this.fb.array(this.userToUpdate.userRoles)
        }); 
      }, error:err=>{
        console.log(err);
      }
    })    
  }
  updateAppUser(){
    let mdp=this.editAppUserFormGroup.value.password;
    let mdp2=this.editAppUserFormGroup.value.password2;
    if(mdp==mdp2){
      this.appUserService.updateAppUser(this.appUserId, this.editAppUserFormGroup.value).subscribe({
        next:isUpdated=>{
          this.gotoUsers();
        }, error:err=>{
          console.log(err)
        }
      })
    }
  }
    
  gotoUsers(){
    this.router.navigateByUrl("/user/app-users");
  }
}