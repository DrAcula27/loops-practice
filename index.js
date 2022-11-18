// Write a for loop that logs 0-15.
for (i = 0; i <= 15; i++) console.log(i);

// Write a for loop that counts from 15-0.
for (i = 15; i >= 0; i--) console.log(i);

// Make variable laps = 0.
let laps = 0;
// Write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable.
for (i = 0; i < 5; i++) {
    console.log("That's another lap!");
    laps += 1;
}
// AFTER the loop, log laps.
console.log(laps);

// Make variable age.
let age = 27;
// Make a loop from 0-100.
for (i = 0; i <= 100; i++) {
    // In every loop check if i == age, if so log something, else say “age doesn’t match”.
    if (i == age) {
        console.log(`My age is ${i}!`);
    } else {
        console.log("Age doesn't match.");
    }
}

// Write a loop that logs all even numbers from 0-700.
let even = 0;
while (even <= 700) {
    console.log(even);
    even += 2;
}

// Write a loop that logs all odd numbers from 0-700.
let odd = 1;
while (odd < 700) {
    console.log(odd);
    odd += 2;
}

// Write a loop with some “if else” statements.
// The loop should start at 1900 and go to 1949 and log when things were invented.
    // For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”
for (i = 1900; i <= 1949; i++) {
    if (i == 1900) console.log(`The year is ${i}, the Zepplin is invented!`);
    else if (i == 1902) console.log(`The year is ${i}, the Teddy Bear is invented!`);
    else if (i == 1910) console.log(`The year is ${i}, the Talking Motion Picture is invented!`);
    else if (i == 1913) console.log(`The year is ${i}, the Bra is invented!`);
    else if (i == 1918) console.log(`The year is ${i}, the Fortune Cookie is invented!`);
    else if (i == 1923) console.log(`The year is ${i}, the Traffic Signal is invented!`);
    else if (i == 1935) console.log(`The year is ${i}, the Radar is invented!`);
    else if (i == 1938) console.log(`The year is ${i}, the Ballpoint Pen is invented!`);
    else if (i == 1943) console.log(`The year is ${i}, the Slinky is invented!`);
}