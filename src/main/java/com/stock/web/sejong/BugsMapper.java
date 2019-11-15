package com.stock.web.sejong;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface BugsMapper {

	public String countArticle();
	
	public String countNaver();

	public List<BugsBean> selectAll(SejongProxy sejongpxy);
	
	public List<NaverBean> selectAllNaver(SejongProxy sejongpxy);
	
}
