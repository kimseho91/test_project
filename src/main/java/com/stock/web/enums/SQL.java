package com.stock.web.enums;

public enum SQL {
	CREATE_STOCKDB, CREATE_BUGS, CREATE_CGV, CREATE_NAVER, DROP_BUGS, DROP_CGV, DROP_NAVER;

	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case CREATE_STOCKDB:
			result = "CREATE DATABASE STOCKDB";
			break;
		case CREATE_BUGS:
			result = "CREATE TABLE STOCKDB.BUGS("
					+ "BUGSSEQ INT(10) PRIMARY KEY AUTO_INCREMENT,\r\n"
					+ "TITLE VARCHAR(30),\r\n"
					+ "CONTENT VARCHAR(50),\r\n"
					+ "IMG VARCHAR(50))";
			break;
		case CREATE_CGV:
			result = "CREATE TABLE STOCKDB.CGV("
					+ "CGVSEQ INT(10) PRIMARY KEY AUTO_INCREMENT,\r\n"
					+ "TITLE VARCHAR(30),\r\n"
					+ "CONTENT VARCHAR(50),\r\n"
					+ "IMG VARCHAR(50))";
			break;
		case CREATE_NAVER:
			result = "CREATE TABLE STOCKDB.NAVER("
					+ "NAVERSEQ INT(10) PRIMARY KEY AUTO_INCREMENT,\r\n"
					+ "TITLE VARCHAR(30),\r\n"
					+ "CONTENT VARCHAR(50),\r\n"
					+ "IMG VARCHAR(50))";
			break;
		case DROP_BUGS:
			result = "DROP TABLE STOCKDB.BUGS";
			break;
		case DROP_CGV:
			result = "DROP TABLE STOCKDB.CGV";
			break;
		case DROP_NAVER:
			result = "DROP TABLE STOCKDB.NAVER";
			break;

		default:
			break;
		}
		return result;
	}

}
