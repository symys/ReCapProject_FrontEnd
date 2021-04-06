import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],  
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  filterText= "";
  filterColorText="";
  filterBrandText="";

  constructor(private carService : CarService, 
    private activatedRoute:ActivatedRoute, private httpClient:HttpClient,
    private toastrService:ToastrService, private cartService:CartService) { }

  ngOnInit(): void {
    console.log(this.cars)
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }else{
        this.getCars();
      }
    });
  }
   
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    });
  }

  getCarDetailsById(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath = environment.apiUrl+"/cars/getbyid?carId="+carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }

  addToCart(car:Car){
    this.toastrService.success("Sepete Eklendi",car.brandName)
    this.cartService.addToCart(car);
  }

 
}
