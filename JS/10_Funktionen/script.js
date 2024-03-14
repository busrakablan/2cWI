function add(a, b) {
  return a + b;
}

let result = add(5, 4);
console.log(result);

function subtract(a, b) {
  return a - b;
}

let result1 = subtract(2, 3);
console.log(result1);

function multiply(a, b) {
  return a * b;
}

let result2 = multiply(4, 5);
console.log(result2);

function calculation(a, b) {
  return ((a + b) / 2) * a;
}

let result3 = calculation(2, 7);
console.log(result3);

function printEasterDate(J) {
  let N = J - 1900;
  let A = N % 19;
  let B = [(7 * A + 1) / 19];
  let M = (11 * A + 4 - B) % 29;
  let Q = (N / 4);
  let W = (N + Q + 31 - M) % 7;
  let P = Math.ceil(25 - M - W);

  if (P > 0) {
    console.log("Ostern ist am " + P + ". April");
  } else {
    let date = P + 31;
    console.log("Ostern ist am " + date + ". März");
  }
}

printEasterDate(2023);
