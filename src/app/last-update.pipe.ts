import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastUpdate'
})
export class LastUpdatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
