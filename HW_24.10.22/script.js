/* Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.
Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (совпадающие значения)
console.log( arr ); // 5,3,8,1 (без изменений) */

let arr = [5, 3, 8, 1];

let filterRange = function (arr, a, b) {
  let filtered = arr.filter((item) => item >= a && item <= b);
  return filtered;
};

console.log(filterRange(arr, 1, 4));
console.log(arr);

console.log("----------------------------");

/* Напишите функцию filterRangeInPlace(arr, a, b), 
которая принимает массив arr и удаляет из него все значения кроме тех, 
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
console.log( arr ); // [3, 1] */

let filterRangeInPlace = function (arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (a <= arr[i] && arr[i] <= b) {
      arr.splice((i -= 1), 1);
    }
  }
};

console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);