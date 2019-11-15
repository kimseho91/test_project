"use strict";
var cgv = cgv || {};
cgv = (()=>{
	
	let _, js,css,img, brd_vue_js
	
	let init = ()=>{
    	_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
        brd_vue_js = js+'/vue/brd_vue.js'	        
	}
	
	let onCreate =()=>{
		init();
		$.getScript(brd_vue_js)
		//setContentView();
		contentList();
	}

	let setContentView = ()=>{
		$('head').html(brd_vue.brd_head({css , img, js}))
	}
	
	let contentList = () =>{
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
	
	return {onCreate}
	
})();