import {Pipe, PipeTransform} from '@angular/core';
import {API} from '../config';

@Pipe({
  name: 'uploads'
})

export class UploadsPipe implements PipeTransform {
  transform(value: any): any {
    return API + '/' + value;
  }
}
