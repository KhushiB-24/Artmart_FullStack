package com.itvedant.artmart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(FileStorageProperties.class)
public class ArtmartManagementSysApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArtmartManagementSysApplication.class, args);
	}

}
