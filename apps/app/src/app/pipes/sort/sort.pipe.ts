import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(value: string[] | null, sort: string ): string[] | null {
    
    const sorting = sort ?? 'asc';

    if(value)
    {
      value.sort((a, b) => 
      { 
        if( a > b) {
         return sorting === 'asc' ? 1 : -1;
        }
        if(a < b ) {
          return sorting === 'desc'? 1 : -1;
        }
        return 0
      })
    } 
    return value


  }
}
