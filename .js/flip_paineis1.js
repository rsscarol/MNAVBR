// JavaScript Document

function profissional(id){
	$("#flip_"+id).css('display','none');
	$("#painel_"+id).slideDown('fast',function(){
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
	});
}

var box = $ ("#alerta");
$ ("#botao").on ("click", function (event) {
	box.show ();
});
