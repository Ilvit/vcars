import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car, CarResponseDTOPage, SelectedTaxations } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-taxations',
  templateUrl: './taxations.component.html',
  styleUrls: ['./taxations.component.css']
})
export class TaxationsComponent implements OnInit {

  searchFormGroup!:FormGroup;
  caresDtoPage!:CarResponseDTOPage;
  taxationsList!:SelectedTaxations[];
  keyword:string="";
  selTaxes!:Array<string>;
  page:number=0;
  checked:number=0;

  constructor(private fb:FormBuilder, private carService:CarService){}


  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      skeyword: this.fb.control("")
    });
    this.getCars(this.keyword,this.page);
  }
  getCars(keyword:string,page:number){
    this.carService.getCars(keyword,page).subscribe({
      next:carsDtoPage=>{
        this.caresDtoPage=carsDtoPage;
        this.taxationsList=this.caresDtoPage.taxationsList;
      },error:err=>{
        console.log(err);
      }
    })
  }
  gotoPage(p:number){
    this.getCars(this.keyword, p-1);
  }
  searchCars(){
    this.page=0;
    this.keyword=this.searchFormGroup.value.skeyword;
    this.getCars(this.keyword,this.page);
  }
  chooseTaxations(){
    this.checked=0;
    this.selTaxes=[];
    this.taxationsList.forEach(t=>{
      if(t.selected){
        this.checked++;
        this.selTaxes.push(t.taxationName);
      }
    });

    if(this.checked==0){
      this.getCars(this.keyword,this.page);
    }else{
      this.carService.getSelectedTaxationsCars(this.keyword,this.page,this.taxationsList).subscribe({
        next:cardtoPage=>{
          this.caresDtoPage=cardtoPage;
          this.taxationsList=this.caresDtoPage.taxationsList;
        },error:err=>{
          console.log(err);
        }
      })
    }    
  }
}
