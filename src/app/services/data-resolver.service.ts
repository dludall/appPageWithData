import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Book } from '../model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<Book>{

  constructor(private dataService: DataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let id = route.paramMap.get('id');
      let item  = this.dataService.getData(id);
      return item;
  }
}
