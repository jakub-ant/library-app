import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  Subscription
} from 'rxjs';
import {
  Book
} from 'src/app/shared/models/book.model';
import {
  BooksService
} from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {
  editedBook!: Book;
  subscription!: Subscription;
  changedBook!: FormGroup

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.booksService.getBookByIndex(this.booksService.currentIndex)
      .subscribe(
        book => this.editedBook = book,
        err => console.log(err)
      )

    this.changedBook = new FormGroup({
      name: new FormControl(this.editedBook.author.name, Validators.required),
      surname: new FormControl(this.editedBook.author.surname, Validators.required),
      title: new FormControl(this.editedBook.title, Validators.required),
      year: new FormControl(this.editedBook.year, Validators.required),
      availableItems: new FormControl(this.editedBook.availableItems, Validators.required),
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onSubmit() {
    this.booksService.updateBookByIndex(this.changedBook.controls.name.value, this.changedBook.controls.surname.value, this.changedBook.controls.title.value, this.changedBook.controls.year.value, this.changedBook.controls.availableItems.value)
    console.log(this.changedBook);
    this.router.navigate(['book-list'])
  }
}
