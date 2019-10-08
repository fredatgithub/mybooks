import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookService.getBook(+id).then((book: Book) => (this.book = book));
  }

  onBack() {
    this.router.navigate(['/books']);
  }
}
