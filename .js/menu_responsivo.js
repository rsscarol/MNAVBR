// JavaScript Document

$("#nav").addClass("js").before('<div id="menu">☰</div>');

$("#menu").click(function(){
	$("#nav").toggle();
});

$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style");
	}
});
