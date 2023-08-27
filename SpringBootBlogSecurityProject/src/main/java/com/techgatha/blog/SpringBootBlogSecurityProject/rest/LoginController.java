package com.techgatha.blog.SpringBootBlogSecurityProject.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.techgatha.blog.SpringBootBlogSecurityProject.entity.AuthenticationResponse;
import com.techgatha.blog.SpringBootBlogSecurityProject.entity.LoginUser;
import com.techgatha.blog.SpringBootBlogSecurityProject.entity.Messages;
import com.techgatha.blog.SpringBootBlogSecurityProject.entity.ResponsePage;
import com.techgatha.blog.SpringBootBlogSecurityProject.repo.LoginUserRepository;
import com.techgatha.blog.SpringBootBlogSecurityProject.service.LoginUserService;
import com.techgatha.blog.SpringBootBlogSecurityProject.util.JwtUtil;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private LoginUserService userDetailsService;

    @Autowired
    private LoginUserRepository repo;

    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthentication(
            @RequestBody LoginUser user) throws Exception
    {
        System.out.println("authenticate ......");
        System.out.println(user);
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        }
        catch(BadCredentialsException e)
        {
            //throw new Exception();
            System.out.println("login failed");
            return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Invalid Credentials"));
        }
        return ResponseEntity.ok().body(new ResponsePage(Messages.SUCCESS,"login success"));
        //		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        //		final String jwt = jwtUtil.generateToken(userDetails);
        //		return ResponseEntity.ok(new AuthenticationResponse(jwt));
        //		
    }
    @PostMapping("/signin")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody LoginUser authenticationRequest) throws Exception
    {
        System.out.println("authenticate ......");
        System.out.println(authenticationRequest.getEmail());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        }
        catch(BadCredentialsException e)
        {
            //throw new Exception();
            return ResponseEntity.badRequest().body(new ResponsePage(Messages.FAILURE,"Invalid Credentials"));
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());
        final String jwt = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));

    }
    @PostMapping()
    public ResponseEntity<?> adduser(@RequestBody LoginUser user){

        System.out.println("add user");
        if(!repo.existsById(user.getEmail())) {
            repo.save(user);
            return ResponseEntity.ok().body(new ResponsePage(Messages.SUCCESS,"User registered successfully"));
        }
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(new ResponsePage(Messages.FAILURE,"User with that email already exists "));
    }

}
