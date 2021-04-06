import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path: "", component:CarComponent},
  {path: "cars", component:CarComponent},
  {path: "cars/color/:colorId", component:CarComponent},
  {path: "cars/brand/:brandId", component:CarComponent},
  {path:"cars/:carId",component:CarDetailComponent},

  {path:"rentals/:carId",component:RentalComponent},
  {path:"cars/rental/:carId",component:RentalComponent},

  {path:"payment/:carId",component: PaymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
