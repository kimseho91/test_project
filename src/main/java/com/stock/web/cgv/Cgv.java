package com.stock.web.cgv;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import com.stock.web.bugs.Bugs;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Cgv {
	private String cgvseq, title, content, img;

}
