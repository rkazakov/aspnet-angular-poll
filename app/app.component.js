System.register(['angular2/core', './vehicles.component'], function(exports_1, context_1) {
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
    var core_1, vehicles_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vehicles_component_1_1) {
                vehicles_component_1 = vehicles_component_1_1;
            }],
        execute: function() {
            //import {BooksComponent} from './books/books.component';
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>1</h1>\n        <my-vehicles></my-vehicles>\n    ",
                        directives: [vehicles_component_1.VehiclesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSx5REFBeUQ7WUFVekQ7Z0JBQUE7Z0JBQTJCLENBQUM7Z0JBUjVCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxpRUFHVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztxQkFDbEMsQ0FBQzs7Z0NBQUE7Z0JBQ3lCLG1CQUFDO1lBQUQsQ0FBM0IsQUFBNEIsSUFBQTtZQUE1Qix1Q0FBNEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1ZlaGljbGVzQ29tcG9uZW50fSBmcm9tICcuL3ZlaGljbGVzLmNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IHtCb29rc0NvbXBvbmVudH0gZnJvbSAnLi9ib29rcy9ib29rcy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMT4xPC9oMT5cclxuICAgICAgICA8bXktdmVoaWNsZXM+PC9teS12ZWhpY2xlcz5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbVmVoaWNsZXNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge31cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
