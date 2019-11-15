"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img, auth_vue_js, router_js, navi_vue_js, brd_vue_js;
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		router_js=js+'/cmm/router.js'
		auth_vue_js=js+'/vue/auth_vue.js'
		navi_vue_js=js+'/vue/navi_vue.js'
		brd_vue_js=js+'/vue/brd_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(auth_vue_js),
			$.getScript(router_js),
			$.getScript(navi_vue_js)
		).done(()=>{
			setContentView()
			$('#a_go_bugs').click(e=>{
				e.preventDefault()
				alert('벅스 화면으로 변경')
				bugs()
				})
			$('#a_go_cgv').click()
			$('#a_go_naver').click()
			
			
		}).fail(()=>{
				alert(WHEN_ERR)
			})
	}
		
	let setContentView =()=>{
		$('head').html(auth_vue.login_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(auth_vue.login_body({css: $.css(), img: $.img()}))
	}
	
    let bugs = ()=>{
    	$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        		 .html(brd_vue.brd_body({cxt: '/web', css: $.css(), img: $.img()}))
        $(navi_vue.navi_body()).appendTo('#snavi_vue')
        recent_update({page : '1', size : '4'})
    }
    
    let recent_update=x=>{
    	
    }
    
	return {onCreate}	
	
})();
