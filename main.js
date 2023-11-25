const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('countdown begins from: ', (startNumber) => {
    rl.question('array length: ', (arrayLength) => {
        const primesArray = generate(parseInt(startNumber), parseInt(arrayLength));
        console.log("result:", primesArray);
        rl.close();
    });
});

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}

function generate(startNumber, length) {
    const primesArray = [];
    let currentNumber = startNumber;

    while (primesArray.length < length) {
        if (isPrime(currentNumber)) {
            primesArray.push(currentNumber);
        }
        currentNumber++;
    }

    return primesArray;
}
