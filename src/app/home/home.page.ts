import { Component } from '@angular/core';
import { Book } from '../model';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private _book: Book = new Book(
    {id:243523432,name:'Ionic start',website:'www.ionic.com',writer:'oldbody',
     category:['angular','ionic','android','ios']}
    );
  constructor(private router:Router,
    private dataService:DataService) {}
  
  movePageDetailsWithQueryParams(){
    
    let navExtras :NavigationExtras = {
      queryParams:{
        book: JSON.stringify(this._book),
      }
    };
    console.log(JSON.stringify(this._book));
    this.router.navigate(['details'],navExtras);

  }

  movePageDetailsWithService(){
    this.dataService.setData('1004', this._book);
    this.router.navigateByUrl('/details/1004');

  }
  movePageDetailsWithState(){
    let navigationExtras: NavigationExtras = {
        state: {
          book: this._book
        }
      };
      this.router.navigate(['details'], navigationExtras);
  }

}
