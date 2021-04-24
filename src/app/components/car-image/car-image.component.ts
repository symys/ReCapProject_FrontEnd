// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CarImage } from 'src/app/models/carImage';
// import { CarImageService } from 'src/app/services/car-image.service';

// @Component({
//   selector: 'app-car-image',
//   templateUrl: './car-image.component.html',
//   styleUrls: ['./car-image.component.css'],
// })
// export class CarImageComponent implements OnInit {
//   carImages: CarImage[] = [];
//   dataLoaded = false;
//   path = 'https://localhost:44322/carimages/getall';

//   constructor(private carImageService:CarImageService,
//     private activatedRouted: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.activatedRouted.params.subscribe((params) => {
//       if (params['carId']) {
//         this.getCarImagesByCarId(params['carId']);
//       }
//     });
//   }

//   getCarImagesByCarId(carId: number) {
//     this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
//       this.carImages = response.data;
//     });
//   }

//   getSliderClassName(index: number) {
//     if (index == 0) {
//       return 'carousel-item active';
//     } else {
//       return 'carousel-item';
//     }
//   }
// }
