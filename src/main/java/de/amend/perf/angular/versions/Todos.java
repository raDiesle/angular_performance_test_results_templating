package de.amend.perf.angular.versions;

import java.util.ArrayList;
import java.util.List;

public class Todos {

	private String title;
	private List<TodoData> todoData = new ArrayList();
	int remaining = 0;
	int size =0;
	
	public Todos() {
		title = "Todos";
		for(int current=0; current < 100; current++){
			todoData.add(new TodoData("build an angular app", true));
		}
	}

	public void addOriginPostfixInformationInTexts(String postfix){
		for(TodoData todo : todoData){
			todo.setText(todo.getText()+postfix);
		}
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	public List<TodoData> getTodoData() {
		return todoData;
	}

	public void setTodoData(List<TodoData> todoData) {
		this.todoData = todoData;
	}

	public int getRemaining() {
		for(TodoData todo : todoData){
			if(!todo.isDone()){
				remaining++;
			}
		}
		return remaining;
	}

	public void setRemaining(int remaining) {
		this.remaining = remaining;
	}

	public int getSize() {
		return todoData.size();
	}

	public void setSize(int size) {
		this.size = size;
	}

	
}
