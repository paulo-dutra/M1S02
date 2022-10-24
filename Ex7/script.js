const data_completa = new Date();

const dia = data_completa.getDate()

const mes = data_completa.getMonth()+1

const estacoes=["Verão", "Outono", "Inverno", "Primavera", "Verão"]

var estacao = 0 

if (mes <= 3) {
    estacao = 0
}else if (mes <= 6){
    estacao = 1
}else if (mes <= 9){
    estacao = 2
}else if (mes <= 12){
    estacao = 3
}
 
if (mes % 3 ==0){
    if (dia>21){
        estacao++
    }
}

alert(`A estação atual no hemisfério-sul é: ${estacoes[estacao]}`)