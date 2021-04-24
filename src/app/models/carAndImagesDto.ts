import { CarDetail } from "./carDetail";
import { CarImage } from "./carImage";

export interface CarDetailAndImagesDto {
    cars: CarDetail;
    carImages: CarImage[];
  }