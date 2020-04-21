//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// const startRange = +prompt('Enter start of range');
// const endRange = +prompt('Enter end of range');

// let sum = 0;
// if (startRange > endRange) {
//     console.error('Enter a number from lower to higher')
// } else {
//     for (let i = startRange; i <= endRange; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }


//Запросить 2 числа и найти только наибольший общий делитель.

// const number1 = +prompt('Enter number 1');
// const number2 = +prompt('Enter number 2');

// const min = number1 < number2 ? number1 : number2;

// let maxDivider = null;
// let i = 2;
// while (i <= min) {
//     if (!(number1 % i) && !(number2 % i)) {
//         maxDivider = i;
//     }
//     i++;
// }

// if (!maxDivider) {
//     console.log('1 - the only common divider');
// } else {
//     console.log(maxDivider);
// }


//Запросить у пользователя число и вывести все делители этого числа.

// const number = +prompt('Enter number');

// for (let i = 1; i <= number; i++) {
//     if (!(number % i)) {
//         console.log(i);
//     }
// }


//Определить количество цифр в введенном числе.

// let number = +prompt('Enter number');

// function countDigits(number) {
//     let i = 0;
//     for (i; number > 1; i++) {
//         number /= 10;
//     }
//     return i;
// }
// console.log(`In the entered number - ${countDigits(number)} digits`);

// или

// console.log(number.toString().length);


//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let positiveNumbers = 0;
// let negativeNumbers = 0;
// let zeroNumbers = 0;
// let evenNumbers = 0;
// let oddNumbers = 0;

// for (let i = 0; i < 10; i++) {
//     let number = +prompt('Enter number');
//     if (number > 0) positiveNumbers++;
//     if (number < 0) negativeNumbers++;
//     if (number === 0) zeroNumbers++;
//     if (!(number % 2)) evenNumbers++;
//     if (number % 2) oddNumbers++;
// }
// console.log(`Positive numbers: ${positiveNumbers}
// Negative numbers: ${negativeNumbers}
// Zero numbers: ${zeroNumbers}
// Even numbers: ${evenNumbers}
// Odd numbers: ${oddNumbers}`);



//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

// let continueCalc = true;

// while (continueCalc) {
//     const number1 = +prompt('Enter number 1');
//     const number2 = +prompt('Enter number 2');
//     const action = prompt('Enter action (+ - * /)');
//     console.log(eval(number1 + action + number2));

//     let decision = prompt('Continue? (yes / no)');
//     continueCalc = decision.toLowerCase() === 'yes' ? true : false;
// }



//Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

// let number = +prompt('Enter number');
// let shift = +prompt('How many digits should it be shifted?');

// console.log(number.toString().slice(shift) + number.toString().slice(0, shift));



//Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Want to see the next day?`)) {
//     currDay = (currDay + 1) % days.length;
// }


//Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.


// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log('\n');
// }


//Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
