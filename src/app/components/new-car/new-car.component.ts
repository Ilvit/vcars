import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarResponseDTOPage } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  caresDtoPage!:CarResponseDTOPage;
  newCarFormGroup!:FormGroup;
  public title:string="ADD A NEW CAR";

  constructor(private router:Router ,private fb:FormBuilder, private carService:CarService){}

  ngOnInit(): void {
    this.newCarFormGroup=this.fb.group({
      mark:this.fb.control("",[Validators.required]),
      matriculation:this.fb.control("",[Validators.required]),
      chassisNumber:this.fb.control("",[Validators.required]),
      category:this.fb.control("",[Validators.required]),
      ownerId:this.fb.control(0, [Validators.required, Validators.min(1)])
    })
  }
  addNewCar(){
    this.carService.saveCar(this.newCarFormGroup.value).subscribe({
      next:crdto=>{
        alert("The car "+ JSON.stringify(crdto)+" has been saved successfully !"); 
        this.gotoCars();       
      }, error:err=>alert("The car has not been saved")
    })
  }
  gotoCars(){
    this.router.navigateByUrl("user/cars");
  }

}
