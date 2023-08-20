function join(array){
    if(array.length <= 4){
        let palabra = ''
        for(let i = 0; i < array.length; i++){
            palabra += array[i]
        }
        return palabra
    } else if(array.length > 4){
        return 'Su array array es muy grande'
    }
}

console.log(join(['h', 'o', 'l', 'a']))
console.log(join(['c', 'h', 'a', 'u']))