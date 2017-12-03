import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'uploads'
})

export class UploadsPipe implements PipeTransform {
    transform(value: any): any {
        return value;
    }
}
