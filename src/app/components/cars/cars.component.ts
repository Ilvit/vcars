import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Car, CarResponseDTOPage } from 'src/app/models/car.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  caresDtoPage!:CarResponseDTOPage;
  keyword:string="";
  theCar!:Car;
  page:number=0;
  searchFormGroup!:FormGroup
  
  constructor(private carService:CarService, private fb:FormBuilder, private router:Router,
          public authService:AuthenticationService){}

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      skeyword: this.fb.control("")
    });
    this.getCars(this.keyword,this.page);
  }
  getCars(keyword:string, page:number){
    this.keyword=keyword;
    this.page=page; 
    
    this.carService.getCars(this.keyword, this.page).subscribe({
      next:cp=>{
        this.caresDtoPage=cp;
      }, error: err=>{
        console.log(err);
      }
    })
  }
  deleteCar(car:Car){
    if(confirm("Do you want to delete the car?")){
      this.page=0;
      this.carService.deleteCar(car.id).subscribe({
        next: isDone=>{        
          this.getCars(this.keyword,this.page);
          alert("The car has been deleted successfully!")
        }, error: err=>{
          alert("Sorry, car Not deleted !");
        }
     })
    }    
  }
  gotoPage(p:number){
    this.getCars(this.keyword, p-1);
  }
  searchCars(){
    this.page=0;
    this.keyword=this.searchFormGroup.value.skeyword;
    this.getCars(this.keyword,this.page);
  }
  editCar(car:Car){
    this.router.navigateByUrl(`/user/edit-car/${car.id}`);
  }
  showDetails(car:Car){
    this.theCar=car;
    const modalShowDetails=document.getElementById('carDetailsId');
    if(modalShowDetails!=null){
      modalShowDetails.style.display='block';
    }
  }

}
