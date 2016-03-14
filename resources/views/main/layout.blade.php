<!DOCTYPE html>
<html>

<head>
	
	<title>Craekern</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" href="{{asset('css/dist/style.css')}}">

</head>

<body>
	
	@include('main.partials.topnav')

	<div class="container">		
		@yield('sublayout')	
	</div>

	<script src="//127.0.0.1:35729/livereload.js"></script>
	<script src="{{asset('js/dist/lib.min.js')}}"></script>

</body>

</html> 