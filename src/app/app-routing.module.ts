import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { SingleBookComponent } from './book/single-book/single-book.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', component: BookListComponent, canActivate: [AuthGuardService] },
  { path: 'books/add', component: BookFormComponent, canActivate: [AuthGuardService] },
  { path: 'books/view/:id', component: SingleBookComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
