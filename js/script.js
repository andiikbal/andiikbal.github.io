// parallax
$('.page-scroll').on('click', function(e){
	
	var tujuan = $(this).attr('href');
	var elementTujuan = $(tujuan);  
	console.log(elementTujuan.offset().top - 50);

	$('html, body').animate({
	  scrollTop: (elementTujuan.offset().top - 50)
	}, 1250, 'swing');

	e.preventDefault();
});

// About
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
}); 


// Jumbotron & Portfolio
$(window).scroll(function(){
	var sWindow = $(this).scrollTop();
	// console.log(sWindow);
	// console.log(sWindow);
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ sWindow/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ sWindow/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ sWindow/1.2 +'%)'
	});

	if ( sWindow > $('.portfolio').offset().top - 200 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));

		});

	}

});