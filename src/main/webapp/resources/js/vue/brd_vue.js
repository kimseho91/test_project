var brd_vue = brd_vue || {}
brd_vue = {
	brd_head:()=>{
		return '<head>'+
		'<meta charset="utf-8">'+
	    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="">'+
	    '<link rel="icon" href="https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico">'+
		'    <title>Offcanvas template for Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/">'+
		'    <!-- Bootstrap core CSS -->'+
	    '<link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.css" rel="stylesheet">'+
		'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'
		'  </head>'
	
	},
	brd_body: ()=>{
		return  '<body class="bg-light">'+
		'	<div id="snavi_vue">'+
		'	</div>'+
		'    <div class="nav-scroller bg-white box-shadow">'+
		'      <nav class="nav nav-underline">'+
		'        <a  class="nav-link active" href="#">DashBoard</a>'+
		'        <a class="nav-link" href="#">'+
		'          Friends'+
		'          <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
		'        </a>'+
		'        <a class="nav-link" href="#">Explore</a>'+
		'        <a class="nav-link" href="#">Suggestions</a>'+
		'        <a class="nav-link" href="#">Link</a>'+
		'        <a class="nav-link" href="#">Link</a>'+
		'        <a class="nav-link" href="#">Link</a>'+
		'        <a class="nav-link" href="#">Link</a>'+
		'        <a class="nav-link" href="#">Link</a>'+
		'      </nav>'+
		'    </div>'+
		'    <main role="main" class="container">'+
		'      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">'+
		'        <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
		'        <div class="lh-100">'+
		'          <h6 class="mb-0 text-white lh-100">게시판</h6>'+
		'          <small>2019-10-25</small>'+
		'        </div>'+
		'      </div>'+

		'      <div id="recent_updates" class="my-3 p-3 bg-white rounded box-shadow">'+
		'        <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
		'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <strong class="d-block text-gray-dark">@username</strong>'+
		'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		'          </p>'+
		'        </div>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=e83e8c&amp;fg=e83e8c&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb75%20text%20%7B%20fill%3A%23e83e8c%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb75%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23e83e8c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <strong class="d-block text-gray-dark">@username</strong>'+
		'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		'          </p>'+
		'        </div>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=6f42c1&amp;fg=6f42c1&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb76%20text%20%7B%20fill%3A%236f42c1%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb76%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%236f42c1%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <strong class="d-block text-gray-dark">@username</strong>'+
		'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
		'          </p>'+
		'        </div>'+
		'        <small class="d-block text-right mt-3">'+
		'          <a href="#">All updates</a>'+
		'        </small>'+
		'      </div>'+
		'      <div id="suggestions" class="my-3 p-3 bg-white rounded box-shadow">'+
		'        <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb78%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb78%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <div class="d-flex justify-content-between align-items-center w-100">'+
		'              <strong class="text-gray-dark">Full Name</strong>'+
		'              <a href="#">Follow</a>'+
		'            </div>'+
		'            <span class="d-block">@username</span>'+
		'          </div>'+
		'        </div>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb79%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb79%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <div class="d-flex justify-content-between align-items-center w-100">'+
		'              <strong class="text-gray-dark">Full Name</strong>'+
		'              <a href="#">Follow</a>'+
		'            </div>'+
		'            <span class="d-block">@username</span>'+
		'          </div>'+
		'        </div>'+
		'        <div class="media text-muted pt-3">'+
		          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb79%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb79%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
		'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
		'            <div class="d-flex justify-content-between align-items-center w-100">'+
		'              <strong class="text-gray-dark">Full Name</strong>'+
		'              <a href="#">Follow</a>'+
		'            </div>'+
		'            <span class="d-block">@username</span>'+
		'          </div>'+
		'        </div>'+
		'        <small class="d-block text-right mt-3">'+
		'          <a href="#">All suggestions</a>'+
		'        </small>'+
		'      </div>'+
		'    </main>'+

		'    <!-- Bootstrap core JavaScript'+
		'    ================================================== -->'+
		'    <!-- Placed at the end of the document so the pages load faster -->'+
		'    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" ></script>'+
		'    <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js"></script>'+
		'    <script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script>'+
		'    <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/holder.min.js"></script>'+
		'    <script src="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.js"></script>'+
		'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="none" style="display: none; visibility: hidden; position: absolute; top: -100%; left: -100%;"><defs><style type="text/css"></style></defs><text x="0" y="2" style="font-weight:bold;font-size:2pt;font-family:Arial, Helvetica, Open Sans, sans-serif">32x32</text></svg></body>'

	},
	
	cgv_rank_brd: x=>{
		return      '          <div class="card mb-4 shadow-sm">'+
        '<svg  class="bd-placeholder-img card-img-top" height="0"><img src="'+x.img+'" width="100%" height="340"></svg>'+
      '            <div class="card-body">'+
                    '<p class="card-text">'+x.title+'<br/>'+x.content+'</p>'+
      '              <div class="d-flex justify-content-between align-items-center">'+
      '                <div class="btn-group">'+
      '                  <button type="button" class="btn btn-sm btn-outline-secondary">예매하기</button>'+
      '                  <button type="button" class="btn btn-sm btn-outline-secondary">공유</button>'+
      '                </div>'+
      '                <small class="text-muted">9 mins</small>'+
      '              </div>'+
      '            </div>'+
      '          </div>'
     },	      

	cgv_brd: ()=>{
	    	  return '<body>'+
	    	  '    <header>'+
	    	  '  <div class="collapse bg-dark" id="navbarHeader">'+
	    	  '    <div class="container">'+
	    	  '      <div class="row">'+
	    	  '        <div class="col-sm-8 col-md-7 py-4">'+
	    	  '          <h4 class="text-white">About</h4>'+
	    	            '<p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>'+
	    	  '        </div>'+
	    	  '        <div class="col-sm-4 offset-md-1 py-4">'+
	    	  '          <h4 class="text-white">Contact</h4>'+
	    	  '          <ul class="list-unstyled">'+
	    	  '            <li><a href="#" class="text-white">Follow on Twitter</a></li>'+
	    	  '            <li><a href="#" class="text-white">Like on Facebook</a></li>'+
	    	  '            <li><a href="#" class="text-white">Email me</a></li>'+
	    	  '          </ul>'+
	    	  '        </div>'+
	    	  '      </div>'+
	    	  '    </div>'+
	    	  '  </div>'+
	    	  '  <div class="navbar navbar-dark bg-dark shadow-sm">'+
	    	  '    <div class="container d-flex justify-content-between">'+
	    	  '      <a href="#" class="navbar-brand d-flex align-items-center">'+
	    	          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>'+
	    	  '        <strong>Album</strong>'+
	    	  '      </a>'+
	    	        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">'+
	    	  '        <span class="navbar-toggler-icon"></span>'+
	    	  '      </button>'+
	    	  '    </div>'+
	    	  '  </div>'+
	    	  '</header>'+
	    	  '<main role="main">'+
	    	  /*			    	  '  <section class="jumbotron text-center">'+
	    	  '    <div class="container">'+
	    	  '      <h1 class="jumbotron-heading">Album example</h1>'+
	    	        '<p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>'+
	    	  '      <p>'+
	    	  '        <a href="#" class="btn btn-primary my-2">Main call to action</a>'+
	    	  '        <a href="#" class="btn btn-secondary my-2">Secondary action</a>'+
	    	  '      </p>'+
	    	  '    </div>'+
	    	  '  </section>'+*/
	    	  '  <div class="album py-5 bg-light">'+
	    	  '    <div class="container">'+
	    	  '      <div class="row">'+
	    	  '    </div>'+
	    	  '  </div>'+
	    	  '</main>'+
	    	  '<footer class="text-muted">'+
	    	  '  <div class="container">'+
	    	  '    <p class="float-right">'+
	    	  '      <a href="#">Back to top</a>'+
	    	  '    </p>'+
	    	  '    <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>'+
	    	      '<p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="/docs/4.3/getting-started/introduction/">getting started guide</a>.</p>'+
	    	  '  </div>'+
	    	  '</footer>'+
	    	  '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>'+
	    	  '</body>'
	    	 }
	
};