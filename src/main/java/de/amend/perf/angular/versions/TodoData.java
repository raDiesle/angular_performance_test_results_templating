package de.amend.perf.angular.versions;

public class TodoData {
	
	private String text;
	private boolean done;
	
	public TodoData(String text, boolean done) {
		super();
		this.text = text;
		this.done = done;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	
	
}
