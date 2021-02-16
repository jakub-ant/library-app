import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/book-list',
    pathMatch: 'full'
  },

  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path:'add-new-book',
    component: NewBookComponent
  },  {
    path: 'book-edit',
    component: BookEditComponent
  },{
    path: '**',
    redirectTo:'/book-list',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
