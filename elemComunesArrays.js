/*Dados dos arrays, devolver sólo los elementos comunes entre ambos ambos

COMO HACERLO:
    -Función que recibe dos arrays
    -Filtrar array y evaluando una condicióm
    -devolver array nuevo
*/


// const arr1 = [2, 3, 4, 7, 8, 0];
// const arr2 = [2, 3, 4, 17, 18, 10];


//iteramos sobre cada elemento del array1 y nos devuelve cada elemento que
//cumple la condición de estaer incluido en el 2

const elementosComunes = (array1, array2) => {
    const filtrado = array1.filter( elemento => array2.includes(elemento) )

    return    console.log(filtrado)
}

elementosComunes([2, 3, 4, 7, 8, 0], [2, 3, 4, 17, 18, 10]);