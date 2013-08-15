//myApp.run(function($templateCache) {
//$templateCache.put('templateId.html', 'This is the content of the template');
//});

function TodoCtrl($scope, $http) { // , $viewContentLoaded
  
//	var todos = [];
	
	$scope.$evalAsync(function(scope){
		console.log("$evalAsync");
	});
	
	$scope.$on('$viewContentLoaded', function() {
	    console.log("$viewContentLoaded");
    });
	
	$http.get('/de.amend.perf.angular/servicemock.json').success(function(data) {
	    $scope.todos = data.todoData;
//	    $("#angularAfterInitial").html($templateCache.get('inline_template'));
	  });
	
//	for(var current = 0; current < 100; current++){
//		todos.push({text:'build an angular app by angular', done:false});
//	}
//	$scope.todos =  todos;
	 
 
//	 $scope.$on('$viewContentLoaded', function() {
//	        $("#angularAfterInitial").html($scope.templates[0]);
//	    });
	
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
 
  $scope.ready = function(){
	  console.log("ng-template loaded");
  }
  
  
  
  $scope.controllerLoaded = function(){
	  console.log("controller loaded");
  }
  
  $scope.$on('$includeContentLoaded', function(event) {
	  console.log("$includeContentLoaded");
  });
  
  $scope.$on('$includeContentRequested', function(event){
	  console.log("$includeContentRequested");
  });
  
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}