// Manipulando strings e arrays

//split(" ") o espaço faz com que cada palavra ocupe uma posição do array
let text = "Eu amo a programação e quero programar o resto da minha vida!"
let array = text.split(" ")

//join() faz a junção
let textWithUnderscore = array.join("_")
console.log(textWithUnderscore.toLowerCase())
