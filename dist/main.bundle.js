webpackJsonp([1,4],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodosService = (function () {
    function TodosService(_http) {
        this._http = _http;
    }
    TodosService.prototype.getTodos = function () {
        return this._http.get('/api/todos')
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.saveTodo = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/todo', JSON.stringify(todo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.updateTodo = function (todo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/todo/' + todo._id, JSON.stringify(todo), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TodosService.prototype.deleteTodo = function (id) {
        return this._http.delete('/api/todo/' + id)
            .map(function (res) { return res.json(); });
    };
    TodosService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TodosService);
    return TodosService;
    var _a;
}());
//# sourceMappingURL=/home/stem/Projects/angular/ang2-todoapp/src/todos.service.js.map

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 383;


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(503);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/stem/Projects/angular/ang2-todoapp/src/main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(659)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/stem/Projects/angular/ang2-todoapp/src/app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todos_todos_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todos_service__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: __WEBPACK_IMPORTED_MODULE_6__todos_todos_component__["a" /* TodosComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__todos_todos_component__["a" /* TodosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__todos_service__["a" /* TodosService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/stem/Projects/angular/ang2-todoapp/src/app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos_service__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = (function () {
    function TodosComponent(_todosService) {
        this._todosService = _todosService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todos = [];
        this._todosService.getTodos().subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodosComponent.prototype.addTodo = function (event, todoText) {
        var _this = this;
        var result;
        var newTodo = {
            text: todoText.value,
            isCompleted: false
        };
        result = this._todosService.saveTodo(newTodo);
        result.subscribe(function (x) {
            _this.todos.push(newTodo);
            todoText.value = "";
        });
    };
    TodosComponent.prototype.setEditState = function (todo, state) {
        if (state) {
            todo.isEditMode = state;
        }
        else {
            delete todo.isEditMode;
        }
    };
    TodosComponent.prototype.updateStatus = function (todo) {
        var _todo = {
            _id: todo._id,
            text: todo.text,
            isCompleted: !todo.isCompleted
        };
        this._todosService.updateTodo(_todo)
            .subscribe(function (data) {
            todo.isCompleted = !todo.isCompleted;
        });
    };
    TodosComponent.prototype.updateTodoText = function (event, todo) {
        var _this = this;
        if (event.which === 13) {
            todo.text = event.target.value;
            var _todo = {
                _id: todo._id,
                text: todo.text,
                isCompleted: todo.isCompleted
            };
            this._todosService.updateTodo(_todo)
                .subscribe(function (data) {
                _this.setEditState(todo, false);
            });
        }
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
        var todos = this.todos;
        this._todosService.deleteTodo(todo._id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < todos.length; i++) {
                    if (todos[i]._id == todo._id) {
                        todos.splice(i, 1);
                    }
                }
            }
        });
    };
    TodosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-todos',
            template: __webpack_require__(660)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todos_service__["a" /* TodosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__todos_service__["a" /* TodosService */]) === 'function' && _a) || Object])
    ], TodosComponent);
    return TodosComponent;
    var _a;
}());
//# sourceMappingURL=/home/stem/Projects/angular/ang2-todoapp/src/todos.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/stem/Projects/angular/ang2-todoapp/src/environment.js.map

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">MEAN-Todos App</a>\n        </div>\n      </div>\n    </nav>\n\n    <div class=\"container\">\n      <div class=\"row\">\n       <div class=\"col-sm-8\">\n        <router-outlet></router-outlet>\n       </div>\n      </div>\n\n    </div><!-- /.container -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<div class=\"add-todo-form text-center col-sm-10 col-sm-offset-1\">\n  <h1>Add Todo</h1>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control input-lg\" aria-placeholder=\"Add Todo...\" autofocus #todoText>\n    <br>\n    <button (click)=\"addTodo($event, todoText)\" class=\"btn btn-primary btn-block\">Create</button>\n  </div>\n</div>\n<div class=\"todo-list\">\n  <div class=\"row col-sm-10 col-sm-offset-1\" *ngFor=\"let todo of todos\">\n    <div class=\"col-sm-1\">\n      <input type=\"checkbox\" [checked]=\"todo.isCompleted\" (click)=\"updateStatus(todo)\">\n    </div>\n    <div class=\"col-sm-7\">\n      <span [class.hidden]=\"todo.isEditMode\">{{todo.text}}</span>\n      <input type=\"text\"[class.hidden]=\"!todo.isEditMode\" [value]=\"todo.text\" (keypress)=\"updateTodoText($event, todo)\">\n      <input type=\"button\" [class.hidden]=\"!todo.isEditMode\" value=\"Cancel\" (click)=\"setEditState(todo, false)\" class=\"btn btn-warning\">\n    </div>\n    <div class=\"col-sm-4\">\n      <input (click)=\"deleteTodo(todo)\" type=\"button\" class=\"btn btn-danger pull-right\" value=\"Delete\">\n      <input [class.disabled]=\"todo.isCompleted\" (click)=\"setEditState(todo, true)\"type=\"button\" class=\"btn btn-primary pull-right\" value=\"Edit\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(384);


/***/ })

},[679]);
//# sourceMappingURL=main.bundle.map