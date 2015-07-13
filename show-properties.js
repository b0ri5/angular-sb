///<reference path="typings/angular2/angular2.d.ts" />
///<reference path='node_modules/immutable/dist/immutable.d.ts'/>
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Immutable = require('immutable');
var angular2_1 = require('angular2/angular2');
var FriendsService = (function () {
    function FriendsService() {
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
    return FriendsService;
})();
var TodoList = (function () {
    function TodoList() {
        this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoList.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: 'todo-list.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
})();
var TodoListFp = (function () {
    function TodoListFp() {
        this.todos = Immutable.List(["Eat BreakfastFP", "Walk DogFP", "BreatheFP"]);
    }
    TodoListFp.prototype.addTodo = function (todo) {
        this.todos = this.todos.push(todo);
    };
    TodoListFp.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoListFp = __decorate([
        angular2_1.Component({
            selector: 'todo-listfp'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: 'todo-listfp.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListFp);
    return TodoListFp;
})();
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        this.myName = "Alice";
        this.names = friendsService.names;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            appInjector: [FriendsService],
            selector: 'display'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgIf, TodoList, TodoListFp],
            templateUrl: 'display.html'
        }), 
        __metadata('design:paramtypes', [FriendsService])
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
