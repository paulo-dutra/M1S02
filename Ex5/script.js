var par = false
var n_pares = 0

do {
    var numero = Number(prompt("Digite um número "))
    if (isNaN(numero)) {
        alert("Você não inseriu um número, tente novamente.")
    } else {
        if (numero % 2 == 0) {
            par = true
        }
    }
} while (isNaN(numero))

if (par) {
    n_pares = Math.abs(numero / 2) - 1
    alert(`De 0 até ${numero} temos:
    ${n_pares} pares 
    ${n_pares + 1} ímpares`)

}else if(numero==0){ 
    alert("Não existem números inteiros entre 0 e 0 :)")
}else {
    n_pares = (Math.abs(numero) - 1) / 2
    alert(`De 0 até ${numero} temos:
    ${n_pares} pares 
    ${n_pares} ímpares`)
}