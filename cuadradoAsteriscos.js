//Dibujar un cuadrado con asteriscos
//Ejemplo : cuadrado(4) tiene que dibujar un cuadrado con 4 asteriscos por lado
/*

****
*  *
*  *
****

Pasos:
1-Función para crear el lado de arriba y el de abajo del cuadrado
2.1-Función para lados y huecos del cuadrado
2.2-Bucle de 0 al tamaño de lado menos 2 para equilibrar con el lado de arriba y
el de abajo que ya están pintados
2.3-bucle para pintar los espacios, menos 2 para equilibrar con * de izqda y dcha
3- Ir concatenando en un variable cada linea del cuadrado
4-mostrar el cuadrado
*/

//creo que la función que pinta el lado de arriba y el de abajo

function lado(numero) {
    let lado = "";
    for (let i = 0; i < numero; i++) {
        lado += "*"
    }

    return lado;
}

// función que pinta el cuadrado

function cuadrado(numero){
    let dibujo = lado(numero) + "\n";  //lado de arriba

    let contenido = "";
    //Añadimos la columna izquierda
    for (let i = 0; i<(numero-2); i++) {
        contenido="*";
        //Espacios vacios otro bucle dentro de ese bucle
        for(let x = 2; x < numero ; x++) {
            contenido += " ";
            console.log("hols")
        }
        //lado derecho
        contenido += "*";

        dibujo += contenido +"\n"
    }

    dibujo += lado(numero); //lado de abajo

    return dibujo
}


console.log(cuadrado(4));