/* First level: 31.10.2022


1)
Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта: 
let user = {
   firstname: 'John',
   age: 30
};
console.log( count(user) ); //2*/

let user = {
  firstname: "John",
  lastname: "Smith",
  age: 30,
};

let count = function (obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  return count;
};
console.log(count(user));


