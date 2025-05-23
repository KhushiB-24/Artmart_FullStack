package com.itvedant.artmart.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itvedant.artmart.entity.Buyer;
import com.itvedant.artmart.service.UserServiceClass;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserControllerClass {
	 @Autowired
	    private UserServiceClass userServiceClass;

	    @PostMapping("")
	    public ResponseEntity<String> signUpUser(@Valid @RequestBody Map<String, String> user) {
	        return userServiceClass.signUpUser(user);
	    }
	    
	    
	    @PostMapping("/signin")
	    public ResponseEntity<String> signInUser(@RequestBody Map<String, String> credentials) {
	        return userServiceClass.signInUser(credentials);
	    }
	    
	    
	    @GetMapping("/email/{email}")
	    public Buyer getBuyerByEmail(@PathVariable String email) {
	        return userServiceClass.getBuyerByEmail(email);
	    }

}
