import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailAndImagesDto } from '../models/carAndImagesDto';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44322/api/"

  constructor(private httpClient:HttpClient) { }

  // getCarDetails():Observable<ListResponseModel<CarDetail>>{
  //   let newPath = this.apiUrl + "cars/getcardetails"
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  // }

  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbybrandid?brandid="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbycolorid?colorid="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsByCarId(carId:number){
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
