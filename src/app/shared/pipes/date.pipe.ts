import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'toDate'
})
export class ToDatePipe implements PipeTransform {
    transform(value: any, format?: string) {
        let f='MMMM Do YYYY, h:mm:ss a';
        if(!value) return '';
        if(format) f=format;
        return moment(value).format(f);
    }
}