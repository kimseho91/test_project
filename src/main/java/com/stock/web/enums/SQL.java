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
					+ "BUGSSEQ VARCHAR(10),\r\n"
					+ "TITLE VARCHAR(30),\r\n"
					+ "CONTENT VARCHAR(50),\r\n"
					+ "IMG VARCHAR(50))";
			break;
		case CREATE_CGV:
			result = "CREATE TABLE STOCKDB.CGV("
					+ "CGVSEQ VARCHAR(10),\r\n"
					+ "TITLE VARCHAR(30),\r\n"
					+ "CONTENT VARCHAR(50),\r\n"
					+ "IMG VARCHAR(50))";
			break;
		case CREATE_NAVER:
			result = "CREATE TABLE STOCKDB.NAVER("
					+ "NAVERSEQ VARCHAR(10),\r\n"
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
