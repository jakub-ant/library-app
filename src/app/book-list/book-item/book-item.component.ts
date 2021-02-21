import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogInComponent } from 'src/app/log-in/log-in.component';
import { Book } from 'src/app/shared/models/book.model';
import { BooksService } from 'src/app/shared/services/books.service';
import { LogInService } from 'src/app/shared/services/log-in.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input()
  book!: Book;
  @Input() index!:number;
  get isLogged(){
    return this.userService.loggedIn
  }

  constructor(private route:ActivatedRoute,private router: Router, private booksService: BooksService, private userService: LogInService) { }

  ngOnInit(): void {
  }

  onEdit(){
    this.booksService.setCurrentIndex(this.index)
     this.router.navigate(['book-edit'])
  }

  onBorrow(){
    if(!this.userService.loggedUserID) return
   this.booksService.borrowBook(this.index).subscribe(
     book =>  this.userService.borrowBook(book),
     err => console.log(err)
   )

  }
  onReservation(){
    this.router.navigate(['reservations', this.book.id])
  }

}
