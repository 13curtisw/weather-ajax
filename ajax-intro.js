$(document).ready(function(){
	$('#input_submit').click(function(){

		$("select").append("<option value='" + $('#city').val() + 
			"' state='" + $("#state").val() + " '>" + 
			$('#city').val() + ", " + $("#state").val() + "</option>");
	});

	$('#select_submit ').click(function(){
		var city = $("#top_submit option:selected").val();
		var state = $("#top_submit option:selected").attr("state");

		$.get("http://api.openweathermap.org/data/2.5/weather?q=" + city 
			+ ",us&APPID=a37076366af2697258c53fb6c89f9339", function(res){
			console.log(res);
		var temp= Math.round(res.main.temp * 9/5 -459.67);
		var wind= res.wind.speed;
		var direction=res.wind.deg;
		var time=res.dt;
		$("#right").append("<fieldset class='info'><legend>" + city + ", " + state + 
							"</legend><p id='temp'>Temperature: " + temp + "F</p><i class='fa fa-times' aria-hidden='true'></i><p>Wind: " 
							+ wind + " mph</p><p>Direction: " + direction + "</p><p>Date/Time: " + time + "</p></fieldset>")

		});

		

	});

	$(document).on('click','i',function(){
		$(this).parent().remove();
	})



});