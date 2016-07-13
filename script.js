$(document).ready(function(){
	$('.button').click(function clicking(){
		$('.nums').append($(this).attr('value'));
		if($('.nums').text().length > 12){
			$('.nums').css('font-size', '30px');
		};
	});

	$('.clear').click(function clearing(){
		$('.nums').empty();
	});

	$('.equal').click(function equal(){
		var value = $('.nums').text();
		$('.nums').empty();
		$('.nums').append(eval(value));
		if($('.nums').text().length > 12){
			$('.nums').css('font-size', '30px');
		};
	});
});