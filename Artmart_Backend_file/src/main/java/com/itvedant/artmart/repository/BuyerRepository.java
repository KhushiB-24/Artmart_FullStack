package com.itvedant.artmart.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itvedant.artmart.entity.Buyer;

@Repository
public interface BuyerRepository extends JpaRepository<Buyer, Long>{

	boolean existsByEmail(String string);

    Buyer findByEmail(String email);

}
