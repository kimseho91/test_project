package com.stock.web.sejong;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class BugsBean {

	private String bugsseq, title, content, img;
	
}
