import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksList = [{
    id:1234,
    author:{name:'Joanne', surname:'Rowling'},
    title:"Harry Potter & Philosopher's Stone",
    availableItems:20
  },{
    id:1234,
    author:{name:'Joanne', surname:'Rowling'},
    title:"Harry Potter & Chamber of Secrets ",
    availableItems:20
  },{
    id:1234,
    author:{name:'Joanne', surname:'Rowling'},
    title:"Harry Potter & Prisoner of Azkaban ",
    availableItems:20
  }
  ]
get returnBookList(): Array<Book>{
  return this.booksList
}
 

 bookList()  {
  let bookList = this.returnBookList
   return new Observable<Array<Book>>(function subscribe(subscriber) {
        subscriber.next(bookList)
   })
  } 

  constructor() {
    }
}
