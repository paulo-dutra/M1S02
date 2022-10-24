var valor_e_raiz = [0, 0]
var texto = ["Digite o valor inicial", "Digite a raíz"]
var pronto = false
var valor = 0
var prog_aritm = []

do {
    valor_e_raiz[valor] = Number(prompt(`${texto[valor]}`))
    if (isNaN(valor_e_raiz[valor])) {
        alert("Insira um valor válido")
    } else if (valor == 0) {
        valor++
    } else {
        pronto = true
    }
} while (!pronto)

for (i = 0; i < 10; i++) {
    prog_aritm.push(valor_e_raiz[0] + (valor_e_raiz[1] * i))
}

alert(`Os primeiros 10 termos da progressão aritmética são:
${prog_aritm}`)