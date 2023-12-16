import { Pipe, PipeTransform } from '@angular/core';
import { Shift } from '../../Interfaces';

@Pipe({
  name: 'customFilter',
})
export class CustomFilterPipe implements PipeTransform {
  transform(value: Shift[], ...args: string[]): Shift[] {
    const shiftsToFilter: Shift[] = JSON.parse(JSON.stringify(value));

    const filterName = args[0];
    const filterStartDate = args[1];
    const filterEndDate = args[2];

    if (args.length != 0) {
      const filteredShifts: Shift[] = shiftsToFilter.filter((shift) => {
        const shiftName =
          !filterName || shift.workplace.toLowerCase().includes(filterName);
        const shiftStartDate =
          !filterStartDate ||
          this.getTimeFromDate(filterStartDate) <=
            this.getTimeFromDate(shift.shiftDate);
        const shiftEndDate =
          !filterEndDate ||
          this.getTimeFromDate(filterEndDate) >=
            this.getTimeFromDate(shift.shiftDate);

        return shiftName && shiftStartDate && shiftEndDate;
      });

      return filteredShifts;
    } else {
      return value;
    }
  }

  getTimeFromDate(value: string): Date {
    return new Date(value);
  }
}
