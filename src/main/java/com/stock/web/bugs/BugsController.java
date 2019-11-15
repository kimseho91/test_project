package com.stock.web.bugs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("bugss")
public class BugsController {
	private static final Logger logger = LoggerFactory.getLogger(BugsController.class);
}
