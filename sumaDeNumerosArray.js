//funcion que devuelve las suma de los numeros de un array


function  sum(){
    let result = 0;

 let numb= [2, 2, 98]

    for (let i = 0; i < numb.length; i++) {
        result += numb[i]
    }

    console.log(result) ;
}


sum();