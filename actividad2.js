function imprimirInverso(array){
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i])
    }
}


let mensaje = ['!', 'mundo', 'hola']

imprimirInverso(mensaje)

function arrayInvertido(array){
    let arrayInvertido = []
    for(let i = array.length - 1; i >= 0; i--){
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arrayInvertido(numeros))
