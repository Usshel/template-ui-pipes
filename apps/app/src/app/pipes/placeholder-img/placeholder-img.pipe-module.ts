import { NgModule } from '@angular/core';
import { PlaceholderImgPipe } from './placeholder-img.pipe';
import { PLACEHOLDER_IMAGE_SOURCE } from './placeholder_image_source';

@NgModule({
  imports: [],
  declarations: [PlaceholderImgPipe],
  providers: [ 
    {
      provide: 'PLACEHOLDER_IMAGE_SOURCE',
      useValue: `/assets/img/placeholder.png`,
    }
  ],
  exports: [PlaceholderImgPipe]
})
export class PlaceholderImgPipeModule {
}
