System.register(['angular2/core', 'bible-passage-reference-parser/js/en_bcv_parser'], function(exports_1, context_1) {
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
    var core_1, en_bcv_parser_1;
    var BooksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (en_bcv_parser_1_1) {
                en_bcv_parser_1 = en_bcv_parser_1_1;
            }],
        execute: function() {
            BooksComponent = (function () {
                function BooksComponent() {
                    this.items = [];
                    this.bcv = new en_bcv_parser_1.bcv_parser;
                    this.books = this.bcv.translation_info("").books;
                    this.chapters = this.bcv.translation_info("").chapters;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tzL2Jvb2tzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtvQkFDRSxVQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNYLFFBQUcsR0FBRyxJQUFJLDBCQUFVLENBQUM7b0JBQ3JCLFVBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDNUMsYUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQWNwRCxDQUFDO2dCQXRDRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsb1FBV1Q7cUJBQ0YsQ0FBQzs7a0NBQUE7Z0JBd0JGLHFCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCwyQ0FrQkMsQ0FBQSIsImZpbGUiOiJib29rcy9ib29rcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgYmN2X3BhcnNlciB9IGZyb20gJ2JpYmxlLXBhc3NhZ2UtcmVmZXJlbmNlLXBhcnNlci9qcy9lbl9iY3ZfcGFyc2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYmlibGUtYm9va3MnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNib29rIG9mIGJvb2tzXCI+XHJcbiAgICAgICAgICAgICAgICB7e2Jvb2submFtZX19XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiYm9va3MubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgIDxoMz5Zb3UgaGF2ZSB7e2Jvb2tzLmxlbmd0aH19IGJvb2tzPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuXHJcbi8vIGludGVyZmFjZSBCb29rIHtcclxuICAgIFxyXG4vLyB9XHJcblxyXG5leHBvcnQgY2xhc3MgQm9va3NDb21wb25lbnQge1xyXG4gIGl0ZW1zID0gW107XHJcbiAgYmN2ID0gbmV3IGJjdl9wYXJzZXI7XHJcbiAgYm9va3MgPSB0aGlzLmJjdi50cmFuc2xhdGlvbl9pbmZvKFwiXCIpLmJvb2tzO1xyXG4gIGNoYXB0ZXJzID0gdGhpcy5iY3YudHJhbnNsYXRpb25faW5mbyhcIlwiKS5jaGFwdGVycztcclxuICBcclxuLy8gICBmb3IgKHZhciBpIG9mIGJvb2tzKSB7XHJcbi8vICAgICB0aGlzLml0ZW1zLnB1c2goe1xyXG4vLyAgICAgICAgIGlkOiBpLCBcclxuLy8gICAgICAgICB0aXRsZTogdGhpcy5ib29rc1tpXSwgXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuY2hhcHRlcnNbdGhpcy5ib29rc1tpXV0ubGVuZ3RofSk7XHJcbi8vICAgfVxyXG4gIFxyXG4gIC8qYm9va3MgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiAnWC1XaW5nIEZpZ2h0ZXInIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiAnVGllIEZpZ2h0ZXInIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnWS1XaW5nIEZpZ2h0ZXInIH1cclxuICBdOyovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
