import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Car)=>
     c.brandName.toLocaleLowerCase().indexOf(filterText)!== -1 ||
     c.colorName.toLocaleLowerCase().indexOf(filterText)!== -1 ||
     c.modelYear.toString().indexOf(filterText)!== -1 ||
     c.description.toLocaleLowerCase().indexOf(filterText)!== -1):value;
    
  }

}
