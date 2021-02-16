import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book.model';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input()
  book!: Book;
  @Input() index!:number;

  constructor(private router: Router, private booksService: BooksService) { }

  ngOnInit(): void {
  }

  onEdit(){
    this.booksService.setCurrentIndex(this.index)
     this.router.navigate(['book-edit'])
  }

}
