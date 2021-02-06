import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatWord'
})
export class FormatWordPipe implements PipeTransform {

  transform(value: string): string {
    if (value !== '' ) {
      return value + ' (Admin)';
    }
  }

}
