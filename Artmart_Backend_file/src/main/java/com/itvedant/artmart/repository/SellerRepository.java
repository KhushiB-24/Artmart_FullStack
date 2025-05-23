package com.itvedant.artmart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itvedant.artmart.entity.Seller;
@Repository
public interface SellerRepository extends JpaRepository<Seller, Long>{

	boolean existsByEmail(String string);

	Seller findByEmail(String email);

}
