import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maxNumber', pure: false })
export class MaxNumberPipe implements PipeTransform {
  transform(value: number[]): unknown {
    const sorted = value.sort((a,b) =>
    { 
      if(a>b)
    {
      return -1
    }else {
      1
    }
    return 0
  }
  )
    return sorted[0]
    
  }
}
