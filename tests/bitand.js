const { sum, floor, mod, round, pow, log } = require("../wrapper/functions.js");
// disrupting the wrapper

const bitand = (x, y) => {
    let and = 0;
    // creating a variable "and" to return the result
    sum(floor(log(x)), (kx) => {
        // floor the log of x
        // arrow function with one parameter "kx"
        and += pow(2, kx) * round(mod(floor(x / pow(2, kx)), 2)) * round(mod(floor(y / pow(2, kx)), 2));
        // adding the formula
    }, 0);
    // end of sum
    return and;
    // return the output
}
// x & y
