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
