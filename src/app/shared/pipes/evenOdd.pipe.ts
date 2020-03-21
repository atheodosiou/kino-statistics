import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenOddToString'
})
export class EvenOddPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    switch(value){
      case 'even':{return 'Μονά'}
      case 'odd':{return 'Ζυγά'}
      case 'draw':{return 'Ισοπαλία'}
    }
  }

}
