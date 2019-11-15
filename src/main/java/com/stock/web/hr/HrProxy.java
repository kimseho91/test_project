package com.stock.web.hr;

import java.util.ArrayList;
import com.stock.web.sejong.BugsBean;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class HrProxy {
	private List<?> proxyList;
	@Autowired HrMapper hrMapper;
	//@Autowired Bugs bugs;
	
	
	public List<?> crawl(Trunk<Object> trunk) throws Exception {
		switch (trunk.get().get("targetSite").toString()) {
		case "Bugs":
			proxyList = bugsCrawl();
			break;
		case "CGV":
			proxyList =cgvCrawl();
			break;
		case "Naver":
			proxyList =naverCrawl();
			break;
		default:
			break;
		}
		return proxyList;
	}
@Transactional
	public List<BugsBean> bugsCrawl() throws Exception {

		List<BugsBean> tempList = new ArrayList<BugsBean>();
		BugsBean bugs = new BugsBean();
		final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
		String bugsurl = "https://music.bugs.co.kr/chart/track/realtime/total?chartdate=20191115&charthour=09" ;

		Connection.Response homePage = Jsoup.connect(bugsurl) 
		    .method(Connection.Method.GET) 
		    .userAgent(USER_AGENT) 
		    .execute();
		Document temp = homePage.parse();
		Elements  tempforTitle = temp.select("p.title");
		Elements  tempforContent = temp.select("p.artist");
		Elements  tempforphoto = temp.select("a.thumbnail");
		
		int bugsseq = 0;
		
		Consumer<BugsBean> b = t -> hrMapper.insertBugsRank(t);		
		for (Element tempTitle : tempforTitle) {
			bugs.setBugsseq(String.valueOf(bugsseq+1));
			bugs.setTitle(tempTitle.text());
			bugs.setContent(tempforContent.get(bugsseq).text());
			bugs.setImg(tempforphoto.get(bugsseq).select("img").attr("src"));
			b.accept(bugs);
			tempList.add(bugs);
			bugsseq++;
		}
		return tempList;
	}	
@Transactional
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
		
				
		int cgvseq = 0;
		Consumer<Cgv> c = t -> hrMapper.insertCgvRank(t);		
		for (Element tempTitle : tempforTitle) {
			tempCgvs.setCgvseq(String.valueOf(cgvseq+1));
			tempCgvs.setTitle(tempTitle.text());
			tempCgvs.setContent(tempforPrecent.get(cgvseq).text() + "/"+tempforTextinfo.get(cgvseq).text());
			tempCgvs.setImg(tempforphoto.get(cgvseq).select("img").attr("src"));
			tempList.add(tempCgvs);
			cgvseq++;
		}

		return tempList;
	}	
@Transactional
public List<Naver> naverCrawl() throws Exception {
	
	List<Naver> tempList = new ArrayList<Naver>();
	Naver tempNaver = new Naver();
	final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
	String bugs = "https://endic.naver.com/?sLn=kr" ;
	
	Connection.Response homePage = Jsoup.connect(bugs) 
			.method(Connection.Method.GET) 
			.userAgent(USER_AGENT) 
			.execute();
	Document temp = homePage.parse();
	Elements element = temp.select("ul.component_today_word");    
	
	
	Elements tempforTitle = element.select("div.txt_origin");
	Elements tempforContent = element.select("div.txt_trans");
	
	
	int naverseq = 0;
	Consumer<Naver> n = t -> hrMapper.insertNaver(t);		
	for (Element tempTitle : tempforTitle) {
		tempNaver.setNaverseq(String.valueOf(naverseq+1));
		tempNaver.setTitle(tempTitle.text());
		tempNaver.setContent(tempforContent.get(naverseq).text());
		tempList.add(tempNaver);
		System.out.println(tempNaver.toString().replace(" Î∞úÏùå ?ì£Í∏?", ""));
		n.accept(tempNaver);
		naverseq++;
	}
	
	
	
	return tempList;
}	
}
