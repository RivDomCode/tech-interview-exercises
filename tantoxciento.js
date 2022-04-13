//Hallar el x por ciento de x número





function tantoPorCiento() {
    let numero = prompt("Elige un número");
    let porcentaje = prompt('porcentaje');
    let operacion =( numero * (porcentaje/100))
    let resultado = `El ${porcentaje}% de ${numero} es ${operacion}`

    console.log(resultado);
}



tantoPorCiento();