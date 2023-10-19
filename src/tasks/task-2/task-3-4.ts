// Задание 3 - 4
function capitalizesFirstLetter(sentence: string): string {
    let arrayWords: string[] = sentence.split(' ');

    // Находим количесво букв в первом слове
    let countSymbolsInFirstWord: number = arrayWords[0].length

    // Проверяем есть ли слово под этим индексом
    if (arrayWords[countSymbolsInFirstWord] !== undefined) {
        arrayWords.splice(countSymbolsInFirstWord, 1);
    }
    return arrayWords.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(capitalizesFirstLetter('Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.'))
