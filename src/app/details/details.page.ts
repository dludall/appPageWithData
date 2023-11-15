import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {


  data!: Book;
 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params?.['book']) {
        console.log(params['book']);
        this.data = JSON.parse(params['book']);
      }
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.data = this.router.getCurrentNavigation()?.extras?.state?.['book'];
        }
      });
    });
  }

  ngOnInit() {

    if (this.route.snapshot.data['bookid']) {
      this.data = this.route.snapshot.data['bookid'];
    }
  }

}
