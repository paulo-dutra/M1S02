var valida_operacao = ["+", "-", "*", "/"]
var sinal_invalido = true

do {
    var operacao = prompt(`Insira o sinal referente à operação desejada:
"+" para adição
"-" para subtração
"*" para multiplicação
"/" para divisão`)

    for (i = 0; i < valida_operacao.length; i++) {
        console.log(operacao,operacao == valida_operacao[i])
        if (operacao == valida_operacao[i]) {
            sinal_invalido = false
            break
        }
    }

    if (sinal_invalido == true) {
        alert("Operação inválida");
    }
} while (sinal_invalido == true && operacao!=null) 

var prim_num = Number(prompt("Insira o primeiro valor para realizar o cálculo"))
var seg_num = Number(prompt("Insira o segundo valor para realizar o cálculo"))

var resultado = 0

switch (operacao) {
    case "+":
        resultado = prim_num + seg_num
        break
    case "-":
        resultado = prim_num - seg_num
        break
    case "*":
        resultado = prim_num * seg_num
        break
    case "/":
        resultado = prim_num / seg_num
        break
}


alert(`O resultado do seu cálculo é:
${prim_num} ${operacao} ${seg_num} = ${resultado}`)