// Задание 1
// Добавлен интерфейс Iactor для объекта actor
// Элементу age в объекте actor изменен тип на number
// Функции howOldWillBeActorAfterTwentyYears добавлен тип возвращаемого значения number

interface Iactor {
    name: string,
    firstName: string,
    country: string,
    city: string,
    hasOskar: boolean,
    filmsCount: number,
    age: number,
    languages: string[]
}

const actor = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14,
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor: Iactor): number => {
    return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor)); 

// Задание 2
// document.addEventListener('click', (e: MouseEvent) => {
//     const coords: number[] = [e.posX, e.posY];
//     console.log(`Point is ${coords[0]}, ${coords[1]}`);
// });


// Задание 3
// function someFunc(data) {
//     return data.reduce((acc, current) => {
//         acc + Number(current.age > 18 && current.isMale), 0);
//     };
// }


export type Human = {
    name: string,
    age: number,
    gender: 'male' | 'female',
}

;
}


// Задание 4
function lineSeparator(input: string): string {
    const words = input.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}

console.log(lineSeparator('Это пример!'))

//Задание 5
function squaringNumbers(number: number): number {
    if (number < 0) return number;

    let strNumber: string = number.toString();
    let squaredDigits: string = strNumber.split('').map(digit => (parseInt(digit) ** 2).toString()).join('');
    return parseInt(squaredDigits);
}

console.log(squaringNumbers(2345))

//Задание 6
function digitalRoot(num: number): number {
    while (num >= 10) {
        let arrayNumbers: number[] = num.toString().split('').map(strNumber => parseInt(strNumber))
        num = arrayNumbers.reduce((accumulator, value) => accumulator + value, 0);
    }
    return num;
}

console.log(digitalRoot(942))

