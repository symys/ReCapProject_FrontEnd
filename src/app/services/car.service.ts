import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44322/api/"

  constructor(private httpClient : HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


   getCarsByBrandId(brandId:number) : Observable<ListResponseModel<Car>>{
     let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }

   getCarsByColorId(colorId:number) : Observable<ListResponseModel<Car>>{
     let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId="+colorId
     return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsById(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath = environment.apiUrl+"/cars/getbyid?carId="+carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
}
