import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(value: unknown[], criterion: ((param: unknown) => boolean)): unknown[] {
    return value.filter((value) => criterion(value))
  }
}
