function exibe_mensagem(){
    alert('Hello world!')
    document.getElementById('pMSG').innerHTML += "Retorno da Função - Hello world!!"
}

function somaValores(x,y){
    soma = parseFloat(x.value) + parseFloat(y.value);
    alert("Valor da soma:... "+soma);
    document.getElementById("res").value = soma;
}

function soma2(a,b){
    resultado = a+b;
    return resultado;

}

function subValores(x,y){
    sub = parseFloat(x.value) - parseFloat(y.value);
    alert("Valor da subtração:..."+sub);
    document.getElementById("sub").value = sub;
}

function divValores(x,y){
    if (y.value == 0){
        div = x.value;
        alert("Valor da subtração:..."+div);
    }
    if (x.value == 0){
        alert("Divisão inválida.");
    }else{
    div = parseFloat(x.value) / parseFloat(y.value);
    alert("Valor da subtração:..."+div);
    }
    document.getElementById("div").value = div;
}

function multValores(x,y){
    mult = parseFloat(x.value) * parseFloat(y.value);
    alert("Valor da subtração:..."+mult);
    document.getElementById("mult").value = mult;
}


/*somar = soma2(5,8);
alert("Resultado da soma - return +" + somar);
alert("Resultado da soma - return +" + soma2(5,8));*/