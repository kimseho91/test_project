package com.stock.web.sejong;

import java.util.List;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class SejongProxy {
	
	@Autowired BugsBean bugsbean;
	@Autowired BugsMapper bugsmapper;
	
	private int pageNum, pageSize, startRow, endRow, startPage, endPage, nextPage, prePage ;
	private boolean existPrev, existNext;
	private final int BLOCK_SIZE = 4;
	private List<Integer> pages;
	
	public int parseInt(String param) {
		Function<String, Integer> f = s -> Integer.parseInt(s);
		return f.apply(param);
	}
	
	public void paging() {
		Supplier<String> s = ()-> bugsmapper.countArticle();
		int totalCount = Integer.parseInt(s.get());
		int pageCount = (totalCount%pageSize==0)? totalCount/pageSize : totalCount/pageSize+1 ;
		startRow = (pageNum-1) * pageSize ;
		endRow = (pageNum == pageCount) ? totalCount-1 : startRow+pageSize-1 ;
		int blockCount = (pageCount%BLOCK_SIZE==0)? pageCount/BLOCK_SIZE : (pageCount/BLOCK_SIZE)+1 ;
		int blockNum = (pageNum-1) / BLOCK_SIZE;
		startPage = blockNum * BLOCK_SIZE + 1 ;
		endPage = (blockCount != (blockNum+1))? startPage + BLOCK_SIZE - 1 : pageCount ;
		existPrev = (blockNum!=0);
		existNext = ((blockNum+1)!=blockCount);
		nextPage = startPage+BLOCK_SIZE;
		prePage = startPage-BLOCK_SIZE;
		
	}
	
}
