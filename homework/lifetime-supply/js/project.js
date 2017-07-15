$(document).ready(function(){

	$('#click-me').click(calc);

	function calc () {
	 	var age = $('#age').val();
	 	var maxAge = $('#max-age').val();
	 	var item = $('#item').val();
	 	var numPerDay = $('#num-per-day').val();
	 	console.log(age, maxAge, numPerDay, item);
	 	var solution = (maxAge - age) * numPerDay * 365;
	 	// 	$('h3').html('You will drink ' + solution + 'more' + item + 'in your lifetime')
     	$('#solution').html(solution);
     	$('#drink').html(item);
     }
});