const questions = [
    "O que eu aprendi hoje ? ",
    "O que me deixou aborrecido ?",
    "O que me deixou feliz ?",
    "O que eu posso fazer para melhorar ?",
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n")
}

ask ()

const answers = []
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim() + '\n')
    if (answers.length < questions.length) {
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
})

