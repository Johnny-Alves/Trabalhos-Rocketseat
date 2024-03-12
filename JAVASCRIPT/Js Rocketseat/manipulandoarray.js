//criando array com construtor

let myArray = new Array ("a","b","c")
console.log(myArray)

//Manipulação de arrays

//contar elementos de um array

console.log([
    "a",
    {type:"array"},
    function(){
        return "oi função"
    }
].length)

//Transformar uma cadeia de caracteres em elementos de um array

let word ="paralelepipedo"
console.log(Array.from(word))


let techs = ["html","css","javascript"]
//adicionar um item no fim do array (node seria adicionado)
console.log(techs.push("node.js"))

//adicionar um item no começo
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pregar somente alguns elementos
console.log(techs.slice(2,4))

//remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)

//encontrar a posição de um elemento no array
let index = techs.indexOf('css')

