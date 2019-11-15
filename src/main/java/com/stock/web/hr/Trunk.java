package com.stock.web.hr;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class Trunk <T>{
	private HashMap<String, T> map;
	public void accept(List<String> x, List<T> y) {
		map = new HashMap<String, T>();
		for (int i = 0; i < x.size(); i++) {
			map.put(x.get(i), y.get(i));
		}
		map.forEach((k,v)-> System.out.println(String.format("%s : %s", k , v )));
	}
	public HashMap<String, T>get(){return map;	}
	public int size() {return map.size();}

}
