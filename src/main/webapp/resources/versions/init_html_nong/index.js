function TodoCtrl($scope) {
  
	
	//http://stackoverflow.com/questions/14068711/alternative-to-ng-show-hide-or-how-to-load-only-relevant-section-of-dom
	var todos = [];
	
	for(var current = 0; current < 100; current++){
		todos.push({text:'build an angular app', done:false});
	}
	$scope.todos =  todos;
	  
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}