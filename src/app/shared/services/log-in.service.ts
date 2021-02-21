import {
  Injectable
} from '@angular/core';
import {
  Observable,
  throwError
} from 'rxjs';
import {
  Book
} from '../models/book.model';
import {
  Reservation
} from '../models/reservation.model';
import {
  User
} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LogInService {
  loggedIn = false;
  loggedUserID!: number;
  users: User[] = [{
    id: 1234,
    email: 'abc@gmail.com',
    password: 'janusz123',
    borrowedBooks: []
  }, {
    id: 1235,
    email: 'emilia@interia.eu',
    password: 'emilia2000',
    borrowedBooks: []
  }, {
    id: 1236,
    email: 'kozak@wp.pl',
    password: 'Ewelina098',
    borrowedBooks: []
  }]
  constructor() {}


  logIn(user: User) {
    if (this.users.some(e => e.email === user.email) && this.users.some(e => e.password === user.password)) {
      return new Observable < User > ((subscriber) => {
        const mappedByEmail = this.users.filter(userEl => userEl.email === user.email)
        const mappedByPassword = mappedByEmail.filter(userEl => userEl.password === user.password)
        subscriber.next(mappedByPassword[0]);
      })
    } else {
      return throwError("Such a user doesn't exist")
    }

  }

  logOut(){
    this.loggedIn = false;
    }

  get getUserByID() {
    if (!this.loggedIn) return null;
    const user: User = this.users.filter(user => user.id = this.loggedUserID)[0]
    return user
  }

  borrowBook(book: Book) {
    const reservation = new Reservation();
    reservation.date = new Date();
    reservation.book = book;
    this.users[this.users.findIndex(user => user.id === this.loggedUserID)].borrowedBooks.push(reservation);
    console.log(this.users[this.users.findIndex(user => user.id === this.loggedUserID)])
  }

  getBorrowedBooksById(id: number) {
    const allBorrowedBooks: Reservation[] = []
    this.users.forEach(user => {
      user.borrowedBooks.forEach(reservation=>{
        const reserv = reservation;
        reserv.userEmail = user.email
        allBorrowedBooks.push(reserv)
      })
    })
    const borrowedBooks = allBorrowedBooks.filter(reservation => reservation.book.id === id)
    return borrowedBooks
  }

}
