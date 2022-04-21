//Dado un numero mostrar una escalero con ese numero de niveles con el simbolo [-]
/* Ejemplo:

número:4 --> devuelve

[-]
[-][-]
[-][-][-]
[-][-][-][-]

*/

function escalera(num){
    let escalera_completa = "";
    for (let nivel = 1; nivel <= num; nivel++) {
        dibujo += "[-]"

    }

    return dibujo
}


console.log(escalera(4));