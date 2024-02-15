import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRole, AppUser, AppUserRequestDTO, AppUsersDTOList } from 'src/app/models/user.model';
import { AppUserService } from 'src/app/services/app-user.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css']
})
export class AppUsersComponent implements OnInit {

  appUsersDTOList!: AppUsersDTOList;
  appUser!:AppUser;
  userToDelete!:AppUser;
  appUserRequestDTO!:AppUserRequestDTO;
  newAppUserFormGroup!:FormGroup;

  constructor(private appUserService:AppUserService, private fb:FormBuilder,
    private router:Router ){}

  ngOnInit(): void {
    this.getAppUsers();
    this.newAppUserFormGroup=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control(""),
      password2:this.fb.control(""),
      mail:this.fb.control("")
    });       
  }
  getAppUsers(){
    this.appUserService.getAllAppUsers().subscribe({
      next:data=>{
        this.appUsersDTOList=data;
      },error:err=>console.log(err)
    })
  }
  confirmDeleteAppUser(appUser:AppUser) {
    this.userToDelete=appUser;
    const modalConfirmDelete=document.getElementById('confirmDelete');
    if(modalConfirmDelete!=null){
      modalConfirmDelete.style.display='block';
    }     
  }  
  editAppUser(user:AppUser) {
 //   this.router.navigateByUrl(`/user/edit-appuser/${appUser.id}`);
    this.router.navigateByUrl(`/user/edit-appuser/${user.id}`);
  }
  showDetails(user:AppUser){
    this.appUser=user;
    const modalShowDetails=document.getElementById('userDetailsId');
    if(modalShowDetails!=null){
      modalShowDetails.style.display='block';
    }
  }
  newAppUser(){
    const modalNewAppUser=document.getElementById('newAppUserForm');
    if(modalNewAppUser!=null){
      modalNewAppUser.style.display='block';
    }    
  }
  saveAppUser(){    
    let mdp=this.newAppUserFormGroup.value.password;
    let mdp2=this.newAppUserFormGroup.value.password2;
    if(mdp==mdp2){ 
      this.appUserService.addNewAppUser(this.newAppUserFormGroup.value).subscribe({
        next:isDone=>{
         this.getAppUsers();
         const modalNewAppUser=document.getElementById('newAppUserForm');
         if(modalNewAppUser!=null){
            modalNewAppUser.style.display='none';
         } 
        },error:err=>{
          console.log(err);
        }
      })
    }
  }
  exitDelete(){
    const modalConfirmDelete=document.getElementById('confirmDelete');
    if(modalConfirmDelete!=null){
      modalConfirmDelete.style.display='none';
    }    
  }
  deleteAppUser(appUserId:number){
    this.appUserService.deleteAppUser(appUserId).subscribe({
      next:isDone=>{
        this.getAppUsers();
      },error:err=>console.log(err)
    })
  }

}
