$(document).ready(function(){
	var dep = [];
	var career = null;
	var list = true;
	$(".one-link").click(function(){
	   	$(".reading").show(100);
	   	$(".question").hide(100);
	   	$(".form-question").hide(100);
	   	$(".question-module__demographics").hide(100);
	   	$(".cities").hide(100);
	});
	$(".two-link").click(function(){
	   	$(".reading").hide(100);
	   	$(".question").show(100);
	   	$(".form-question").hide(100);
	   	$(".question-module__demographics").hide(100);
	   	$(".cities").hide(100);
	   	$(".departament").empty();
	   	loadJSON(function(response) {
	   	// 
	   		JSONFinal = JSON.parse(response);
	   		if (list) {  		 
	   			for (var i = 1; i < 32; i++) {
	   				dep.push(JSONFinal[i].departamento);
	   			};
	   		}	
	   		list=false;
	   	});
	   

	   	
	});
	$(".three-link").click(function(){
	   	$(".reading").hide(100);
	   	$(".question").hide(100);
	   	$(".form-question").show(100);
	   	$(".question-module__demographics").hide(100);
	   	$(".cities").hide(100);
	   	
		
	});
	$(".date_demografics").click(function() {
		/* Act on the event */
		$(".reading").hide(100);
	   	$(".question").hide(100);
	   	$(".form-question").hide(100);
	   	$(".question-module__demographics").show(100);
	   	$(".question-module__demographicssection1").show(100);
	   	$(".question-module__demographicssection2").hide(100);
	   	$(".question-module__demographicssection3").hide(100);
	   	$(".question-module__demographicssection4").hide(100);

	   	$("#headquarters").empty();
	   	$("#career-list").empty();
	   	$.ajax({ 
	   		type: 'GET', 
	   		url: 'js/Tunja.json', 
	   		dataType: 'json',
	   		success: function (data) {
	   			
	   			for (var i = 1; i < 5; i++) {
	   				$("#headquarters").append("<option value="+ i +">" + data[i].ciudad + "</option>");
	   				
	   			};
	   			var array =data[1].carreras;
	   			for (var i = 0; i < array.length; i++) {
	   					$("#career-list").append("<option value="+ i +">" + array[i] + "</option>");
	   				};	
	   			$(".career").show(100);
	   			
	   		},
	   		error:function(msg) {
	   			// body...
	   			console.log(msg+":P");
	   		}
	   	});
	   	
	   	for (var i = 0; i < dep.length; i++) {
	   		$(".departament").append("<option value="+ i +">" + dep[i] + "</option>");
	   		$(".departament-birth").append("<option value="+ i +">" + dep[i] + "</option>");

	   	};
	   	ciudades=JSONFinal[1].ciudades;
        $(".city").empty();
        for (var i = 0; i < ciudades.length; i++) {
	   		$(".city").append("<option value="+ i +">" + ciudades[i] + "</option>");
	   		$(".city-birth").append("<option value="+ i +">" + ciudades[i] + "</option>");
	   	};
	   	$(".cities").show(100);
	});
	$("#headquarters").change(function() {
		idCareer= $(this).val();
		$("#career-list").empty();
		$.ajax({ 
	   		type: 'GET', 
	   		url: 'js/Tunja.json', 
	   		dataType: 'json',
	   		success: function (data) {
	   				 var array =data[idCareer].carreras;
	   				 console.log(array)
	   			for (var i = 0; i < array.length; i++) {
	   					$("#career-list").append("<option value="+ i +">" + array[i] + "</option>");
	   				};	
	   			$(".career").show(100);
	   			 
	   		},
	   		error:function(msg) {
	   			// body...
	   			console.log(msg+":P");
	   		}
	   	});

	});

	$(".departament").change(function() {
		idDeparment = $(this).val();
		idDeparment++;
        ciudades=JSONFinal[idDeparment].ciudades;
        $(".city").empty();
        for (var i = 0; i < ciudades.length; i++) {
	   		$(".city").append("<option value="+ i +">" + ciudades[i] + "</option>");

	   	};
	   	$(".cities").show(100);
        	
	});
	/**	
		Second section demographics

	**/
	$("#question-demographics__button").click(function() {
		/* Act on the event */
		$(".question-module__demographicssection1").hide(100);
		$(".question-module__demographicssection2").show(100);
		$(".question-module__demographicssection3").hide(100);
		$(".question-module__demographicssection4").hide(100);

		for (var i = 10; i < 80; i++) {
			$(".age").append("<option value="+ i +">" + i + "</option>");
		};
		
	});
	$(".departament-birth").change(function() {
		idDeparment = $(this).val();
		idDeparment++;
        ciudades=JSONFinal[idDeparment].ciudades;
        $(".city-birth").empty();
        for (var i = 0; i < ciudades.length; i++) {
	   		$(".city-birth").append("<option value="+ i +">" + ciudades[i] + "</option>");

	   	};
	   	        	
	});
	/**
		three section demographics	
	**/
	$("#question-demographics__button2").click(function() {
		$(".question-module__demographicssection1").hide(100);
		$(".question-module__demographicssection2").hide(100);
		$(".question-module__demographicssection3").show(100);
		$(".question-module__demographicssection4").hide(100);

	});

	$("#computer").change(function() {
		var optionValue = $( "#computer option:selected" ).text();
		var rta = "Si";
		if (rta === optionValue) {
			$(propietyComputer).show(100);
		} else{
			$(propietyComputer).hide(100);
		};

	});
	$("#question-demographics__button3").click(function() {
		$(".question-module__demographicssection3").hide(100);
		$(".question-module__demographicssection4").show(100);

	});
	$("#vivienda").change(function(){
		var optionValue = $("#vivienda option:selected").text();
		var rta = "Otra";
		if(rta === optionValue){
			$("#whichHouse").show(100)
		}else{
			$("#whichHouse").hide(100)
		}
	});
	$("#Internet").change(function(){
		var optionValue = $("#Internet option:selected").text();
		var rta = "Si";
		if(rta === optionValue){
			$(".accesInternet").show(100)
		}else{
			$(".accesInternet").hide(100)
		}
	});
});



function loadJSON(callback) {

	    var xobj = new XMLHttpRequest();
	        xobj.overrideMimeType("application/json");
	        xobj.open('GET', 'js/colombia.json', true); // Reemplaza colombia-json.json con el nombre que le hayas puesto
	        xobj.onreadystatechange = function () {
	          if (xobj.readyState == 4 && xobj.status == "200") {
	            callback(xobj.responseText);

	          }
	    };
	    xobj.send(null);  
}
function loadJsonCarreras(callback) {

	    var xobj = new XMLHttpRequest();
	        xobj.overrideMimeType("application/json");
	        xobj.open('GET', 'js/carreras.json', true); // Reemplaza colombia-json.json con el nombre que le hayas puesto
	        xobj.onreadystatechange = function () {
	          if (xobj.readyState == 4 && xobj.status == "200") {
	            callback(xobj.responseText);

	          }
	    };
	    xobj.send(null);  
}