import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: any, arg: boolean = true): any {
    value = value.toLowerCase();
    let nombres = value.split(' ');

    if (arg) {
      for (let i in nombres) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' ');
  }
}