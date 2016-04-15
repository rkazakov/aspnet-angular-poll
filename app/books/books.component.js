System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BooksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import { bcv_parser } from 'bible-passage-reference-parser/js/en_bcv_parser';
            BooksComponent = (function () {
                function BooksComponent() {
                }
                BooksComponent = __decorate([
                    core_1.Component({
                        selector: 'bible-books',
                        template: "\n    <div>\n        <ul>\n            <li *ngFor=\"#book of books\">\n                {{book.name}}\n            </li>\n        </ul>\n        <div *ngIf=\"books.length\">\n            <h3>You have {{books.length}} books</h3>\n        </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BooksComponent);
                return BooksComponent;
            }());
            exports_1("BooksComponent", BooksComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tzL2Jvb2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUNBLCtFQUErRTtZQXNCL0U7Z0JBQUE7Z0JBa0JBLENBQUM7Z0JBdENEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSxvUUFXVDtxQkFDRixDQUFDOztrQ0FBQTtnQkF3QkYscUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDJDQWtCQyxDQUFBIiwiZmlsZSI6ImJvb2tzL2Jvb2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG4vL2ltcG9ydCB7IGJjdl9wYXJzZXIgfSBmcm9tICdiaWJsZS1wYXNzYWdlLXJlZmVyZW5jZS1wYXJzZXIvanMvZW5fYmN2X3BhcnNlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JpYmxlLWJvb2tzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjYm9vayBvZiBib29rc1wiPlxyXG4gICAgICAgICAgICAgICAge3tib29rLm5hbWV9fVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImJvb2tzLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICA8aDM+WW91IGhhdmUge3tib29rcy5sZW5ndGh9fSBib29rczwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcblxyXG4vLyBpbnRlcmZhY2UgQm9vayB7XHJcblxyXG4vLyB9XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va3NDb21wb25lbnQge1xyXG4gIC8vIGl0ZW1zID0gW107XHJcbiAgLy8gYmN2ID0gbmV3IGJjdl9wYXJzZXI7XHJcbiAgLy8gYm9va3MgPSB0aGlzLmJjdi50cmFuc2xhdGlvbl9pbmZvKFwiXCIpLmJvb2tzO1xyXG4gIC8vIGNoYXB0ZXJzID0gdGhpcy5iY3YudHJhbnNsYXRpb25faW5mbyhcIlwiKS5jaGFwdGVycztcclxuXHJcbi8vICAgZm9yICh2YXIgaSBvZiBib29rcykge1xyXG4vLyAgICAgdGhpcy5pdGVtcy5wdXNoKHtcclxuLy8gICAgICAgICBpZDogaSxcclxuLy8gICAgICAgICB0aXRsZTogdGhpcy5ib29rc1tpXSxcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5jaGFwdGVyc1t0aGlzLmJvb2tzW2ldXS5sZW5ndGh9KTtcclxuLy8gICB9XHJcblxyXG4gIC8qYm9va3MgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiAnWC1XaW5nIEZpZ2h0ZXInIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiAnVGllIEZpZ2h0ZXInIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnWS1XaW5nIEZpZ2h0ZXInIH1cclxuICBdOyovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
