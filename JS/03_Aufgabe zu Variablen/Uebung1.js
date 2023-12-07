// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";
// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;
// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appledurchschnitt = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananadurchschnitt = 0.22;
// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel


let result = 1 / 0.34;
console.log(result);

let result1 = 1 / 0.22;
console.log(result1);

let priceofoneapple = applePricePerKilo/result;
let priceofonebanana= bananaPricePerKilo/result1;


// Preis von 8 Äpfeln
let priceOf8Apples = priceofoneapple * 8;
console.log("one",priceofoneapple+"€");
console.log("8 Apple",priceOf8Apples+"€");;


// Preis von 17 Bananen

let priceof17bananas = priceofonebanana*17;
console.log("17 banana", priceof17bananas+"€");
// Preis von 1 Tonne Äpfel
let priceOfonetoneapple = applePricePerKilo * 1000;
console.log(priceOfonetoneapple + "€");
// Preis von 1 Tonne Bananen
let priceofonetonbanana = bananaPricePerKilo * 1000;
console.log(priceofonetonbanana +"€");
