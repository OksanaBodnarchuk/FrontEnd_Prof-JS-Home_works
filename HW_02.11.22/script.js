/*First level: 02.11.2022 // Напишите функцию, которая поверхностно сравнивает два объекта. // Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true const data = { a: 1, b: 2 }; const data2 = { a: 1, b: 3 }; const data3 = { a: 2, b: 4 }; // console.log(isEqual(data, data2)); // true // console.log(isEqual(data, data3)); // false*/
const data = { a: 1, b: 1 }; 
const data1 = { a: 1, b: 1 }; 
const data2 = { a: 1, b: 2 }; 

let isEqual = function (obj1, obj2) {

  for (const key1 in obj1) {
    for (const key2 in obj2) {
      if (obj1[key1] != obj2[key2]) {
        return false;
      } 
    }
  }
  return true;
}
console.log(isEqual(data, data1));
console.log(isEqual(data, data2));

/*Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); //{ b: 2 }*/

const data3 = { a: 1, b: 2 };
const data4 = { c: 1, b: 2 };
const data5 = { c: 1, b: 5 };

let intersection = function (obj1, obj2) {
    let obj3 = {}; 
    for (const key1 in obj1) {
      for (const key2 in obj2) {
        if (obj1[key1] === obj2[key2] && key1 === key2) {
          
          obj3[`${key1}`] = obj1[key1];

        } 
      }
    }
    return obj3;
  }
  console.log(intersection(data3, data4));
  console.log(intersection(data4, data5));


  
 

