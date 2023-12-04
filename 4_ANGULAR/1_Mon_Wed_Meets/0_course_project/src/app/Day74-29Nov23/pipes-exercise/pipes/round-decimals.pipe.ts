import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundDecimals'
})
export class RoundDecimalsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
