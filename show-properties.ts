///<reference path="typings/angular2/angular2.d.ts" />
///<reference path='node_modules/immutable/dist/immutable.d.ts'/>

import Immutable = require('immutable');
import {bootstrap, Component, NgFor, NgIf, View} from 'angular2/angular2';

class FriendsService {
  names: string[];
  constructor() {
    this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}

@Component({
  selector: 'todo-list'
})
@View({
  directives: [NgFor],
  templateUrl: 'todo-list.html'
})
class TodoList {
  todos: string[];
  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }
  addTodo(todo: string) {
    this.todos.push(todo);
  }
  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

@Component({
  selector: 'todo-listfp'
})
@View({
  directives: [NgFor],
  templateUrl: 'todo-listfp.html'
})
class TodoListFp {
  todos: Immutable.List<String>;
  constructor() {
    this.todos = Immutable.List(["Eat BreakfastFP", "Walk DogFP", "BreatheFP"]);
  }
  addTodo(todo: string) {
    this.todos = this.todos.push(todo);
  }
  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

@Component({
  hostInjector: [FriendsService],
  selector: 'display'
})
@View({
  directives: [NgFor, NgIf, TodoList, TodoListFp],
  templateUrl: 'display.html'
})
class DisplayComponent {
  myName: string;
  names: string[];
  
  constructor(friendsService: FriendsService) {
    this.myName = "Alice";
    this.names = friendsService.names;
  }
}

bootstrap(DisplayComponent);
