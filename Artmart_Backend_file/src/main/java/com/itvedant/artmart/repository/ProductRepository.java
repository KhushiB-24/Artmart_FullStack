package com.itvedant.artmart.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itvedant.artmart.entity.Product;
import com.itvedant.artmart.entity.Seller;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	Optional<Product> findById(Long id);

	List<Product> findBySeller(Seller seller); 

	
}
