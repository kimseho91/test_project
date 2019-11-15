package com.stock.web.hr;

import java.util.List;
import com.stock.web.sejong.BugsBean;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface HrMapper {

	public void insertBugsRank(BugsBean t);
	public void insertCgvRank(Cgv t);
	public void insertNaver(Naver t);
	public List<Cgv> selectCgv();

}
