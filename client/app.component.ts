import {Component} from 'angular2/core';
import {VehiclesComponent} from './vehicles.component';
//import {BooksComponent} from './books/books.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>1</h1>
        <my-vehicles></my-vehicles>
    `,
    directives: [VehiclesComponent]
})
export class AppComponent {}
