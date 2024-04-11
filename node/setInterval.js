//setInterval ira rodar uma função N vezes
//depois de X milessegundos

const { clearInterval } = require("timers")

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)
clearInterval(interval)

setTimeout(() => clearInterval(interval), 3000)