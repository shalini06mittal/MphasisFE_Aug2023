package com.techgatha.blog.SpringBootBlogSecurityProject.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techgatha.blog.SpringBootBlogSecurityProject.entity.Blog;



public interface BlogRepository extends JpaRepository<Blog, Integer>{
    
    public List<Blog> findAllBlogByUserEmail(String email);

}
