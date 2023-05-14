import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  transform(value: number): string {
    const suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    let suffixId = 0
    while( value >=1024){
      value /= 1024
      suffixId += 1
    }
    return `${String(value)} ${suffixes[suffixId]}`
  }
}
