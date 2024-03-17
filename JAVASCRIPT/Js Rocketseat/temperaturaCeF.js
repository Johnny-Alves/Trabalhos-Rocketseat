// crie uma função que transforma graus celsius em fahrenheit e vice verso

function transformdegree (degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists )
    {
        throw new Error('Grau não identificado')
    }
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit-32) * 5 / 9
    let degreeSing='C'

    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSing='F'
    }

    return formula(updateDegree) + degreeSing
}
try{
    console.log(transformdegree('50F'))
    console.log(transformdegree('10C'))
}catch(error){
    console.log(error)
}
