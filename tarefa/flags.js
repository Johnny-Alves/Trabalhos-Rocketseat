function getFlags(string){
    const index = process.argv.indexOf(string) + 1
    return process.argv[index]
}

module.exports = getFlags