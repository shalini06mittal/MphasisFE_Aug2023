package com.techgatha.blog.SpringBootBlogSecurityProject.filters;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.techgatha.blog.SpringBootBlogSecurityProject.service.LoginUserService;
import com.techgatha.blog.SpringBootBlogSecurityProject.util.JwtUtil;


@Component
public class JwtRequestFilter extends OncePerRequestFilter{

	@Autowired
	private LoginUserService userservice;
	
	@Autowired
	private JwtUtil jwtutil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final String header = request.getHeader("Authorization");
		String username = null;
		String jwt = null;
		System.out.println("******** FILETR *******************");
		System.out.println(header);
		if(header!=null && header.startsWith("Bearer"))
		{
			System.out.println("header null");
			jwt = header.substring(7);
			System.out.println(jwt);
			
			username = jwtutil.extractUsername(jwt);
			
		}
		if ( username!=null && SecurityContextHolder.getContext().getAuthentication()==null)
		{
			UserDetails userDetails = this.userservice.loadUserByUsername(username);
			if(jwtutil.validateToken(jwt, userDetails)) {
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = 
				new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
		}
		filterChain.doFilter(request, response);
	}
	

}
