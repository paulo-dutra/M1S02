var contador = 0

var num_primos = [1]

var primos = 0

for (num = 2; num < 1001; num++) {
    let divisores = 0
    for (i = 0; i < num_primos.length; i++){
        if (num % num_primos[i] == 0) {
            divisores++
        }
    }
    if (divisores == 1){
        num_primos.push(num)
    }
}

console.log(num_primos)
console.log(num_primos.length)