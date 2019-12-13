import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLoading'
})
export class IsLoadingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    return null;
  }

}
