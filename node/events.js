//Para criar um evento
const {EventEmitter} = require('events')
const ev = new EventEmitter()

//ouvir event
ev.on('saySomething', (message) =>{
    console.log('Eu ouvi você: ', message)
})

//para disparar um event
ev.emit('saySomething',"Johnny")

//para executar o evento 1 vez osa se o once