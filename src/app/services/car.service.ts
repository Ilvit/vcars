import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car, CarRequestDTO, CarResponseDTOPage, SelectedTaxations } from '../models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  host="https://vcars-services.onrender.com/";

  constructor(private http:HttpClient) { }


  public getCars(kw:string,p:number):Observable<CarResponseDTOPage>{
    return this.http.get<CarResponseDTOPage>(this.host+`user/cars?kw=${kw}&p=${p}`);
  }
  public getCar(id:number):Observable<Car>{
    return this.http.get<Car>(this.host+`user/cars/${id}`);
  }
  public deleteCar(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.host+`admin/cars/${id}`);
  }
  public getSelectedTaxationsCars(kw:string,p:number, selectedList:SelectedTaxations[]):Observable<CarResponseDTOPage>{
    return this.http.post<CarResponseDTOPage>(this.host+`user/cars/taxations?kw=${kw}&p=${p}`, selectedList);
  }
  saveCar(car:CarRequestDTO){
    return this.http.post<Car>(this.host+`admin/cars`, car); 
  }
  updateCar(car:Car, id:number){
    return this.http.put<Car>(this.host+`admin/cars/${id}`,car);
  }
}
