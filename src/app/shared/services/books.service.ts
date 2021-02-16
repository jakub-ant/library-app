import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksList: Book[] = [{
    id:1234,
    author:{name:'Joanne', surname:'Rowling'},
    title:"Harry Potter & Philosopher's Stone",
    year: 1997,
    availableItems:24
  },{
    id:1235,
    author:{name:'Joanne', surname:'Rowling'},
    title:"Harry Potter & Chamber of Secrets ",
    year: 2001,
    availableItems:10
  },{
    id:1236,
    author:{name:'Joanne', surname:'Rowling'},
    title:"Harry Potter & Prisoner of Azkaban ",
    year: 2001,
    availableItems:12
  }
  ]
  currentIndex!: number;
get returnBookList(): Array<Book>{
  return this.booksList
}
 

 bookList()  {
  let bookList = this.returnBookList
   return new Observable<Array<Book>>(function subscribe(subscriber) {
        subscriber.next(bookList)
   })
  }

  setCurrentIndex(i:number){
    this.currentIndex = i 
  }

  getBookByIndex(index:number){
    const book = this.booksList[index]
    return new Observable<Book>(function subscribe(subscriber) {
         subscriber.next(book)
    })
  }
  updateBookByIndex( name:string, surname:string, title:string, year:number, availableItems:number){
    const book = this.booksList[this.currentIndex];
    book.author.name = name;
    book.author.surname = surname;
    book.title=title;
    book.year = year;
    book.availableItems = availableItems
  }

  constructor() {
    }
}
