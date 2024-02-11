import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(term: string, nots: any[]): any {
    return nots.filter((note) => {note.title.toLowerCase().includes(term.toLowerCase())});
  }

}
