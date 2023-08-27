package com.techgatha.blog.SpringBootBlogSecurityProject.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techgatha.blog.SpringBootBlogSecurityProject.dto.BlogResponse;
import com.techgatha.blog.SpringBootBlogSecurityProject.entity.Blog;
import com.techgatha.blog.SpringBootBlogSecurityProject.entity.Messages;
import com.techgatha.blog.SpringBootBlogSecurityProject.entity.ResponsePage;
import com.techgatha.blog.SpringBootBlogSecurityProject.repo.BlogRepository;



@RestController
@RequestMapping("/blogs")
@CrossOrigin
public class BlogRestController {
	
	@Autowired
	private BlogRepository repo;
	
	@GetMapping()
	public List<BlogResponse> getAllBlogs(@RequestParam (required = false) String email)
	{
	    List<Blog> blogs = new ArrayList<>();
		System.out.println("get all blogs");
		if(email == null)
		    blogs = this.repo.findAll();
		else
		    blogs =  repo.findAllBlogByUserEmail(email);
		
		return blogs.stream().map(blog -> {
		    
		   return convertBlog(blog);
		}).collect(Collectors.toList());
	}
	
	private BlogResponse convertBlog(Blog blog) {
	    BlogResponse resp = new BlogResponse();
        resp.setContent(blog.getContent());
        resp.setCreated(blog.getCreated());
        resp.setEmail(blog.getUser().getEmail());
        resp.setId(blog.getId());
        resp.setImgurl(blog.getImgurl());
        resp.setTitle(blog.getTitle());
        return resp;
	}
	@GetMapping("/{id}")
	public ResponseEntity<Object> getBlogById(@PathVariable int id)
	{
		System.out.println("get blog by id "+id);
			Optional<Blog> blog = this.repo.findById(id);
			if(blog.isPresent()) {
				Blog savedblog = blog.get();
				return ResponseEntity.ok(convertBlog(savedblog));
			}
			
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ResponsePage(Messages.FAILURE,"Blog with id "+id+" does not exist"));
		
	}
	@PostMapping()
	public ResponseEntity<ResponsePage> insertBlogs(@RequestBody Blog blog, @RequestParam String email)
	{
		System.out.println("inserting "+blog+ " "+email);
		try {
		    blog.getUser().setEmail(email);
			Blog savedBlog = this.repo.save(blog);
			System.out.println("saved blog "+savedBlog);
		}
		catch(Exception e)
		{
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
					.body(new ResponsePage(Messages.SUCCESS,"Could not insert"));
		}
			
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(new ResponsePage(Messages.FAILURE,"Blog inserted successfully"));
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<ResponsePage> deleteById(@PathVariable int id){
	    System.out.println("deleteing "+id);
        try {
            this.repo.deleteById(id);
        }
        catch(Exception e)
        {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                    .body(new ResponsePage(Messages.SUCCESS,"Blog deletion failed "));
        }
            
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body(new ResponsePage(Messages.FAILURE,"COuld not insert"));
	}
	

}
