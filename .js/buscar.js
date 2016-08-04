// JavaScript Document

$(function() {
	$('#ri-grid').gridrotator( {
		animSpeed : 300,
		animType : 'rotateBottom',
		w320 : {
			rows : 2,
			columns : 3
		},
		w240 : {
			rows : 3,
			columns : 3
		},
		slideshow : true,
		onhover : true
	} );
});
