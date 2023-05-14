import { Inject, Pipe, PipeTransform } from '@angular/core';
import { PLACEHOLDER_IMAGE_SOURCE } from './placeholder_image_source';

@Pipe({ name: 'placeholderImg' })
export class PlaceholderImgPipe implements PipeTransform {
  constructor(@Inject(PLACEHOLDER_IMAGE_SOURCE) private _config: string)
    {}
  transform(value: string | null): string {
    return value ?? this._config
  }
}
