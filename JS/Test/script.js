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

const data1 = "14,3,12,8,9,11,4,3,2,4";
// Zähle jede 2te Zahl zusammen
// 14 + 12 + 9 +…

let sum = 0;
let numbers = data1.split(",");

console.log(numbers);

for (let i = 0; i < numbers.length; i = i + 2) {
  sum = sum + parseInt(numbers[i]);
}
console.log(sum);

const data2 = "Hans ist ein netter Kerl H";
// Gib obigen Text aus
// Lösche folgende Buchstaben; a e
// Vervierfache folgende Buchstaben: H
// HHHHns ist in nttr Krl HHHH

console.log(data2);
let text = data2.split("");

for (let i = 0; i <= text.length; i++) {
  if (text[i] == "a" || text[i] == "e") {
    text[i] = "";
  }

  if (text[i] == "H") {
    text[i] = "HHHH";
  }
}

let ergebnis = "";
for (let i = 0; i < text.length; i++) {
  ergebnis = ergebnis + text[i];
}
console.log(ergebnis);

const data3 = "4,9,-3,-9,-5,10,2,1,14";
// NImm alle positiven Zahlen und berechne den Mittelwert
// Ausserdem gib die Summe der negativen Zahlen aus

let sum1 = 0;
let negSum = 0;
let numbers1 = data3.split(",");

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 0) {
    sum1 = sum1 + parseInt(numbers1[i]);
  }

  if (numbers1[i] < 0) {
    negSum = negSum + parseInt(numbers1[i]);
  }
}

let posMittelwert = sum1 / numbers1.length;

console.log(sum1);
console.log(posMittelwert);
console.log(negSum);

let arr = ["Hans", "geht", "heute", "schwimmen", "das", "ist", "gut"];
for (i = 0; i < arr.length; i++) {
  if (i % 3 == 0) {
    console.log(arr[i]);
  }
}

let arr = [8, 2, 1, 4, 6, 1, 8, 7];

for (i = 0; i < arr.length; i++) {
  if (arr[i] < 8 && arr[i] > 3) {
    console.log(arr[i]);
  }
}

arr1 = [-1, 5, 1, -10, -11, 2, 30, -8, -14];
arr2 = [-1, 5, 3, -10, -11, 2, 30, -8, -44];

let a = 0;
for (i = 0; i < arr1.length; i++) {
  console.log((a += arr1[i]));
}

let c = 0;
for (i = 0; i < arr2.length; i++) {
  console.log((c += arr2[i]));
}
let mittelwert1 = a / arr1.length;
console.log("Mittelwert Woche 1 ;" + mittelwert1);

let mittelwert2 = c / arr2.length;
console.log("Mittelwert Woche 2 :" + mittelwert2);

console.log("Woche 1 war wärmer");

const data1 = "14,3,12,8,4";
// Zähle jede 2te Zahl zusammen
// 14 + 12 + 9 +...
let arr = data1.split(",");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let num = parseInt(arr[i]);
  if (i % 2 == 0) {
    sum = sum + num;
  }
}
console.log(sum);
const data2 = "fds ajk dfjask ss";
// // Gib obigen Text aus
// // Lösche folgende Buchstaben; a e
// // Vervierfache folgende Buchstaben: H
let arr1 = data2.split("");
let output = "";
for (let i = 0; i < arr1.length; i++) {
  let letter = arr1[i];
  console.log(letter);
  if (letter == "a" || letter == "e") {
  } else if (letter == "H") {
    output += "HHHH ";
  } else {
    output += letter + " ";
  }
}
console.log(output);
// HHHHns ist in nttr Krl HHHH
const data3 = "4,9,-3,-9,-5,10,2,1,14";
// // NImm alle positiven Zahlen und berechne den Mittelwert
// // Ausserdem gib die Summe der negativen Zahlen aus
// //
let arr2 = data3.split(",");
let sum1 = 0;
let amount = 0;
for (let i = 0; i < arr2.length; i++) {
  let number = parseInt(arr2[i]);
  console.log(number);
  if (number > 0) {
    sum1 += number;
    amount++;
  }
}
let average = sum1 / amount;
console.log(average);
