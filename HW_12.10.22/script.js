function someString(someValue) {
  if (typeof someValue === "string") {
    return someValue.length;
  }
  if (typeof someValue === "number" || typeof someValue === "boolean") {
    return String(someValue).length;
  }
  if (
    typeof someValue != "number" &&
    typeof someValue != "boolean" &&
    typeof someValue != "string"
  )
    return "неверный тип данных";
}
console.log(someString("Hello, world!"));
console.log(someString(123456789));
console.log(someString(true));
console.log(someString());

let someString = function (someValue) {
  if (typeof someValue === "string") {
    return someValue.length;
  }
  if (typeof someValue === "number" || typeof someValue === "boolean") {
    return String(someValue).length;
  }
  if (
    typeof someValue != "number" &&
    typeof someValue != "boolean" &&
    typeof someValue != "string"
  )
    return "неверный тип данных";
};
console.log(someString("Hello, world!"));
console.log(someString(123456789));
console.log(someString(true));
console.log(someString());

//Стрелочную не поняла
