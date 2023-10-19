// Задание 3 - 4
function capitalizesFirstLetter(sentence: string): string {
    const words: string[] = sentence.split(' ');
    const firstWordLength: number = words[0].length;
  
    return words.filter((word, index) => index !== firstWordLength)
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(' ');
}

console.log(capitalizesFirstLetter('Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.'))
