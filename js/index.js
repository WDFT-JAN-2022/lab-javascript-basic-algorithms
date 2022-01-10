//Good luck!
// Iteration 1: Names and Input
let hacker1 = "Nicholas";
let hacker2 = "Bob";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `the driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker2.length) {
  console.log(`the navigator has the longest name, it has ${hacker2.length}`);
} else if (hacker1.length === hacker2.length) {
  console.log(`they are the same`);
}

// Iteration 3: Loops

let upperHacker1 = hacker1.toUpperCase();
let spacedHacker1 = "";

for (let i = 0; i < upperHacker1.length; i++) {
  spacedHacker1 += upperHacker1[i] + " ";
}

console.log(spacedHacker1);

// 3.2
// console.log(hacker2.split("").reverse().join(""));

let newHacker = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  newHacker += hacker1[i];
}
console.log(newHacker);

let lengthToUse = 0;

if (hacker1.length >= hacker2.length) {
  lengthToUse = hacker2.length;
} else {
  lengthToUse = hacker1.length;
}

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (i = 0; i < lengthToUse; i++) {
    if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator goes first definitely.");
      break;
    } else if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first.");
      break;
    }
  }
}
