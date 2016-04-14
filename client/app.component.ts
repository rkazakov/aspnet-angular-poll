import {Component} from 'angular2/core';
import {VehiclesComponent} from './vehicles.component';
import {BooksComponent} from './books/books.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Bible Diary</h1>
        <bible-books></bible-books>
    `,
    directives: [VehiclesComponent, BooksComponent]
})
export class AppComponent {}
