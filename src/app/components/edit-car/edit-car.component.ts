import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, CarTaxation } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  editCarFormGroup!:FormGroup;
  title:string="EDIT THE CAR";
  carId!:number;
  car!:Car;
 
  constructor(private router:Router,private activatedRoute:ActivatedRoute, private fb:FormBuilder,
    private carService:CarService){}

  ngOnInit(): void {
    this.carId=this.activatedRoute.snapshot.params['id'];
    this.carService.getCar(this.carId).subscribe({
      next:carresdto=>{     
        this.car=carresdto;
        this.editCarFormGroup=this.fb.group({      
          mark:this.fb.control(carresdto.mark,[Validators.required]),
          matriculation:this.fb.control(carresdto.matriculation,[Validators.required]),
          chassisNumber:this.fb.control(carresdto.chassisNumber,[Validators.required]),
          category:this.fb.control(carresdto.category,[Validators.required]),
          ownerId:this.fb.control(carresdto.owner.id, [Validators.required, Validators.min(1)]),
          carTaxations:this.fb.array(carresdto.carTaxations)
        })
      },error:err=>{
        console.log(err);
      }
    })
  }
  updateCar(){  
    this.carService.updateCar(this.editCarFormGroup.value,this.carId).subscribe({
      next:carresdto=>{
        alert(JSON.stringify(carresdto)+"\n UPDATED SUCCESSFULLY");
        this.gotoCars();
      },error:err=>{
        alert("UPDATE FAILED!");
      }
    })
  }
  gotoCars(){
    this.router.navigateByUrl("user/cars");
  }
}
