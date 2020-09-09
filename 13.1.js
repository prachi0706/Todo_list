var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {

	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		newTodos();
 	} else if (input === "delete") {
 		deleteTodos();
 	}

  input = prompt("What would you like to do?");
}
 console.log("OK, YOU QUIT THE APP");

 function listTodos(){
 	console.log("**********")
		todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
    console.log("**********")
 }

function newTodos(){
	var newTodo = prompt("Enter new todo");
 	todos.push(newTodo);
 	console.log("Added Todo");
}

function deleteTodos(){
	var index = prompt("Enter index of todo to delete");
 		todos.splice(index,1);
 		console.log("Deleted Todo");
}