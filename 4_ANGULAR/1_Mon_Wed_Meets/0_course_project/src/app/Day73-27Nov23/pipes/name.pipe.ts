import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeInfo } from './pipes.component';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(value: EmployeeInfo, format: 'short' | 'medium' | 'long'): string {
    return `${value.firstName} ${
      format === 'short'
        ? ''
        : value.middleNames
            ?.map((name) => (format === 'long' ? name : `${name[0]}.`))
            .join(format === 'long' ? '-' : ' ') ?? ''
    } ${value.lastName}`;
  }
}
