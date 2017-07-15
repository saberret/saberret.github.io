$(document).ready(function(){

	$('#c-f').click(calcc);

	function calcc () {
		var CTemperature = $('#CTemperature').val();
		// console.log(CTemperature);
		var cfConversion = (CTemperature * 9) / 5 + 32;
		// console.log(cfConversion);
		$('#cf-conversion').html(cfConversion);
	}
	
	$('#f-c').click(calcf);

	function calcf () {
		var FTemperature = $('#FTemperature').val();
	
		var fcConversion = (FTemperature - 32) * 5 / 9;
	
		$('#fc-conversion').html(fcConversion);
	}


})