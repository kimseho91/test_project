package com.stock.web.hr;


import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/hr")
public class HrController {
	@Autowired Trunk<Object> trunk;
	@Autowired HrService hrService;
	@Autowired HrMapper hrMapper;
	
	@GetMapping("/{targetSite}")
	public HashMap<String, Object> register(@PathVariable String targetSite) throws Exception{
		trunk.accept(Arrays.asList("targetSite"),Arrays.asList(targetSite) );
		hrService.crawling(trunk);
		trunk.accept(Arrays.asList("msg"),Arrays.asList("SUCCESS"));
		return trunk.get();		
	}	
	
	
	@GetMapping("/cgv")
	public HashMap<String, Object> Cgv() throws Exception{
		Supplier<List<Cgv>> n = () -> hrMapper.selectCgv();
		trunk.accept(Arrays.asList("msg", "cgv"), Arrays.asList("SUCCESS", n.get()));
		return trunk.get();
	}	
	
}
