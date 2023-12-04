import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: string[], query: string): string[] {
    if (!items) {
      return [];
    }
    if (!query) {
      return items;
    }

    return items.filter((item: string) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }
}
