package com.stock.web.hr;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;


@Data
@Component
@Lazy
public class HrProxy {
	private List<String> proxyList;

	public List<String> crawl(Map<?, ?> paramMap) {
		String url = "";
		switch (paramMap.get("targetSite").toString()) {
		case "Bugs":
			url = "https://www.google.co.kr/";
			break;
		case "CGV":
			url = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" + paramMap.get("searchWrd");
			break;
		case "Naver":
			url = "https://www.youtube.com/results?search_query=" + paramMap.get("searchWrd");
			break;
		default:
			break;
		}
		return proxyList;
	}

	public List<Bugs> bugsCrawl() throws Exception {

		List<Bugs> tempList = new ArrayList<Bugs>();
		Bugs tempBugs = new Bugs();
		final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
		String bugs = "https://music.bugs.co.kr/chart/track/realtime/total?chartdate=20191115&charthour=09" ;

		Connection.Response homePage = Jsoup.connect(bugs) 
		    .method(Connection.Method.GET) 
		    .userAgent(USER_AGENT) 
		    .execute();
		Document temp = homePage.parse();
		Elements  tempforTitle = temp.select("p.title");
		Elements  tempforContent = temp.select("p.artist");
		Elements  tempforphoto = temp.select("a.thumbnail");
		
		int cnt = 0;
		for (Element tempTitle : tempforTitle) {
			tempBugs.setTitle(tempTitle.text());
			tempBugs.setContent(tempforContent.get(cnt).text());
			tempBugs.setImg(tempforphoto.get(cnt).select("img").attr("src"));
			System.out.println(tempBugs.toString());
			cnt++;
		}
		
		return tempList;
	}	
	
	public List<Cgv> cgvCrawl() throws Exception {
		
		List<Cgv> tempList = new ArrayList<Cgv>();
		Cgv tempCgvs = new Cgv();
		final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
		String bugs = "http://www.cgv.co.kr/movies/?lt=3" ;
		
		Connection.Response homePage = Jsoup.connect(bugs) 
				.method(Connection.Method.GET) 
				.userAgent(USER_AGENT) 
				.execute();
		Document temp = homePage.parse();
		Elements element = temp.select("div.sect-movie-chart");    


		Elements tempforTitle = element.select("strong.title");
		Elements tempforPrecent = element.select("strong.percent");
		Elements tempforTextinfo= element.select("span.txt-info");
		Elements  tempforphoto = temp.select("span.thumb-image");
		
				
		int cnt = 0;
		for (Element tempTitle : tempforTitle) {
			tempCgvs.setTitle(tempTitle.text());
			tempCgvs.setContent(tempforPrecent.get(cnt).text() + "/"+tempforTextinfo.get(cnt).text());
			tempCgvs.setImg(tempforphoto.get(cnt).select("img").attr("src"));
			System.out.println(tempCgvs.toString());
			cnt++;
		}
		
		return null;
		//return tempList;
	}	
}
