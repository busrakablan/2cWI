//Nimm alle positiven Zahlen und berechne den Mittelwert
const data = "4,9,-3,-9,-5,10,2,1,14";
let dataAsarray = data.split(",");
console.log(dataAsarray);
let amount = 0;
let sum = 0;
for (let i = 0; i < dataAsarray.length; i++) {
  let number = parseInt(dataAsarray[i]);
  console.log(number);
  if (number > 0) {
    sum = sum + number;
    amount++;
  }
}

console.log(sum / amount);
//Auserdem gib die Summe der negativen Werte aus

for (let i = 0; i < dataAsarray.length; i++) {}
