let peliculas =  ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

function colocarMayuscula(array){
    let peliculasMayusculas = []

    for(let i = 0; i < array.length; i++){
        peliculasMayusculas.push(peliculas[i].toUpperCase())
    }
    return peliculasMayusculas
}

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function unirPeliculas(array1, array2){

    let peliculasUnidas = array1

    for(let i = 0; i < array2.length; i++){
        peliculasUnidas.push(array2[i])
    }

    return colocarMayuscula(peliculasUnidas)
}

let todasLasPeliculas = unirPeliculas(peliculas, peliculasAnimadas)

let eliminarJuegoDePeliculas = todasLasPeliculas.pop()

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararScores(array, score1, score2){
    for(let i = 0; i < array.length; i++){
        if(score1[i] === score2[i]){
            console.log('Las puntuaciones para la pelicula: ' + array[i] + ', son Iguales. Siendo el score: ' + score1[i])
        } else if(score1[i] !== score2[i]){
            console.log(`Las puntuaciones para la pelicula: ${array[i]}, son distintos. Siendo: ${score1[i] < score2[i] ? score1[i] : score2[i]} la menor puntuacion y: ${score1[i] > score2[i] ? score1[i] : score2[i]} la puntuacion mayor`)
        }
    }
}

compararScores(todasLasPeliculas, asiaScores, euroScores)