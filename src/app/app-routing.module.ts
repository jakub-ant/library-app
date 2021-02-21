import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  BookEditComponent
} from './book-list/book-edit/book-edit.component';
import {
  BookReservationsComponent
} from './book-list/book-item/book-reservations/book-reservations.component';
import {
  BookListComponent
} from './book-list/book-list.component';
import {
  LogInComponent
} from './log-in/log-in.component';
import {
  NewBookComponent
} from './new-book/new-book.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/book-list',
    pathMatch: 'full'
  },

  {
    path: 'book-list',
     component: BookListComponent,
  },
  {
    path: 'reservations/:id',
    component: BookReservationsComponent
  }
  ,
  {
    path: 'add-new-book',
    component: NewBookComponent
  }, {
    path: 'book-edit',
    component: BookEditComponent
  }, {
    path: 'log-in',
    component: LogInComponent
  }, {
    path: '**',
    redirectTo: '/book-list',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
