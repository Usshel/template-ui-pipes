import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(value: string, term: string ): string[] {
     let ValueSplitted = value.split(' ').filter((word) =>
     word.toLowerCase().includes(term.toLowerCase()));

     if(ValueSplitted.length == 0){
      throw new Error('No Result');
     } else {
      return ValueSplitted;
     }
     
    
  }
}
