import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroKardex'
})
export class FiltroKardexPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
