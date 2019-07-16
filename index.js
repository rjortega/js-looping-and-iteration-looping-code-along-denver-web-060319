function writeCards(names) {
    let array = []
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return array
}

function countdown(number) {
    let counter = number
    while (counter >= 0) {
        console.log(counter)
        counter--
    }
}