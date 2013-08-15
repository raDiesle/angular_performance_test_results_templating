<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html ng-app>
  <head>
    <script src="/de.amend.perf.angular/resources/js/angular_used.js"></script>
    <script src="index.js"></script>
    <link rel="stylesheet" type="text/css" href="/de.amend.perf.angular/resources/css/core.css" />    
  </head>
  <body ng-controller="TodoCtrl" data-ng-init="controllerLoaded()">
 
 <%= (int) (Math.random() * 100) %>

<span id="initialServerSide" ng-hide="hide" >
  <jsp:useBean id="todos" class="de.amend.perf.angular.versions.Todos" scope="request"></jsp:useBean>
   <h2><jsp:getProperty name="todos" property="title" />_fromJSP</h2>
    <div>
      <span>${todos.remaining} of ${todos.size} remaining</span>
      <ul class="unstyled">
        
        <c:forEach items="${todos.todoData}" var="todo">
	        <li>
	          <input type="checkbox" value="${todo.done}">
	          <span class="done-${todo.done}">${todo.text}</span>
	        </li>
        </c:forEach>
      </ul>
      <form ng-submit="addTodo()">
        <input type="text" ng-model="todoText"  size="30"
               placeholder="add new todo here">
        <input class="btn-primary" type="submit" value="add">
      </form>
    </div>
</span>



<script type="text/ng-template" id="inline_template" > 


	<h2>Todo from ng-template</h2>
	
	  <span>{{remaining()}} of {{todos.length}} remaining</span>
	  [ <a href="" ng-click="archive()">archive</a> ]
	  <ul class="unstyled">
	    <li ng-repeat="todo in todos">
	      <input type="checkbox" ng-model="todo.done">
	      <span class="done-{{todo.done}}">{{todo.text}}</span>
	    </li>
	  </ul>
	  <form ng-submit="addTodo()">
	    <input type="text" ng-model="todoText"  size="30"
	           placeholder="add new todo here">
	    <input class="btn-primary" type="submit" value="add">
	  </form>
	</div>
 </script>
 
 <span id="angularAfterInitial" ng-hide="false"  > 
  <ng-include src="'inline_template'" onload="hide=true" ></ng-include> 
<!--        onload="$viewContentLoaded" -->
</span>

  </body>
</html>