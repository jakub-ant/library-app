import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  newBook!:FormGroup

  constructor(private router: Router, private booksService: BooksService) { }

  ngOnInit(): void {
    this.newBook =  new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      availableItems: new FormControl('', Validators.required),
    })
  }

  onSubmit(){
    this.booksService.addNewBook(this.newBook.controls.name.value, this.newBook.controls.surname.value, this.newBook.controls.title.value, this.newBook.controls.year.value, this.newBook.controls.availableItems.value)
    this.router.navigate(['book-list'])

   }
}
