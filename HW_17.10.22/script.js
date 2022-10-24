let camelize = (str) => {
  let arr = [];
  let newStr = "";
  arr = str.split("-");
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0, 1).toUpperCase() + arr[i].slice(1);
  }
  newStr = arr.join("");
  return newStr;
};
console.log(camelize("my-short-string"));
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

console.log("------------------------------");

let arrSum = (arr) => {
  let sumPos = 0;
  let sumNeg = 0;
  let arrNew1 = [];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    if (arr[i] > 0) {
      sumPos += arr[i];
    } else {
      sumNeg += arr[i];
    }
  }

  let newArr1 = [sumPos, sumNeg];
  return newArr1;
};

let arr1 = [1, -2, 3, 4, -9, 6];
let arr2 = [5, "dfv", -8, 7, -17, true, 23];
console.log(arrSum(arr1));
console.log(arrSum(arr2));
