var soma = 0
var numero = 0

while(numero != -1){
    console.log(soma, numero)
    numero = Number(prompt("Digite números para somá-los ou digite -1 para sair e exibir a soma!"))
    if (isNaN(numero)){
        alert("Insira um valor válido.")
    }else if (numero != -1){
        soma = soma + numero
    }
}
alert(`A soma dos números digitados é: ${soma}`)
