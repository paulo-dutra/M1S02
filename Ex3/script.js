var numero = Number(prompt("Insira um número"));

if (isNaN(numero)){
    alert("Você não inseriu um número, tente novamente.")
}else{
    for (i=0; i<11; i++){
        alert(`${numero} x ${i} = ${numero*i}`)
    }
}

