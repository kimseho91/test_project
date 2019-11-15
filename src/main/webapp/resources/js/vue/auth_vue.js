var auth_vue = auth_vue || {}

auth_vue = {
	
	login_head: x=>{
		return '<head>'+
		'	<meta charset="UTF-8" />'+
		'	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'	<title>Document</title>'+
		'	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		'	 <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		'    <meta name="generator" content="Jekyll v3.8.5">'+
		'    <title>Signin Template · Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/">'+
		'    <style>'+
		'      .bd-placeholder-img {'+
		'        font-size: 1.125rem;'+
		'        text-anchor: middle;'+
		'        -webkit-user-select: none;'+
		'        -moz-user-select: none;'+
		'        -ms-user-select: none;'+
		'        user-select: none;'+
		'      }'+
		'      @media (min-width: 768px) {'+
		'        .bd-placeholder-img-lg {'+
		'          font-size: 3.5rem;'+
		'        }'+
		'      }'+
		'    </style>'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="'+x.css+'/signin.css" rel="stylesheet">    '+
		'</head>'
	},
	
	login_body: x=>{
		return '<body class="text-center">'+
		'  <form id="form_join" class="form-signin">'+
		'    <img class="mb-4" src="'+x.img+'/bootstrap-solid.svg" alt="" width="72" height="72">'+
		'    <h1 class="h3 mb-3 font-weight-normal">메뉴를 선택하세요</h1>'+
		'    <div class="checkbox mb-3">'+
		'        </br></br></br></br><a id="a_go_bugs" href="#">벅스 최신곡 리스트</a></br></br></br>        '+
		'        <a id="a_go_cgv" href="#">CGV 예매 리스트</a></br></br></br>        '+
		'        <a id="a_go_naver" href="#">Naver 오늘의 단어</a></br></br></br>        '+
		'    </div>'+
		'    <div id="btn_login"></div>'+
		'    <p class="mt-5 mb-3 text-muted">© 2017-2019</p>'+
		'  </form>'+
		'</body>'
	}
	
};