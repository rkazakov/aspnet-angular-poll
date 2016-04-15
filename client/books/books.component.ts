import { Component } from 'angular2/core';
//import { bcv_parser } from 'bible-passage-reference-parser/js/en_bcv_parser';

@Component({
  selector: 'bible-books',
  template: `
    <div>
        <ul>
            <li *ngFor="#book of books">
                {{book.name}}
            </li>
        </ul>
        <div *ngIf="books.length">
            <h3>You have {{books.length}} books</h3>
        </div>
    </div>
  `
})

// interface Book {

// }

export class BooksComponent {
  // items = [];
  // bcv = new bcv_parser;
  // books = this.bcv.translation_info("").books;
  // chapters = this.bcv.translation_info("").chapters;

//   for (var i of books) {
//     this.items.push({
//         id: i,
//         title: this.books[i],
//         description: this.chapters[this.books[i]].length});
//   }

  /*books = [
    { id: 1, name: 'X-Wing Fighter' },
    { id: 2, name: 'Tie Fighter' },
    { id: 3, name: 'Y-Wing Fighter' }
  ];*/
}
