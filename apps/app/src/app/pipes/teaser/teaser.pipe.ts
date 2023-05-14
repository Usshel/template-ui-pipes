import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'teaser' })
export class TeaserPipe implements PipeTransform {
  transform(value: string, minimumAmoutnOfWords: number): string {
    const ArrayOfWords = value.split(' ')
    if (ArrayOfWords.length > minimumAmoutnOfWords){
      return `${value.split(' ').splice(0, minimumAmoutnOfWords).join(' ')} ...`
    }
    return value
  }
}
// Some text that is definitely ...
// Some text that is fine