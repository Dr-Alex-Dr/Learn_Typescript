// Задание 5
function areEqual(obj1: object, obj2: object): boolean {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
      return true
    }

    return false
}

console.log(areEqual({a: '1', b: '2', c: 3}, {a: '1', b: '2', c: 3}))

