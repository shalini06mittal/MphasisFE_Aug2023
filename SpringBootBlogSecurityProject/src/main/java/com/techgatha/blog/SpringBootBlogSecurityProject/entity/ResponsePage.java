package com.techgatha.blog.SpringBootBlogSecurityProject.entity;

public class ResponsePage {

	private Messages message;
	private String description;
	
	public ResponsePage() {
		// TODO Auto-generated constructor stub
	}
	
	public ResponsePage(Messages message, String description) {
		super();
		this.message = message;
		this.description = description;
	}

	public Messages getMessage() {
		return message;
	}
	public void setMessage(Messages message) {
		this.message = message;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "ResponsePage [message=" + message + ", description=" + description + "]";
	}
	
	
}
