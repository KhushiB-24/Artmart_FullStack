package com.itvedant.artmart.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.itvedant.artmart.entity.Buyer;
import com.itvedant.artmart.entity.Seller;
import com.itvedant.artmart.repository.BuyerRepository;
import com.itvedant.artmart.repository.SellerRepository;

@Service
public class UserServiceClass {
	@Autowired
    private BuyerRepository buyerRepository;

    @Autowired
    private SellerRepository sellerRepository;

    public ResponseEntity<String> signUpUser(Map<String, String> user) {   //pass the data from the front end to save in the database
    	
        String userType = user.get("usertype");	

        if ("Buyer".equalsIgnoreCase(userType)) {	//verify user is buyer or not
            if (buyerRepository.existsByEmail(user.get("email"))) { //checking .....is this user already exist in the database?
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Buyer already exists");
            }
            Buyer buyer = new Buyer();	//create new object for buyer
            buyer.setName(user.get("name"));
            buyer.setEmail(user.get("email"));
            buyer.setPassword(user.get("password"));
            buyer.setPhone(user.get("phone"));
            buyerRepository.save(buyer);   //info saved successfully
            return ResponseEntity.ok("Buyer registered successfully");
            
        } else if ("Seller".equalsIgnoreCase(userType)) {	//verify user is seller or not
            if (sellerRepository.existsByEmail(user.get("email"))) {	//checking .....is this user already exist in the database?
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Seller already exists");
            }
            Seller seller = new Seller();	//create new object for seller
            seller.setName(user.get("name"));
            seller.setEmail(user.get("email"));
            seller.setPassword(user.get("password"));
            seller.setPhone(user.get("phone"));
            sellerRepository.save(seller);  //info saved successfully
            return ResponseEntity.ok("Seller registered successfully");
            
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid user type");
        }
    }
    
    
    
    public ResponseEntity<String> signInUser(Map<String, String> credentials) {
        String userType = credentials.get("usertype");
        String email = credentials.get("email");
        String password = credentials.get("password");

        if ("Buyer".equalsIgnoreCase(userType)) {
            Buyer buyer = buyerRepository.findByEmail(email);
            if (buyer == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Buyer not found");
            }
            if (!buyer.getPassword().equals(password)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
            return ResponseEntity.ok("Login Successfully!");
        } else if ("Seller".equalsIgnoreCase(userType)) {
            Seller seller = sellerRepository.findByEmail(email);
            if (seller == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Seller not found");
            }
            if (!seller.getPassword().equals(password)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
            return ResponseEntity.ok("Login Successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid user type");
        }
    }
    
    
    public Buyer getBuyerByEmail(String email) {
        return buyerRepository.findByEmail(email);
    }

}
