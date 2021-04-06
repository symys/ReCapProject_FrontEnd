import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44322/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
