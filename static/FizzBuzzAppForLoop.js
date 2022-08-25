// for Loop

for (let b = 1; b < 101; b++) {
    if (b % 15 === 0){
        console.log("FizzBuzz");
    }
    else if (b % 3 === 0) {
        console.log("Fizz")
    }
    else if (b % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(b)
    }
}

// while loop

let c = 0;

while (c < 100) {
    c++;

    if(c % 15 === 0) {
        console.log("FizzBuzz");
    }
    else if (c % 3 === 0) {
        console.log("Fizz");
    }
    else if (c % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(c)
    }
}

// do while loop


let d = 1;

do {
    if (d % 15 === 0){
        console.log("FizzBuzz")
    }
    else if (d % 3 === 0) {
        console.log("Fizz");
    }
    else if (d % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(d);
    }
    d++;
}
while (d < 101)