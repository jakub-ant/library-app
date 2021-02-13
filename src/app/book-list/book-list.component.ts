import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList!: Book [];

  constructor(private bookListservice: BooksService) { }

  ngOnInit(): void {
    this.bookListservice.bookList()
    .subscribe(
      res => this.bookList = res,
      err =>console.log(err)
    )
  }

}
