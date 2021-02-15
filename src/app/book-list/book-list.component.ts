import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../shared/models/book.model';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy{
  bookList!: Book [];
  subscription!: Subscription; 

  constructor(private bookListservice: BooksService) { }

  ngOnInit(): void {
    this.subscription= this.bookListservice.bookList()
    .subscribe(
      res => this.bookList = res,
      err =>console.log(err)
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
