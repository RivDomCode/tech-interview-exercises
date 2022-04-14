//Dados dos números, devolver cuantos números impares hay entre ellos
//Ejemplo impares(1, 100)  --> devuelve: 50

const numerosImpares = (num1, num2) => {
    let counter = 0;

    for (let i = num1 ; i < num2; i++) {
        if (i % 2 !== 0 ) {
            counter +=1
        }
    }

    return counter
}

console.log(numerosImpares(1, 100));



