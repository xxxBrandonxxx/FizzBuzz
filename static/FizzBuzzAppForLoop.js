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