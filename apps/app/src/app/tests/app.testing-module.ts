import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './../app.component';
import { MaterialModule } from './../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { DistancePipeTestComponent } from './distance-pipe.test-component';
import { FileSizePipeTestComponent } from './file-size-pipe.test-component';
import { TeaserPipeTestComponent } from './teaser-pipe.test-component';
import { CreditCardNumberPipeTestComponent } from './credit-card-number-pipe.test-component';
import { PhoneNumberPipeTestComponent } from './phone-number-pipe.test-component';
import { PlaceholderImgPipeTestComponent } from './placeholder-img-pipe.test-component';
import { SortPipeTestComponent } from './sort-pipe.test-component';
import { FilterPipeTestComponent } from './filter-pipe.test-component';
import { SearchPipeTestComponent } from './search-pipe.test-component';
import { TranslatePipeTestComponent } from './translate-pipe.test-component';
import { MaxNumberPipeTestComponent } from './max-number-pipe.test-component';
import { PluckPipeTestComponent } from './pluck-pipe.test-component';
import { DistancePipeModule } from '../pipes/distance.pipe-module';
import { FileSizePipeModule } from '../pipes/file-size.pipe-module';
import { TeaserPipeModule } from '../pipes/teaser/teaser.pipe-module';
import { FilterPipeModule } from '../pipes/filter/filter.pipe-module';
import { SortPipeModule } from '../pipes/sort/sort.pipe-module';
import { SearchPipeModule } from '../pipes/search/search.pipe-module';
import { CreditCardNumberPipeModule } from '../pipes/credit-card-number/credit-card-number.pipe-module';
import { PhoneNumberPipeModule } from '../pipes/phone-number/phone-number.pipe-module';
import { PlaceholderImgPipeModule } from '../pipes/placeholder-img/placeholder-img.pipe-module';
import { PlaceholderImgService } from '../services/placeholder-img.service';
import { PLACEHOLDER_IMAGE_SOURCE } from '../pipes/placeholder-img/placeholder_image_source';
import { TranslatePipeModule } from '../pipes/translate/translate.pipe-module';
import { PluckPipeModule } from '../pipes/pluck/pluck.pipe-module';
import { MaxNumberPipeModule } from '../pipes/max-number/max-number.pipe-module';

@NgModule({
  declarations: [
    AppComponent,
    DistancePipeTestComponent,
    FileSizePipeTestComponent,
    TeaserPipeTestComponent,
    CreditCardNumberPipeTestComponent,
    PhoneNumberPipeTestComponent,
    PlaceholderImgPipeTestComponent,
    SortPipeTestComponent,
    FilterPipeTestComponent,
    SearchPipeTestComponent,
    TranslatePipeTestComponent,
    MaxNumberPipeTestComponent,
    PluckPipeTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    DistancePipeModule,
    FileSizePipeModule,
    TeaserPipeModule,
    FilterPipeModule,
    SortPipeModule,
    SearchPipeModule,
    CreditCardNumberPipeModule,
    PhoneNumberPipeModule,
    PlaceholderImgPipeModule,
    TranslatePipeModule,
    PluckPipeModule,
    MaxNumberPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppTestingModule {}
