import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Observable,
  Subscription,
  throwError
} from 'rxjs';
import {
  map,
  flatMap
} from 'rxjs/operators'
import {
  Book
} from 'src/app/shared/models/book.model';
import { Reservation } from 'src/app/shared/models/reservation.model';
import {
  BooksService
} from 'src/app/shared/services/books.service';
import {
  LogInService
} from 'src/app/shared/services/log-in.service';

@Component({
  selector: 'app-book-reservations',
  templateUrl: './book-reservations.component.html',
  styleUrls: ['./book-reservations.component.scss']
})
export class BookReservationsComponent implements OnInit, OnDestroy {
  book!: Book;
  reservations!: Reservation[];
  subscription!: Subscription

  constructor(private booksService: BooksService, private userService: LogInService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription= this.route.params.pipe(map(res => +res.id))
      .subscribe(res => {
        this.booksService.getBookByID(res)
          .subscribe(book => {
            this.book = book;
            this.reservations = this.userService.getBorrowedBooksById(this.book.id)
          }, err => console.log(err))
      }, err => console.log(err))
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
