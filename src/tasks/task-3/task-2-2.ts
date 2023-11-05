type Cat = {
    name: string,
    meow: () => string,
}

type Dog = {
    name: string,
    bark: () => string,
}

const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};

const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
}

 
console.log(whatDoesThePetSay(cat))
console.log(whatDoesThePetSay(dog))

function whatDoesThePetSay(pet: Dog | Cat): string {
    if (isCat(pet)) {
        return 'meow'
    }
    if (isDog(pet)) {
        return 'bark'
    }
    return 'Nothing :('
}

function isCat(cat: Cat | Dog): cat is Cat {
    return 'meow' in cat;
}

function isDog(dog: Cat | Dog): dog is Dog {
    return 'bark' in dog;
}