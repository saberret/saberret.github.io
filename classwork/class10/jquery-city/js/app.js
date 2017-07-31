// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$('.thumb').click(function(){
	var thumbSrc = $(this).attr('src');
	
	$('#big-image').attr('src', thumbSrc);



	$(this).siblings().css('border', '6px solid red');
}) //this is shorter code for the same function as code below

// $('#first').click(function(){
// 	var thumbSrc = $('#first').attr('src');
// 	// console.log(thumbSrc);

// 	$('#big-image').attr('src', thumbSrc);
// })

// $('#second').click(function(){
// 	var thumbSrc = $('#second').attr('src');
// 	// console.log(thumbSrc);

// 	$('#big-image').attr('src', thumbSrc);
// })

// $('#third').click(function(){
// 	var thumbSrc = $('#third').attr('src');

// 	$('#big-image').attr('src', thumbSrc);
// })

// $('#fourth').click(function(){
// 	var thumbSrc = $('#fourth').attr('src');

// 	$('#big-image').attr('src', thumbSrc);
// })


// this changes the big image to be the enlarged version of the thumbnail user clicks on

