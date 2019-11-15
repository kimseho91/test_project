package com.stock.web.pxy;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component("cgvpxy")
public class CgvProxy extends Proxy{
	
	@Transactional
	public void insertCgv() {
		for(int i=0 ; i<100 ; i++) {
			
		}
	}
}
