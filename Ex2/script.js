var idade = Number(prompt("Insira a sua idade"));

if (isNaN(idade)  || idade<=0 ){
    alert("Insira um valor de idade válido.")
}else if(idade <= 15){
    alert("Você é um jovem!")
}else if(idade <= 64){
    alert("Você é um adulto!")
}else if(idade <= 120){
    alert("Você é um idoso!")
}else{
    alert("Tem certeza?")
}
