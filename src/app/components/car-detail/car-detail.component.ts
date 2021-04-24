import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailAndImagesDto } from 'src/app/models/carAndImagesDto';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  
  constructor(private carImageService: CarImageService, 
    private carService: CarService, private activatedRoute: ActivatedRoute,
    private carDetailService:CarDetailService) { }

  // carImages!: CarImage[];
  cars: CarDetail[];
  car:CarDetail;
  images:string[]
  // carDetails :Car[]
  dataLoaded: boolean = false;
  imageBasePath="https://localhost:44322/";
  default="images/default.png"


  ngOnInit(): void {
    // console.log(this.cars);
    // console.log(this.carImages);
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]){
      this.getCarDetailsByCarId(params["carId"]);
      // this.getCarImagesByCarId(params["carId"]);
      }
    });
  }

  getCarDetailsByCarId(carId:number) {
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response => {
      this.cars = response.data;
      this.car = response.data[0];
      this.images = this.car.imagePath;
      console.log(this.cars)
      this.dataLoaded = response.success;
    })
  }

  // getCarImagesByCarId(carId: number) {
  //   this.carImageService.getCarImagesByCarId(carId).subscribe(resp => {
  //     this.carImages = resp.data;
  //   })
  // }
  
  setImageClass(imagePath:string){
    console.log(this.images)
    if(imagePath === this.images[0]){
      return "carousel-item active"
    }else{
      return "carousel-item"
    }
  }

  // getSliderClass(index: number) {
  //   if (index == 0) {
  //     return 'carousel-item active';
  //   } else {
  //     return 'carousel-item';
  //   }
  // }

  // setImage() {

  //   for (let i = 0; i < this.carImages.length; i++) {
  //     const carImage = this.carImages[i];
  //     if (carImage.imagePath) {
  //       return environment.staticFilesUrl + carImage.imagePath;
  //     }
  //   }
  //   return environment.staticFilesUrl + "\\images\\logo.jpg";
  // }


  // getCarDetailsByBrandId(brandId:number){
  //   this.carDetailService.getCarDetailsByBrandId(brandId).subscribe(response=>{
  //     this.cars=response.data
  //     this.dataLoaded=true;
  //   })
  //   }

  //   getCarDetailsByColorId(colorId:number){
  //     this.carDetailService.getCarDetailsByColorId(colorId).subscribe(response=>{
  //       this.cars=response.data
  //       this.dataLoaded=true;
  //     })
  //     }
}

