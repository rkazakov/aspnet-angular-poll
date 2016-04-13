System.register(['angular2/core', './vehicles.component', './books/books.component'], function(exports_1, context_1) {
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
    var core_1, vehicles_component_1, books_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vehicles_component_1_1) {
                vehicles_component_1 = vehicles_component_1_1;
            },
            function (books_component_1_1) {
                books_component_1 = books_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Bible Diary</h1>\n        <bible-books></bible-books>\n    ",
                        directives: [vehicles_component_1.VehiclesComponent, books_component_1.BooksComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFBQTtnQkFBMkIsQ0FBQztnQkFSNUI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJFQUdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHNDQUFpQixFQUFFLGdDQUFjLENBQUM7cUJBQ2xELENBQUM7O2dDQUFBO2dCQUN5QixtQkFBQztZQUFELENBQTNCLEFBQTRCLElBQUE7WUFBNUIsdUNBQTRCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VmVoaWNsZXNDb21wb25lbnR9IGZyb20gJy4vdmVoaWNsZXMuY29tcG9uZW50JztcbmltcG9ydCB7Qm9va3NDb21wb25lbnR9IGZyb20gJy4vYm9va3MvYm9va3MuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5CaWJsZSBEaWFyeTwvaDE+XG4gICAgICAgIDxiaWJsZS1ib29rcz48L2JpYmxlLWJvb2tzPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1ZlaGljbGVzQ29tcG9uZW50LCBCb29rc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
