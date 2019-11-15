package com.stock.web.naver;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import com.stock.web.cgv.Cgv;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Naver {
	private String naverseq, title, content;

}
