const { sum, floor, mod, round, pow, log } = require("../wrapper/functions.js");
// disrupting the wrapper

const bitxor = (x, y) => {
    let xor = 0;
    // creating a variable "xor" to return the result
    sum(floor(log(x) / log(2)), (kx) => {
        // floor the log of x divided by log of 2
        // arrow function with one parameter "kx"
        xor += pow(2, kx) * floor(mod(round(floor(x / pow(2, kx)) + floor(y / pow(2, kx))), 2))
        // adding the formula
    }, 0);
    // end of sum
    return xor;
    // return the output
}
// x ^ y
