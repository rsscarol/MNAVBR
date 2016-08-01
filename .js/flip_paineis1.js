// JavaScript Document

function profissional(id){
	$("#flip_"+id).css('display','none');
	$("#painel_"+id).slideDown('fast',function(){
		$('html, body').animate({
				 scrollTop: $("#painel_"+id).offset().top
		 }, 1000);
	});
}

function profissional_fechar(id){
	$("#painel_"+id).slideUp('fast',function(){
		$("#flip_"+id).css('display','block');
	});
}

window.onload = function() {
	var urlId = window.location.hash.substring(1);
	$ ("#flip_" + urlId).css ('display','none');
	$ ("#painel_" + urlId).slideDown ('fast',function(){
		$('html, body').animate({
				 scrollTop: $("#painel_" + urlId).offset().top
		 }, 1000);
	});
}
