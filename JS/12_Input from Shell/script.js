import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

let balance = 0;

while (true) {
  console.log("1 einzahlen, 2 abheben, 3 Kontostand, 4 Beenden");
  let selection = await readLineAsync();
  if (selection == 1) {
    console.log("einzahlen");
    console.log("Wie viel möchten Sie einzahlen?");
    let amount = await readLineAsync();
    balance = balance + parseFloat(amount);
    console.log(balance);
  } else if (selection == 2) {
    console.log("abheben");
    console.log("Wie viel möchten Sie abheben?");
    let amount2 = await readLineAsync();
    if (balance - amount2 < 0) {
      console.log("Problem aufgetreten!");
    } else {
      balance = balance + parseFloat(amount2);
      console.log(balance);
    }
    balance = balance + parseFloat(amount2);
  } else if (selection == 3) {
    console.log("Kontostand:" + balance);
  } else if (selection == 4) {
    console.log("Beenden");
    console.log("Auf Wiedersehen!");
  }

  console.log("selection:", selection);
}
