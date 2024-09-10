import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrencyToIDR } from '@core/utils';

@Pipe({
  name: 'rupiahFormat',
  standalone: true,
})
export class RupiahFormatPipe implements PipeTransform {
  transform(value: number): string {
    return formatCurrencyToIDR(value);
  }
}
