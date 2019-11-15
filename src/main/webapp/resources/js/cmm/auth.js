"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img, auth_vue_js, router_js, navi_vue_js, brd_vue_js, cgv_js;
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		router_js=js+'/cmm/router.js'
		auth_vue_js=js+'/vue/auth_vue.js'
		navi_vue_js=js+'/vue/navi_vue.js'
		brd_vue_js=js+'/vue/brd_vue.js'
		cgv_js=js+'/brd/cgv.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(auth_vue_js),
			$.getScript(router_js),
			$.getScript(navi_vue_js),
			$.getScript(cgv_js)
		).done(()=>{
			setContentView()
			$('#a_go_bugs').click(e=>{
				e.preventDefault()
				alert('벅스 화면으로 변경')
				bugs()
				})
			$('#a_go_cgv').click(e=>{
				e.preventDefault()
				alert('cgv 화면으로 변경'+cgv_js)
				cgv()
				})
			
			$('#a_go_naver').click(e=>{
				e.preventDefault()
				alert('네이버 화면으로 변경')
				naver()
				})
			
			
		}).fail(()=>{
				alert(WHEN_ERR)
			})
	}
	// test
	
	let setContentView =()=>{
		$('head').html(auth_vue.login_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(auth_vue.login_body({css: $.css(), img: $.img()}))
        webCrawl()
	}
	
    let bugs = ()=>{
    	$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        		 .html(brd_vue.brd_body({cxt: '/web', css: $.css(), img: $.img()}))
        $(navi_vue.navi_body()).appendTo('#snavi_vue')
        recent_update({page : '1', size : '4'})
    }
    
    let naver = ()=>{
    	$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        		 .html(brd_vue.brd_body({cxt: '/web', css: $.css(), img: $.img()}))
        $(navi_vue.navi_body()).appendTo('#snavi_vue')
        recent_update_naver({page : '1', size : '4'})
    }  
    
    
    let recent_update=x=>{
		$('#recent_updates .media').remove()
		$('#suggestions').remove()
        $('#recent_updates .d-block').remove()
        $('#recent_updates .container').remove()
        $.getJSON(_+'/bugs/page/'+x.page+'/size/'+x.size, d=>{
        	alert('getJSON 성공')
        	$.each(d.articles, (i,j)=>{
        		$('<div class="media text-muted pt-3">'+
			      '	<img src="'+j.img+'" alt="32x32" class="mr-2 rounded" style="width: 32px; height: px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
			      '          <p id="id_'+i+'" class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			      '			</p></div>')
			    .appendTo('#recent_updates')
			    $('<strong class="d-block text-gray-dark"><a>'+j.bugsseq+'위 : </a></strong>')
			    .appendTo("#id_"+i)
			    $('<strong class="d-block text-gray-dark"><a>'+j.title+'</a></strong>')
			    .appendTo("#id_"+i)
	        })
	        $(page_vue.pagination()).appendTo('#recent_updates')
	        $('#pagination').empty()
	        
	        if(d.pxy.existPrev){
	        	$('<li class="page-item"><a class="page-link" href="#">Previous</a></li>')
	        	.appendTo('#pagination')
	        	.click(e=>{
	        		e.preventDefault()
	        		alert('이전 블럭으로 이동'+ d.pxy.prePage)
	        		recent_update({page : d.pxy.prePage, size : 4})	        	
	        })
	        }

        	let i = 0
        	for( i=d.pxy.startPage; i<d.pxy.endPage+1 ; i++) {
        		if(i==d.pxy.pageNum){
        			$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
    	        	.appendTo('#pagination')
    	        	.addClass('active')
        		}else {
        			$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
    	        	.appendTo('#pagination')
    	        	.click(function(){
    	        		alert($(this).children('.page-link').text()+'페이지 이동')
    	        		recent_update({page : $(this).children('.page-link').text(), size : 4})
    	        		})
        		}
        	}
        	
	        if(d.pxy.existNext){
	        $('<li class="page-item"><a class="page-link" href="#">Next</a></li>')
	        .appendTo('#pagination')
	        .click(e=>{
	        	e.preventDefault()
	        	alert('다음 블럭으로 이동'+d.pxy.nextPage)
        		recent_update({page : d.pxy.nextPage, size : 4})	        	
	        })
	        }
	        
	        $('#pagination').css({'justify-content' : 'center'})
	        $('#recent_updates h2').remove()

        })
	}
    
    let recent_update_naver=x=>{
		$('#recent_updates .media').remove()
		$('#suggestions').remove()
        $('#recent_updates .d-block').remove()
        $('#recent_updates .container').remove()
        $.getJSON(_+'/naver/page/'+x.page+'/size/'+x.size, d=>{
        	alert('getJSON 성공')
        	$.each(d.articles, (i,j)=>{
        		$('<div class="media text-muted pt-3">'+
			      '	<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
			      '          <p id="id_'+i+'" class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			      '			</p></div>')
			    .appendTo('#recent_updates')
			    $('<strong class="d-block text-gray-dark"><a>'+j.title+'</a></strong>')
			    .appendTo("#id_"+i)
			    $('<strong class="d-block text-gray-dark"><a>'+j.content+'</a></strong>')
			    .appendTo("#id_"+i)
	        })
	        $(page_vue.pagination()).appendTo('#recent_updates')
	        $('#pagination').empty()
	        
	        if(d.pxy.existPrev){
	        	$('<li class="page-item"><a class="page-link" href="#">Previous</a></li>')
	        	.appendTo('#pagination')
	        	.click(e=>{
	        		e.preventDefault()
	        		alert('이전 블럭으로 이동'+ d.pxy.prePage)
	        		recent_update_naver({page : d.pxy.prePage, size : 4})	        	
	        })
	        }

        	let i = 0
        	for( i=d.pxy.startPage; i<d.pxy.endPage+1 ; i++) {
        		if(i==d.pxy.pageNum){
        			$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
    	        	.appendTo('#pagination')
    	        	.addClass('active')
        		}else {
        			$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
    	        	.appendTo('#pagination')
    	        	.click(function(){
    	        		alert($(this).children('.page-link').text()+'페이지 이동')
    	        		recent_update_naver({page : $(this).children('.page-link').text(), size : 4})
    	        		})
        		}
        	}
        	
	        if(d.pxy.existNext){
	        $('<li class="page-item"><a class="page-link" href="#">Next</a></li>')
	        .appendTo('#pagination')
	        .click(e=>{
	        	e.preventDefault()
	        	alert('다음 블럭으로 이동'+d.pxy.nextPage)
        		recent_update_naver({page : d.pxy.nextPage, size : 4})	        	
	        })
	        }
	        
	        $('#pagination').css({'justify-content' : 'center'})
	        $('#recent_updates h2').remove()

        })
	}
    
    let cgv = ()=>{
    	$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').empty()
        $('body').html(brd_vue.cgv_brd())
		$('#recent div[class="media text-muted pt-3"]').remove()
		$('#recent small[class="d-block text-right mt-3"]').remove()
		$.ajax({
			url : _+'/hr/cgv', 
			type : 'GET',
			contentType : 'application/json',
			success : d =>{
					$.each(d.cgv, ( i , j)=>{
						$('<div>',{
							href : '#'
						})
						.append(brd_vue.cgv_rank_brd(j))
						.appendTo('.row')			
						.click(e=>{
							e.preventDefault()
						})
					})
			},
			error : e =>{
			}
		})
    }
    
    let webCrawl=()=>{
        $('#right').empty()
        $('</br></br><h2>Web Crawling</h2></br></br>'+
                '<form id="crawl_form" class="form-inline my-2 my-lg-0">'+
                '  <select name="targetSite" size="1" multiple>'+
                '  </select>'+
                '</form>')
        .appendTo('#right')
        
        
        $('#crawl_form input[class="form-control mr-sm-2"]')
        .css({width:'80%'})
        $.each([{sub:'Bugs'},{sub:'CGV'},{sub:'Naver'}],(i,j)=>{
            $('<option value='+j.sub+'>'+j.sub+'</option>').appendTo('#crawl_form select')
        })
        
        $('<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>')
        .appendTo('#crawl_form')
        .click(e=>{
            e.preventDefault()
            let arr = $('#crawl_form select[name="site"]').val()
                $.getJSON(_+'/hr/'+$('#crawl_form select[name="targetSite"]').val()
                        ,d=>{arr+ alert(" 크롤링" + d.msg)
                })
        })
    }
    
	return {onCreate}	
	
})();
