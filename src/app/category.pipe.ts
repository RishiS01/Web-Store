import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '././Models/product';

@Pipe({
  name: 'category',

})
export class CategoryPipe implements PipeTransform {

  
   transform(value: any, input: string) {
  if (input) {
    input = input.toLowerCase();
    return value= value.filter(function (el: any) {
     return el.productName.toLowerCase().indexOf(input) > -1;
   })
  }
  return input;
 }
}

