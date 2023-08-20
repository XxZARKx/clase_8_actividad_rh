function sumaArray(array){
    if(array.length === 3){
        let sumaDigitos = 0
        for(let i = 0; i < array.length; i ++){
            sumaDigitos += array[i]
        }
        return sumaDigitos
    }
    return 'Su array no es de 3 digitos'
}

console.log(sumaArray([1, 2, 3]))
console.log(sumaArray([10, 3, 10]))
console.log(sumaArray([-5, 100, 19]))