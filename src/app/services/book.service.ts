import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  constructor() {}

  emitBooks() {
    this.booksSubject.next(this.books);
  }

  saveBooks() {
    firebase
      .database()
      .ref('/books')
      .set(this.books);
  }

  getBooks() {
    firebase
      .database()
      .ref('/books')
      .on('value', data => {
        this.books = data.val() || [];
        this.emitBooks();
      });
  }

  getBook(id: number) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(`/books/${id}`)
        .once('value')
        .then(data => resolve(data.val()))
        .catch(error => reject(error));
    });
  }

  createBook(book: Book) {
    this.books.push(book);
    this.saveBooks();
    this.emitBooks();
  }

  deleteBook(book: Book) {
    const indexBook = this.books.findIndex((bookEl: Book) => bookEl === book);
    this.books.splice(indexBook, 1);
    this.saveBooks();
    this.emitBooks();
  }
}
