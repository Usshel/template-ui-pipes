import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    const directionalNumbers: string[] =
    ['12', '13', '14', 
    '15', '16', '17', 
    '18','22', '23',
    '24', '25', '29', 
    '32', '33', '34', 
    '41', '42', '43', 
    '44', '46', '48', 
    '52', '54', '55', 
    '56', '58', '59', 
    '61', '62', '63',
    '65', '67', '68', 
    '71', '74', '75',
    '76', '77', '81', 
    '82', '83', '84', 
    '85', '86', '87', 
    '89', '91', '94', '95']


    let phoneNumber:string = ''
    let finalPhoneNumber: string = ''

    if(value.startsWith('0048')){
       phoneNumber = value.replace('0048', '');
    }else if(value.startsWith('+48')){
       phoneNumber = value.replace('+48', '');
    }else{
       phoneNumber = value
    };

    let phoneNumberTrimmed:string = phoneNumber.replace(/\s+/g, '')


    if(phoneNumberTrimmed.length != 9){
      throw new Error('Invalid Phone Number')
    };
    if(directionalNumbers.includes(phoneNumberTrimmed.slice(0,2))){
      const onSlice: number[] = [4,6]
      const directionalNumber: string = `(${phoneNumberTrimmed.slice(0,2)})`
      finalPhoneNumber = `${directionalNumber} ${phoneNumberTrimmed.split('').map((v,i) => onSlice.includes(i) ? v + ' ' : v).join('').slice(2).trim()}`
    } else {
      finalPhoneNumber = phoneNumberTrimmed.split('').map((v,i) => i % 3 === 0 ? ' ' + v : v).join('').trim()
    };
    
    
    return `+48 ${finalPhoneNumber}`
  }
}
//startWith 0048 48
//replace 0048 +48 with ''
//array of numbers includes this number
//