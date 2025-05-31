const prompt = require('prompt-sync')();

let x = 4
let y = 5
if (y > x) {
    console.log("y is greater than x");
}

if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is not greater than y");
}
// A program to determine whether it's time to get up
let hour = prompt("What time is it? (0-23): ");
if (hour < 4) {
    console.log("It's too early to get up. Keep sleeping!");
} else if(hour > 4 && hour < 7) {
    console.log("It's time to get up, but you can snooze for a bit longer.");
} else {
    console.log("It's time to get up and start your day!");
}