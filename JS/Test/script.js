// 1 Aufgabe
let arr4 = ["Hans geht heute schwimmen! das ist gut"];
let split = [arr4[3]];
console.log(split);

//2 Aufgabe

let arr = [8, 2, 1, 4, 6, 1, 8, 7];

for (let index = 4; index <= 7; index++) {
  console.log(index);
}

//3 Aufgabe

let arr2 = [-1, 5, 1, -10, -11, 2, 30, -8, -14];
let arr3 = [-1, 5, 3, -10, -11, 2, 30, -8, -44];

let sum1 = 0;
for (let index = 0; index < arr2.length; index++) {
  sum1 = sum1 + arr2.length;

  let Mittelwert = sum1 / arr2.length;
  console.log(Mittelwert);
}

let sum2 = 0;
for (let index = 0; index < arr2.length; index++) {
  sum2 = sum2 + arr2.length;

  let Mittelwert = sum2 / arr2.length;
  console.log(Mittelwert);
}
