import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string ){
    if(!value){
      return [];
    }
    if (!filterString) {
      return value;
    }
    filterString = filterString.toLocaleLowerCase();
    return value.filter(val=>{
      if(val['firstName'].toLocaleLowerCase().includes(filterString)){
        return val
      }
    });
  }

}
