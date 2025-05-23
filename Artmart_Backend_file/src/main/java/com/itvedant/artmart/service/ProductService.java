package com.itvedant.artmart.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.itvedant.artmart.entity.Product;
import com.itvedant.artmart.entity.Seller;
import com.itvedant.artmart.repository.ProductRepository;
import com.itvedant.artmart.repository.SellerRepository;
import com.itvedant.artmart.FileStorageProperties;
import com.itvedant.artmart.DAO.AddProductDAO;
import com.itvedant.artmart.DAO.UpdateProductDAO;
import com.itvedant.artmart.exception.StorageException;

@Service
public class ProductService {
	
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	
	private final Path rootLocation;
	
	public ProductService(FileStorageProperties properties) {
		this.rootLocation = Paths.get(properties.getUploadDir());
		
		try {
			Files.createDirectories(rootLocation);
		} catch (IOException e) {
			throw new StorageException("could not initialize directory");
		}
		
	}
	
	
	//This is for create new product in the database(add new product in the database)
	public Product createNewProduct(AddProductDAO addProductDAO) {
		Seller seller = sellerRepository.findByEmail(addProductDAO.getSellerEmail());

	    if (seller == null) {
	        throw new RuntimeException("Seller not found with email: " + addProductDAO.getSellerEmail());
	    }
	    Product product = new Product();
	    product.setTitle(addProductDAO.getTitle());
	    product.setDescription(addProductDAO.getDescription());
	    product.setCategory(addProductDAO.getCategory());
	    product.setPrice(addProductDAO.getPrice());
	    product.setStatus(addProductDAO.getStatus());
	    product.setSeller(seller);
	  
	    return productRepository.save(product);
	}

	
	//This is for get all product from database
	public List<Product> ReadAll(){
		List<Product> products = new ArrayList<Product>();
		
		products = this.productRepository.findAll();
		
		return products;
		
	}
	
	
	
	public List<Product> readProductsBySellerEmail(String email) {
	    Seller seller = sellerRepository.findByEmail(email);
	            
	    return productRepository.findBySeller(seller);
	}
	
	
	public Product readByProductID(Long id) {
		Product product = new Product();
		product = this.productRepository.findById(id).orElse(null);
		
		return product; 
	}

	public String deleteProduct(Long id) {
		Product product = new Product();
		
		product = this.readByProductID(id);
		
		this.productRepository.delete(product);
		
		return "Product Data Deleted Successfully";
	}
	
	public Product updateProduct(Long id, UpdateProductDAO updateProductDAO) {
		
		Product product = new Product();
		
		product = this.readByProductID(id);
		
		if(updateProductDAO.getTitle() != null) {
			product.setTitle(updateProductDAO.getTitle());
		}
		
		if(updateProductDAO.getDescription() != null) {
			product.setDescription(updateProductDAO.getDescription());
		}
		
		if(updateProductDAO.getPrice() != null) {
			product.setPrice(updateProductDAO.getPrice());
		}
		
		if(updateProductDAO.getCategory() != null) {
			product.setCategory(updateProductDAO.getCategory());
		}
		
		if(updateProductDAO.getStatus() != null) {
			product.setStatus(updateProductDAO.getStatus());
		}
		
		if(updateProductDAO.getImgurl() != null) {
			product.setStatus(updateProductDAO.getImgurl());
		}
		 
		this.productRepository.save(product);
		return product;
	}
	
	
	//This code for store the image in the database	
	public String StoreFile(Long id, MultipartFile file) {
	    try {
	        if (file.isEmpty()) {
	            throw new StorageException("Cannot store empty file");
	        }

	        // Extract file extension
	        String originalFilename = file.getOriginalFilename();
	        String fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));

	        // Generate a unique filename (e.g., 1712212331213_image.jpg)
	        String uniqueFilename = System.currentTimeMillis() + "_" + originalFilename.replaceAll("[^a-zA-Z0-9.]", "_");

	        // Define the path where the file will be stored
	        Path destinationFile = this.rootLocation.resolve(uniqueFilename).normalize();

	        // Save file
	        try (InputStream inputStream = file.getInputStream()) {
	            Files.copy(inputStream, destinationFile, StandardCopyOption.REPLACE_EXISTING);
	        }

	        // Fetch the product by ID
	        Product product = this.productRepository.findById(id).orElseThrow(() -> new StorageException("Product not found"));

	        // Construct the URL where the image can be accessed
	        String fileUploadUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
	                .path("/products/download/")
	                .path(uniqueFilename)  // Ensure the path is properly set
	                .toUriString();

	        // Update the product image URL
	        product.setImgurl(fileUploadUrl);
	        this.productRepository.save(product);

	        return "File Stored Successfully: " + fileUploadUrl;

	    } catch (Exception e) {
	        throw new StorageException("Could not store file: " + e.getMessage());
	    }
	}

	
	public Resource loadResource(String fileName) {
		Path file = rootLocation.resolve(fileName);
		
		try {
			Resource resource = new UrlResource(file.toUri());
			
			if(resource.exists() || resource.isReadable()) {
				return resource;
			}else {
				throw new StorageException("Could not read file");
			}
		} catch (Exception e) {
			throw new StorageException("Could not read file");
		}
	}



	
}
