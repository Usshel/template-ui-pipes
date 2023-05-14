import { Inject, Pipe, PipeTransform } from '@angular/core';
import { TRANSLATION } from './translation-config';
import { TranslationModel } from '../../models/translation.model';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
  constructor(@Inject(TRANSLATION) private _config:TranslationModel){}
  transform(value: string, language: string): string {

    return this._config.lang[language] ? 
    this._config.lang[language][value] : 
    value 
  }
}
