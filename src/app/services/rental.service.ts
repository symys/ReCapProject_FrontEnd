import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentingCar:Rental

  apiUrl = "https://localhost:44322/api/rentals/"

  constructor(private httpClient : HttpClient) { }

  getRentals() : Observable<ListResponseModel<RentalDetail>>{
    let newPath = this.apiUrl + "getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }

  getRentalDetailByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getrentalbycarid?rentid="+carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  setRentingCar(rental: Rental) {
    this.rentingCar = rental;
 }

 getRentingCar() {
    return this.rentingCar;
 }

 removeRentingCar() {
    this.rentingCar == null
 }

 add(rental: Rental): Observable<ResponseModel> {
   let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModel>(newPath, rental);
 }
}  

