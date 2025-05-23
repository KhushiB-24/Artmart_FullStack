package com.itvedant.artmart.DAO;

public class AddProductDAO {
	private	String title;
	private String description;
	private String category;
	private Integer price;
	private String status;
	private String imgurl;
	 private String sellerEmail;
	public String getSellerEmail() {
		return sellerEmail;
	}
	public void setSellerEmail(String sellerEmail) {
		this.sellerEmail = sellerEmail;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	@Override
	public String toString() {
		return "AddProductDAO [title=" + title + ", description=" + description + ", category=" + category + ", price="
				+ price + ", status=" + status + ", imgurl=" + imgurl + ", sellerEmail=" + sellerEmail + "]";
	}
}
