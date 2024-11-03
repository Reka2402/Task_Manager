import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task-service.service';

@Pipe({
  name: 'filterTask'
})
export class FilterTaskPipe implements PipeTransform {

  transform(value: Task[], ...args: string[]): Task []{
    const Searchtext = args[0];
    return value.filter( a => a.title.toLowerCase().includes(Searchtext.toLowerCase())||a.description.toLowerCase().includes(Searchtext.toLowerCase()));
  }
}
                                                                                                                      