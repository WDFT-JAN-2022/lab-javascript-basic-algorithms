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

// bonus

let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et tellus vel lacus sollicitudin aliquet a in leo. Fusce scelerisque pretium quam, vitae convallis nisi fringilla eu. Fusce finibus velit ut elementum accumsan. Integer at ultricies velit, in varius odio. Mauris urna neque, consectetur vitae commodo feugiat, blandit vitae mi. Aliquam ultrices pharetra sodales. Morbi dignissim, nisl vel ornare ornare, magna urna feugiat orci, consequat tincidunt turpis lorem vel risus. Vivamus ac ullamcorper metus, vitae aliquam lorem. Aliquam feugiat dapibus orci posuere laoreet. In hac habitasse platea dictumst. Duis posuere dignissim risus, id varius mi convallis a. Aliquam pulvinar mollis elit, at facilisis lorem ornare et. Suspendisse ultrices, odio nec porta blandit, erat diam finibus ipsum, in congue libero orci nec mi. Fusce ligula lorem, pulvinar eget mi ultrices, varius maximus mi. Cras scelerisque tempor lorem. Morbi et dui id odio molestie interdum vestibulum nec erat. Vestibulum ornare commodo lacus, quis egestas massa maximus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec porta quis dui eu dictum. Ut consequat sagittis ante in posuere. Ut vestibulum dignissim purus, in vehicula eros auctor et. Nam vestibulum malesuada ipsum vel rhoncus. Duis vitae quam justo. Praesent malesuada, massa id laoreet vestibulum, tortor tortor faucibus lacus, vitae ullamcorper neque velit ullamcorper tortor. Nunc rutrum commodo massa, vel imperdiet lacus mollis ac. Sed lorem nulla, sollicitudin ac euismod vitae, finibus laoreet velit. Phasellus tincidunt quam nec porta efficitur. Cras varius mauris at turpis hendrerit, eu sodales velit facilisis. Vestibulum dapibus ex mauris, id tincidunt purus bibendum nec. Aenean laoreet tellus vitae turpis sodales, quis cursus justo suscipit. Praesent vel lorem aliquet, vestibulum mauris eget, mattis elit. Vestibulum ut sodales quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sollicitudin leo faucibus massa volutpat dapibus. Praesent rutrum elementum nibh, vitae dignissim ex sodales et. Praesent tempus, felis a efficitur tincidunt, ligula sapien laoreet erat, nec finibus lacus lectus eget urna. Aenean venenatis vel augue sit amet sollicitudin. In pellentesque magna nisl, at maximus eros sagittis ut.";

let wordCount = 0;
for (letter of loremIpsum) {
  if (letter === " ") {
    wordCount++;
  }
}

console.log("There are this many words: " + ++wordCount);

let etCount = 0;
// let checkLetters = "";

let wordArray = loremIpsum.toLowerCase().split(" ");

for (theword of wordArray) {
  //console.log(theword);
  if (theword === "et" || theword === "et," || theword === "et.") {
    etCount++;
  }
}

console.log("there are this many et's: " + etCount);
