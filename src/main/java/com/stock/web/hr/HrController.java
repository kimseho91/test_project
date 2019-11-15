package com.stock.web.hr;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Lazy
@RestController
@RequestMapping("/hr")
public class HrController {
	@Autowired Map<String, Object>map;
	@Autowired HrService hrService;
	
	@GetMapping("/{targetSite}/{searchWrd}")
	public Map<String, Object> register(@PathVariable String targetSite,
			@PathVariable String searchWrd) throws Exception{
		map.put("targetSite", targetSite);
		map.put("searchWrd", searchWrd);
		hrService.crawling(map);
		map.put("msg", "SUCCESS");
		return map;		
	}	
	
}
