//Utilidades--------------------------------------------------------------------------------------------
function pegaPrecoItem(item){
    var precoItem = item.querySelector('.preco-item') //Dentro do elemento item, procura o elemento que contem a classe preco-item.
    return Number(precoItem.textContent);
}

function adicionaAoTotal(valor){
    var elementoTotal = document.querySelector("#total"); //Seleciona o total por id
    elementoTotal.textContent =  Number(elementoTotal.textContent) + valor;
}

function removeDoTotal(valor){
    var elementoTotal = document.querySelector("#total"); //Seleciona o total por id
    elementoTotal.textContent =  Number(elementoTotal.textContent) - valor;
}

//Botão de incrementa--------------------------------------------------------------------------------------------
var botoesIncrementa = document.querySelectorAll(".btn-incrementa"); //Seleciona todos os botões que tenham a classe btn-incrementa

for(let botao of botoesIncrementa){

    botao.addEventListener('click', incrementa); //Quando clica no botão a function incrementa é acionada.

    function incrementa(){
        var item = botao.closest('.item'); //Elemento mais próximo ACIMA que contém a classe item.
        var input = item.querySelector('.quantidade'); //Seleciona todos os input-text que utilizam a classe quantidade dentro de item.
        input.value++

        //Adiciona no total o preço do item incrementado
        var precoItem = pegaPrecoItem(item);
        adicionaAoTotal(precoItem);
    }

}


//Botão de decrementa-------------------------------------------------------------------------------------------
var botoesDecrementa = document.querySelectorAll('.btn-decrementa'); //Seleciona todos os botões que tenham a classe btn-decrementa

for(let botao of botoesDecrementa){

    botao.addEventListener('click', decrementa); //Quando clica no botão a function decrementa é acionada.

    function decrementa(){
        let item = botao.closest('.item'); //Elemento mais próximo ACIMA que contém a classe item.
        var input = item.querySelector('.quantidade'); //Seleciona todos os input-text que utilizam a classe quantidade dentro de item.
        if(Number(input.value) > 0){
            input.value--
            //Remove do total o preço do item decrementado
            var precoItem = pegaPrecoItem(item);
            removeDoTotal(precoItem);
        }else{
            console.log(input.value);
        }

    }

}


var formPedido = document.forms.pedido; //Pega o formulário de nome pedido

formPedido.addEventListener('submit', function validacao(event){
    
    var contador = 0; 
    var inputs = formPedido.querySelectorAll("input.quantidade"); //Seleciona todos os inputs que contenham a classe quantidade.

    for(let input of inputs){
        if(input.value > 0){
            contador++
        }
    }

    if(contador == 0){
        alert("Deve ter pelo menos 1 pizza no pedido!");
        event.preventDefault(); //Para o evento submit
    }

}); //Usando uma function dentro do addEventListener pois só irei utilizar ela nesse momento, não sera utilizada em outro lugar do código. 
    //O parametro event é o próprio JS que introduz.

