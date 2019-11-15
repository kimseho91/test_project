package com.stock.web.sejong;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bugs")
public class BugsCtrl {
	
	@Autowired BugsBean bugsbean;
	@Autowired BugsMapper bugsmapper;
	@Autowired SejongProxy sejongpxy;
	@Autowired SejongProxyMap sejongpxymap;
	@Autowired List<BugsBean> list;
	
	private static final Logger logger = LoggerFactory.getLogger(BugsCtrl.class);
	
	@GetMapping("/page/{pageNo}/size/{pageSize}")
	public Map<?,?> listArt(@PathVariable String pageNo, @PathVariable String pageSize){
		
		System.out.println("넘어오는 값 : "+pageNo+" , "+pageSize);
		
		sejongpxy.setPageNum(sejongpxy.parseInt(pageNo));
		sejongpxy.setPageSize(sejongpxy.parseInt(pageSize));
		sejongpxy.paging();
		list.clear();
		Supplier<List<BugsBean>> s = () -> bugsmapper.selectAll(sejongpxy);
		
		List<Integer> pagelist = new ArrayList<>();
		for( int i=sejongpxy.getStartPage(); i<sejongpxy.getEndPage()+1 ; i++) {
			pagelist.add(i);
		}
		
		sejongpxymap.accept(Arrays.asList("articles", "pxy"),
				   Arrays.asList(s.get(), sejongpxy)) ;
		return sejongpxymap.get();
	}
	
}
