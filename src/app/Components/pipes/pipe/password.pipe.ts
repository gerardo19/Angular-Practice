import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): any {
    if (activar) {
      let result: string = "";
      for (let i = 0; i < value.length; i++) {
        result += "*"
      }
      return result;
    }
    return value;
  }

}
