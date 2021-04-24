import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44322/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  update(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'cars/update',car);
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'cars/add', car);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrandid?brandid=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolorid?colorid=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsById(carId: number): Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbyid?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
}
