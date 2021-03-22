// validadndo a idade. 
// 2 modos de usar.

var validar = 0;  // validar global / pode se usar o validar interno ou global.

function validaIdade(idade){
    //var validar = 0;  validar interno / pode se usar o validar interno ou global.
    if (idade >= 18){
        validade = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
validaIdade(idade);
console.log(validar);