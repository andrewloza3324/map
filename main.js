//let array = [1, 5, 10, 15, 24, 35];

//let result = array.map(function (number) {
// if (number > 10) {
//   return "1";
// } else {
//   return "0";
// }
//});
//console.log(result);

//let products = [
// { name: "IPhone", price: 1100 },
// { name: "Player", price: 100 },
// { name: "PC", price: 1600 },
//  { name: "Samsung", price: 700 },
//];

//let result = products.filter(function (prise) {
// if (prise.price > 1000) {
//   return true;
// } else {
//   return false;
// }
//});
//console.log(result);

//let result = products.forEach(function (name) {
// console.log(name.name);
//});

let array = [10, 12, 26, 58, 1, 4, 1256, 6745];

let result = array.map(function (number) {
  return number * 2;
});

let result2 = result.map(function (number) {
  return number - 10;
});

let result3 = result2.filter(function (number) {
  if (number > 10) {
    return true;
  } else {
    return false;
  }
});
console.log(result3);
