package com.stock.web.pxy;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component("bugspxy")
public class BugsProxy extends Proxy{
	
	@Transactional
	public void insertBugs() {
		for(int i=0 ; i<100 ; i++) {
			
		}
	}
}
