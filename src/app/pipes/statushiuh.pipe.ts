import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statushiuh'
})
export class StatushiuhPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
