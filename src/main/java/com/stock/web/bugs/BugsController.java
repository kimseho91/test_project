package com.stock.web.bugs;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stock.web.pxy.Trunk;

@RestController
@RequestMapping("bugss")
public class BugsController {
	private static final Logger logger = LoggerFactory.getLogger(BugsController.class);
	
	@Autowired BugsMapper bugsMapper;
	@Autowired Trunk<Object> trunk;
	
	@GetMapping("/countArt")
	public Map<?,?> countArt() {
		Supplier<String> s = () -> bugsMapper.countBugs();
		trunk.put(Arrays.asList("count"), Arrays.asList(s.get()));
		return trunk.get();
	}
}
