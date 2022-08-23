function statsFinder(array){
    let length = array.length
    let moda = 10

    const soma = array.reduce((a, b) => a + b)
   

    media = soma / length
    console.log(media, moda)
}

statsFinder([500, 400, 400, 375, 300, 350, 325, 300])

