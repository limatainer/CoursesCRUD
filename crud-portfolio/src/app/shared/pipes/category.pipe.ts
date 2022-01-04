import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Automation': return 'engineering';
      case 'frontend': return 'rocket_launch';
    }
    return 'code';
  }

}
