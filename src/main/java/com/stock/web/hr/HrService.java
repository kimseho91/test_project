package com.stock.web.hr;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Lazy
@Service
@Transactional
public class HrService {
	@Autowired HrMapper hrMapper;
	@Autowired HrProxy pxy;
	
	
	public Map<?,?> crawling(Map<?,?> paramMap) throws Exception {
		List<?> hrServicelist = new ArrayList<>();
		hrServicelist.clear();
		hrServicelist = (List<?>) pxy.crawl(paramMap);
		Consumer<Bugs> b = t -> hrMapper.insertBugsRank(t);
		Consumer<Cgv> c = t -> hrMapper.insertCgvRank(t);
		Consumer<Naver> n = t -> hrMapper.insertNaver(t);
		switch (paramMap.get("targetSite").toString()) {
		case "Bugs":
			for (Object bugs : hrServicelist) {
				b.accept((Bugs) bugs);
			}
			break;
		case "CGV":
			for (Object cgv : hrServicelist) {
				c.accept((Cgv) cgv);
			}			
			break;
		case "Naver":
			for (Object naver : hrServicelist) {
				n.accept((Naver) naver);
			}					
			break;
		default:
			break;
		}
		return null;
		
	}
	
	
}
