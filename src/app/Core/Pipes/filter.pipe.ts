import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( nots: any[],term: string): any[] {
    return nots.filter(note => note.title.toLowerCase().includes(term.toLowerCase()));
  }

}
