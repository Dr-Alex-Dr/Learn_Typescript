// Задание 5
function areEqual(obj1: object, obj2: object): boolean {
    let arrayFromObject1 = Object.keys(obj1)
    let arrayFromObject2 = Object.keys(obj2)

    // Сравниваем по длине
    if (arrayFromObject1.length === arrayFromObject2.length) {
      // Находим все одинаковые элементы
      let items = arrayFromObject1.filter(item => obj1[item as keyof object] === obj2[item as keyof object])
      
      // Если все элементы равны, то true
      if (items.length === arrayFromObject1.length) {
        return true
      }
    }
    return false
}

console.log(areEqual({a: '1', b: '2', c: 3}, {a: '1', b: '2', c: 3}))

