//Dado un numero hacer que sume todos los numeros que haya  entre 1 y el numero y que sea positivo


const summation = (num) => {

    const positiveNum = Math.abs(num)

    let sum = 0;

    for(let i = 1; i <= positiveNum; i++) {
        sum +=i
    }

    return console.log(sum);
}

summation(-12);