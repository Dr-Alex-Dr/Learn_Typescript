type NestedArray<T> = Array<T | NestedArray<T>>;

class MyArray<T> {
    public elements: T[];
  
    constructor(input?: T[]) {
      this.elements = input ? [...input] : [];
    }
  
    areElementsEqual<T>(index1: T, index2: T): boolean {
        if (index1 === null || index2 === null || typeof index1 !== 'object' || typeof index2 !== 'object') {
            return index1 === index2;
        }
      
        const keys1 = Object.keys(index1)
        const keys2 = Object.keys(index2)
               
        if (keys1.length !== keys2.length) {
            return false;
        }
        
        const keys = Object.keys(index1) as Array<keyof typeof index1>

        return keys.every(item => index2[item] && index1[item] === index2[item])
    } 

    flatten<T>(arr:  NestedArray<T>): T[] {
        const result: T[] = [];
      
        function processArray(array: NestedArray<T>): void {
          for (const element of array) {
            if (Array.isArray(element)) {
              processArray(element as NestedArray<T>);
            } else {
              result.push(element as T);
            }
          }
        }
      
        processArray(arr);
      
        return result;
      }
  }
  
  
  const arr = new MyArray<number>([1, 2, 3]);
  console.log(arr.elements)

  console.log(arr.areElementsEqual({a: 1, l: {a: 0}}, {a: 1, l: {s: 0}}))
  
  console.log(arr.flatten([1, 2, 3, [1, 2]]))
  