
/*var nome="#contatoNome";
var cidade="contatoCidade";
var email="contatoEmail";
var msg="contatoMsg";


function confirmaContato ("confirma").onclick = function(){
    document.write("<h2>" + nome + "</h2>" + "<br/>" + cidade + "<br/>" + email + "<br/>" + "<br/>" + msg);
}*/


$('#contatoForm').on('submit', function () {
    var nome = $(this).find('input[name=nome]'), nome = nome.val();
    var email = $(this).find('input[name=email]'), email = email.val();
    var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
    $(this).find('input[name=Body]').attr('value', texto);
});
