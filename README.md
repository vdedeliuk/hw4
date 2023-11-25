## Програма дозволяє користувачеві вводити довжину масиву та початкове число, а потім заповнює масив простими числами, починаючи з введеного користувачем початкового числа.

Починається з використання модуля ``readline``, який надає засоби для читання введення з консолі.

```javascript
const readline = require('readline');
```
Створюється інтерфейс ``readline``, який отримує введення з ``process.stdin`` і виводить результат в ``process.stdout``

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

Використовуючи ``rl.question``, програма ставить користувачеві два питання. Перше питання запитує користувача про число, з якого розпочати відлік. Друге питання запитує про довжину масиву простих чисел.

```javascript
rl.question('countdown begins from: ', (startNumber) => {
    rl.question('array length: ', (arrayLength) => {
        const primesArray = generate(parseInt(startNumber), parseInt(arrayLength));
        console.log("result:", primesArray);
        rl.close();
    });
});
```

Функція ``isPrime`` приймає число і повертає ``true``, якщо воно є простим, і ``false`` в іншому випадку. Функція перевіряє, чи є число дільником інших чисел від 2 до (число - 1).

```javascript
function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}
```

Функція ``generate`` приймає початкове число та довжину масиву та генерує масив простих чисел.

```javascript
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
```

Останній рядок виводить результат у консоль.

```javascript
console.log("result:", primesArray);
```

Накінець, ``rl.close()`` закриває інтерфейс ``readline``, коли програма завершує роботу.