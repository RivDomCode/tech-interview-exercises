//Dado un numero entero, inviertelo y devuelve de nuevo el numero entero

const invertirNumero = (num) =>{
    let reversedNum = parseInt(
                            num
                            .toString() //convierto a string
                            .split("") //lo convierto en un array de caracteres
                            .reverse()//le doy la vuelta
                            .join("")); //vuelvo unir el numero
    return console.log(reversedNum);
}

invertirNumero(556);

