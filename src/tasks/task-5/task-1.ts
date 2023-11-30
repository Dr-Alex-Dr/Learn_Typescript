type Person = {
    name: string,
    age: number,
}

type Bridge = {
    city: string,
    age: number,
}

type Wine = {
    manufacturer: string,
    age: number,
    grade: string,
}


function getOldestItem<T extends { age: number }>(items: T[]): T {
    return items.reduce((oldest, current) => (current.age > oldest.age ? current : oldest), items[0]);
}

const persons: Person[] = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
];

const bridges: Bridge[] = [
    { city: 'New York', age: 50 },
    { city: 'London', age: 40 },
    { city: 'Paris', age: 45 },
];

const wines: Wine[] = [
    { manufacturer: 'Winery Syrah', age: 10, grade: 'A' },
    { manufacturer: 'Winery Zinfandel', age: 15, grade: 'B' },
    { manufacturer: 'Winery Gris', age: 12, grade: 'C' },
];


console.log('Oldest Person:', getOldestItem(persons));
console.log('Oldest Bridge:', getOldestItem(bridges));
console.log('Oldest Wine:', getOldestItem(wines));
