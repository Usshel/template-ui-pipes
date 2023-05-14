import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'distance' })
export class DistancePipe implements PipeTransform {
  transform(value: number | string): string {
    if ( Number(value) <= 750) {
      return String((value + ' ' +'m'))
    }
    return `${Math.round((+value/1000)*100)/100} km` 
   
  }
}


