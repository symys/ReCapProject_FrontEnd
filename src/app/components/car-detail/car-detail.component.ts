import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages!: CarImage[];
  cars: CarDetail;
  dataLoaded: boolean = false;

  constructor(private carImageService: CarImageService, 
    private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.cars);
    console.log(this.carImages);
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetailsById(params["carId"]);
      this.getCarImagesByCarId(params["carId"]);
    })
  }

  getCarDetailsById(carId:number) {
    this.carService.getCarDetailsById(carId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = response.success;
    })
  }

  getCarImagesByCarId(imageId: number) {
    this.carImageService.getCarImagesByCarId(imageId).subscribe(resp => {
      this.carImages = resp.data;
    })
  }

  setImage() {

    for (let i = 0; i < this.carImages.length; i++) {
      const carImage = this.carImages[i];
      if (carImage.imagePath) {
        return environment.staticFilesUrl + carImage.imagePath;
      }
    }
    return environment.staticFilesUrl + "\\images\\logo.jpg";
  }
}

