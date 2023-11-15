import { Injectable } from '@angular/core';
import { Book } from '../model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data =new Map<string,any>;

  constructor() { }

  setData(id:string, param:Book) {
    this.data.set(id, param);
  }

  getData(id:string|null) {
    if(id !=null){
      let item = this.data.get(id);
      return item;
    }
    return null;
  }
}
