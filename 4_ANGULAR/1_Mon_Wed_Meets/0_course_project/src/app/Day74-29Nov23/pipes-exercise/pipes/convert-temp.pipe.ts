import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp',
})
export class ConvertTempPipe implements PipeTransform {
  transform(value: number, scale: string): number {
    if (scale === 'kelvin') {
      return value + 273.15;
    }
    if (scale === 'fahrenheit') {
      return value * (9 / 5) + 32;
    }
    if (scale === 'rankine') {
      return ((value + 273.15) * 9) / 5;
    }

    return value;
  }
}
