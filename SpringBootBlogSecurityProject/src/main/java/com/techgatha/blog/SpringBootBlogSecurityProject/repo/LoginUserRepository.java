package com.techgatha.blog.SpringBootBlogSecurityProject.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techgatha.blog.SpringBootBlogSecurityProject.entity.LoginUser;



public interface LoginUserRepository extends JpaRepository<LoginUser, String>{

}
