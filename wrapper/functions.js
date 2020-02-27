const sum = (n, x, k) => {
    for (var xk = k; xk < n; xk++) {
        // looping sum
        x(xk);
        // executing middle function
    }
    // end loop
}

const floor = n => ~~n;
// (double tilde) not operator => fast floor
const mod = (n1, n2) => n1 % n2;
// (module operator) arithmetic operator => returns the remaing integer of the division
const round = n => mod(n, 1) > 0.5 ? floor(n + 1) : floor(n);
// (ternary operator) conditional operator => if shortcut
const pow = (n1, n2) => n1 ** n2;
// (exponential operator) arithmetic operator => returns the first number to the power of the second number
const log = n => Math.log(n);
// (function log logarithm 2) => returns the natural logarithm of the number

module.exports = {
    sum,
    floor,
    mod,
    round,
    pow,
    log
};

// exporting arrow functions
