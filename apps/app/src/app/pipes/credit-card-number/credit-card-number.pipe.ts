import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creditCardNumber' })
export class CreditCardNumberPipe implements PipeTransform {
  transform(value: string): string {
    
    if( typeof value !== 'string'){
      throw new Error('Incorrect input type. It must be a string.');
    } else {
      const CardNumberPer4 = Array.from(value.matchAll(/\d+/g),
      (match) => match[0])
      const resultMatchedString = CardNumberPer4.join('')
      if (resultMatchedString.length != 16){
        throw new Error(`Invalid card number string: ${value}`);
      }
        
      const cleanedCardNumber = resultMatchedString.replace(/\d{4}/g, (sub: string) => `${sub} `)
      return cleanedCardNumber
    } 
  }
}
