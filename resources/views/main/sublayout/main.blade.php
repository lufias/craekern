@extends('main.layout')

@section('sublayout')

	<div class="row">
		
		<div class="col-sm-3">
			<p>I'll going to place a menu right here</p>			
		</div>

		<div class="col-sm-9">
			@yield('content')			
		</div>

	</div>


@stop