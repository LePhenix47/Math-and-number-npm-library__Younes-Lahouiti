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
export function nthRoot(value: number, root: number = 2): number {
  const rootIsInvalid: boolean = root === 0;
  if (rootIsInvalid) {
    throw new Error(
      `The root cannot be null, as it returns an exponent with a division by 0`
    );
  }

  // We check that the value is negative AND that the root is even
  const valueOfRootIsInvalid: boolean = value < 0 && root % 2 === 0;
  if (valueOfRootIsInvalid) {
    // Negative values cannot have an even root
    //∛(-27) = -3 but √(-16) = undefined
    throw new Error(
      `The root: ${root} of the value: ${value} passed is invalid, cannot have a negative value with an even root`
    );
  }

  //To avoid JS returning us a NaN even with odd roots of negative values
  //We set the value to be positive by taking their absolute value: |x|
  //Then we use the formula ⁿ√(x) = x^(1/n)
  let calculatedRoot: number = Math.abs(value) ** (1 / root);

  //And we now return the nth root of a positive or negative value
  return value > 0 ? calculatedRoot : -1 * calculatedRoot;
}

/**
 * Calculates the logarithm of a value with a specified base.
 * By default acts as a natural logarithm `logₑ(x)` aka `Ln(x)`
 *
 * @param {number} value - The value for which to calculate the logarithm.
 * @param {number} [base= Math.E] - The base of the logarithm. Default is Euler's number.
 *
 *  @returns {number | NaN} The logarithm of the value or Not A Number `NaN` if the arguments passed are invalid
 */
export function logarithm(value: number, base: number = Math.E): number {
  //We check that the base is positive but also different than 1
  //since log(1) = 0 and logₙ(x) = log(x)/log(n), a base of 1 would give a division by 0
  const baseIsInvalid: boolean = base <= 0 || base === 1;
  if (baseIsInvalid) {
    throw new Error(
      `The base of the logarithm ${
        base <= 0 ? "is negative or null" : "returns a division by 0"
      }`
    );
  }

  //Logarithmic functions cannot have a negative or null value
  const valueIsInvalid: boolean = value <= 0;
  if (valueIsInvalid) {
    throw new Error("The value passed is negative or null");
  }

  return Math.log(value) / Math.log(base);
}

/**
 * Calculates the *conventional* factorial of a number.
 * The number must be an unsigned integer
 *
 * @param {number} number - The number for which to calculate the factorial.
 * @returns {number} The factorial of the number.
 * @throws {Error} If the argument is not a number or if the number is negative or a floating-point value.
 */
export function factorial(number: number): number {
  //Error handling logic here
  const argumentIsNotANumber: boolean = isNaN(number);
  if (argumentIsNotANumber) {
    throw new Error(`Argument passed: ${number} is not a number`);
  }

  //This function is the conventional factorial,
  //thus negative and floating numbers do not have a factorial
  const numberHasNoFactorial: boolean = !Number.isInteger(number) || number < 0;
  if (numberHasNoFactorial) {
    throw new Error(`Number passed: ${number} cannot have a factorial`);
  }

  //1! = 1 and 0! = 1, no need to compute them
  const hasOneAsValue: boolean = number === 0 || number === 1;
  if (hasOneAsValue) {
    return 1;
  }

  //Otherwise we compute it
  let factorial: number = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

/**
 * Checks if a number is a prime number.
 *
 * @param {number} number - The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 * @throws {Error} If the argument is not a number.
 */
export function isPrime(number: number): boolean {
  //Error handling
  const argumentIsNotANumber: boolean = isNaN(number);
  if (argumentIsNotANumber) {
    throw new Error(`Argument passed: ${number} is not a number`);
  }

  //Prime numbers are odd unsigned integers (only exception for the number 2)
  //that are only divisible by itself and by 1
  const numberIsNotPrime: boolean =
    !Number.isInteger(number) ||
    number < 2 ||
    (number !== 2 && number % 2 === 0);
  if (numberIsNotPrime) {
    return false;
  }

  //We return true for 2 as its the only exception
  const isSimplePrime: boolean = number === 2;
  if (isSimplePrime) {
    return true;
  }

  for (let i = 2; i < number; i++) {
    const isDivisibleByNumber: boolean = number % i === 0;
    if (isDivisibleByNumber) {
      return false;
    }
  }

  return true;
}

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
export function solveQuadratic(
  a: number,
  b: number,
  c: number
): { x1: number; x2: number | null; areReal: boolean } {
  const delta: number = getDelta(a, b, c);

  function getDelta(a, b, c) {
    return b ** 2 - 4 * a * c;
  }

  const solutions: {
    x1: number;
    x2: number | null;
    areReal: boolean;
  } = {
    x1: NaN,
    x2: null,
    areReal: true,
  };

  const hasOneRealSolution: boolean = delta === 0;
  if (hasOneRealSolution) {
    solutions.x1 = -b / (2 * a);
  } else {
    const solutions: {
      x1: number;
      x2: number | null;
      areReal: boolean;
    } = {
      x1: NaN,
      x2: NaN,
      areReal: true,
    };
    solutions.x1 = (-b + Math.sqrt(Math.abs(delta))) / (2 * a);
    solutions.x2 = (-b - Math.sqrt(Math.abs(delta))) / (2 * a);

    solutions.areReal = delta > 0;
  }

  return solutions;
}
