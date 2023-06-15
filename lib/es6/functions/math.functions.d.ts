/**
 * Calculates the nth root of a number.
 *
 * By default acts as a square root `√(x)`
 *
 * @param {number} value - The value for which to calculate the nth root.
 * @param {number} [root=2] - The degree of the root.
 *
 * @returns {number} The nth root of the value.
 * @throws {Error} If the root is null or if the root of the value is invalid.
 */
export declare function nthRoot(value: number, root?: number): number;
/**
 * Calculates the logarithm of a value with a specified base.
 * By default acts as a natural logarithm `logₑ(x)` aka `Ln(x)`
 *
 * @param {number} value - The value for which to calculate the logarithm.
 * @param {number} [base= Math.E] - The base of the logarithm. Default is Euler's number.
 *
 *  @returns {number | NaN} The logarithm of the value or Not A Number `NaN` if the arguments passed are invalid
 */
export declare function logarithm(value: number, base?: number): number;
/**
 * Calculates the *conventional* factorial of a number.
 * The number must be an unsigned integer
 *
 * @param {number} number - The number for which to calculate the factorial.
 * @returns {number} The factorial of the number.
 * @throws {Error} If the argument is not a number or if the number is negative or a floating-point value.
 */
export declare function factorial(number: number): number;
/**
 * Checks if a number is a prime number.
 *
 * @param {number} number - The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 * @throws {Error} If the argument is not a number.
 */
export declare function isPrime(number: number): boolean;
/**
 * Solves a quadratic equation of the form `ax² + bx + c = 0`.
 *
 * @param {number} a - The coefficient of the quadratic term.
 * @param {number} b - The coefficient of the linear term.
 * @param {number} c - The constant term.
 *
 * @returns {{x1: number, x2: number|null, areReal: boolean}} An object containing the solutions to the quadratic equation.
 * The `x1` property represents the first solution, `x2` represents the second solution (if it exists), and `areReal` indicates if the solutions are real numbers.
 */
export declare function solveQuadratic(a: number, b: number, c: number): {
    x1: number;
    x2: number | null;
    areReal: boolean;
};
