import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  bookSubscription: Subscription;

  constructor(private bookService: BookService, private route: Router) {}

  ngOnInit() {
    this.bookSubscription = this.bookService.booksSubject.subscribe((books: Book[]) => (this.books = books));
    this.bookService.emitBooks();
  }

  onCreateBook() {
    this.route.navigate(['/books', 'add']);
  }

  onDeleteBook(book: Book) {
    this.bookService.deleteBook(book);
  }

  onViewBook(id: number) {
    this.route.navigate(['/books', 'view', id]);
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }
}
