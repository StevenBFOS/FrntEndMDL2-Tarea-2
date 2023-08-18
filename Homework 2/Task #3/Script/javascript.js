// Este arreglo define las consonantes
const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y", "z"]

function contarConsonantes(str) {
    let contarCon = 0;

    // revisa el string para verificar que cada carácter es una consonante
    for (let letter of str.toLowerCase()) {
        if (consonantes.includes(letter)) {
            contarCon++;
        }
    }
    return  contarCon //retorna el número de consonantes
}

const string = prompt('Escriba una oración: '); //pregunta por la oracíon que el usuario desea revisar

const numeroDeConsonantes = contarConsonantes(string);


console.log("Número de consonantes: "+numeroDeConsonantes); //imprime el número de consonantes en la consola del navegador

//lo mismo pero para las vocales
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

const numeroDeVocales = countVowel(string);

console.log("Número de Vocales: "+numeroDeVocales); //imprime el número de vocales en la consola del navegador

