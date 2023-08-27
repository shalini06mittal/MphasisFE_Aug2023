package com.techgatha.blog.SpringBootBlogSecurityProject.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.techgatha.blog.SpringBootBlogSecurityProject.entity.LoginUser;
import com.techgatha.blog.SpringBootBlogSecurityProject.repo.LoginUserRepository;


@Service
public class LoginUserService implements UserDetailsService{

	@Autowired
	private LoginUserRepository repo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<LoginUser> optuser = this.repo.findById(username);

		return optuser.map(acc ->{

			User user = new User(acc.getEmail(), 
					acc.getPassword(),
					new ArrayList<>());
			return user;
		})
		.orElseThrow(()-> new UsernameNotFoundException("User does not exist with username "+username))
				;

	}

}
