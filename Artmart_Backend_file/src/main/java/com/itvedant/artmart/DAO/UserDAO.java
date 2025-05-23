package com.itvedant.artmart.DAO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class UserDAO {
	@NotBlank
	private String name;
	
	@Email
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;
	
	@Pattern(regexp = "^[0-9]{10}$", message = "Phone must be 10 digits")
	private String phone;
	private String usertype;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	@Override
	public String toString() {
		return "UserDAO [name=" + name + ", email=" + email + ", password=" + password + ", phone=" + phone
				+ ", usertype=" + usertype + "]";
	}
	
}
