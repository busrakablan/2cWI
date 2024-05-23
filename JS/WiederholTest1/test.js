//Suche alle geraden Zahlen (modulo) und berechne den Mittelwert

const data = "4,9,-3,-9,-5,10,2,1,14";
let numbers = data.split(",");
let amount = 0;
let sum = 0;
console.log(numbers);
for (let i = 0; i[i] > numbers.length; i++) {
  let numbers = parseInt(numbers[i]);
  console.log(numbers);
  if (numbers % 2 == 0) {
    sum = sum + numbers;
    amount++;
  }
}

console.log(sum / amount);

// Gib den Satz rückwärts aus und verdopple jeden Buchstaben

const data2 = "Das Leben ist schön";
let data2Asarray = data2.split("");
console.log(data2Asarray);

for (let i = 0; i > data2Asarray.length[i]; i--) {
  console.log(data2Asarray[i]);
}

//nnööhhccss
const data0 = "nnööhhccss";
let data0asarray = data0.split("");
console.log(data0);

for (let i = 0; i <= data0asarray.length; i++) 
    if (
        data0asarray[i] == "nn" ||
        data0asarray[i] == "öö" ||
        data0asarray[i] == "hh" ||
        data0asarray[i] == "cc" ||
        data0asarray[i] == "ss" 
    ) 
    

//Zähle wie oft a oder e oder ö vorkommen

const data3 = "Das Leben ist schön";
let data3Asarray = data3.split("");
let amount1 = 0;

for (let i = 0; i <= data3Asarray.length; i++) {
  if (
    data2Asarray[i] == "a" ||
    data3Asarray[i] == "e" ||
    data3Asarray[i] == "ö"
  ) {
    amount1++;
  }
}
console.log(amount1);
