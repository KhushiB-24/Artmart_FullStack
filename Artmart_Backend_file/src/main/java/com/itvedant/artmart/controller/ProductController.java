package com.itvedant.artmart.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.itvedant.artmart.DAO.AddProductDAO;
import com.itvedant.artmart.DAO.UpdateProductDAO;
import com.itvedant.artmart.entity.Product;
import com.itvedant.artmart.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	private ProductService productService;
	
	@PostMapping("")
	public ResponseEntity<?> newProduct( @RequestBody AddProductDAO addProductDAO) {
		return ResponseEntity.ok(this.productService.createNewProduct(addProductDAO));
	}
	
	@GetMapping("")
	public ResponseEntity<?> read(){
		return ResponseEntity.ok(this.productService.ReadAll());
	}
		
	@GetMapping("/{id}")
	public ResponseEntity<?> readById(@PathVariable Long id){
		return ResponseEntity.ok(this.productService.readByProductID(id));
	} 
	
	@GetMapping("/seller")
	public List<Product> getProductsBySeller(@RequestParam String email) {
	    return productService.readProductsBySellerEmail(email);
	}

	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody UpdateProductDAO updateProductDAO){
		return ResponseEntity.ok(this.productService.updateProduct(id, updateProductDAO));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long id){
		return ResponseEntity.ok(this.productService.deleteProduct(id));
	}
	
	@PostMapping("/{id}/upload")
	public ResponseEntity<?> upload(@PathVariable Long id, @RequestParam("file") MultipartFile file){
		return ResponseEntity.ok(this.productService.StoreFile(id, file));
	}
	
	@GetMapping("download/{fileName}")
	public ResponseEntity<?> download(@PathVariable String fileName){
		Resource resource = this.productService.loadResource(fileName);
		return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename\"" + fileName + "\"").body(resource);
	}
}
