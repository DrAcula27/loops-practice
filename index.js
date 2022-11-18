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