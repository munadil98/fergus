//make BMI Calculator

$(document).ready(function(){

var aqi=0;
	// window.setTimeout(function, milliseconds);

	$("#btn").click(function(){
		var city_name = $("#cityname").val();
		getValue(city_name);
		$("#city,#aqi,#idx,#att-url1,#att-name1,#att-url2,#att-name2").css("visibility", "visible");

		$("#city-geo,#city-name,#city-url,#dominentpol,#iaqi-h-v,#iaqi-p-v,#iaqi-pm25-v").css("visibility", "visible");

		$("#iaqi-t-v,#time-s,#time-tz,#time-v").css("visibility", "visible");

		$(".title_section").css({"background-color":"grey", "opacity":"0.9", "border":"2px solid white"});

	});

	function getValue(city){
		// alert(city);
		$.ajax({
			url: 'http://api.waqi.info/feed/'+city+'/?token=9cdb54e10df56bfb058e09cf9d83a290520dcdf2',
			dataType: 'json',
			success: function(info){
				// console.log(info);

				$("#city").text("City: "+city);
				$("#aqi").text("AQI: "+info.data.aqi);
				aqi=info.data.aqi;

				$("#idx").text("IDX: "+info.data.idx);
				$("#att-url1").text("Attributions-URL: "+info.data.attributions[0].url);
				$("#att-name1").text("Attributions-NameL:"+info.data.attributions[0].name);
				$("#att-url2").text("Attributions-URL:"+info.data.attributions[1].url);
				$("#att-name2").text("Attributions-Name:"+info.data.attributions[1].name);
				
				$("#city-geo").text("City-GEO:"+info.data.city.geo);
				$("#city-name").text("City-Name:"+info.data.city.name);
				$("#city-url").text("City-URL:"+info.data.city.url);

				$("#dominentpol").text("Dominentpol:"+info.data.dominentpol);
				$("#iaqi-h-v").text("IAQI-H-V:"+info.data.iaqi.h.v);
				$("#iaqi-p-v").text("IAQI-P-V:"+info.data.iaqi.p.v);
				$("#iaqi-pm25-v").text("iaqi-pm25-V:"+info.data.iaqi.pm25.v);
				$("#iaqi-t-v").text("IAQI-T-V:"+info.data.iaqi.t.v);

				$("#time-s").text("Time-s:"+info.data.time.s);
				$("#time-tz").text("Time-TZ:"+info.data.time.tz);
				$("#time-v").text("Time-V:"+info.data.time.v);	

			}
		});

	}

	
$(".progress-bar").loading();




});
