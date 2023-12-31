/**
 * Generates a random number within a specified range.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @param {boolean} includeMin - Whether to include the minimum value in the range.
 * @param {boolean} includeMax - Whether to include the maximum value in the range.
 *
 * @returns {number} A random number within the specified range.
 */
export function getRandomNumber(
  min: number = 0,
  max: number = 1,
  includeMin: boolean = true,
  includeMax: boolean = true
): number {
  const hasInvalidArgument: boolean = min > max || max < min;
  if (hasInvalidArgument) {
    throw new Error(
      `Unexpected error occured in the passed argument values: ${
        min > max ? "min > max" : "max < min"
      }`
    );
  }

  const mustIncludeBoth: boolean = includeMin && includeMax;

  const mustIncludeOnlyMin: boolean = includeMin && !includeMax;

  const mustIncludeOnlyMax: boolean = !includeMin && includeMax;

  if (mustIncludeBoth) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else if (mustIncludeOnlyMin) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else if (mustIncludeOnlyMax) {
    return Math.floor(Math.random() * (max - min)) + min + 1;
  } else {
    //We don't include either
    return Math.floor(Math.random() * (max - min - 1)) + min + 1;
  }
}

/**
 * Converts a hexadecimal string to its decimal equivalent.
 * @param {string} hexadecimal - The hexadecimal string to convert.
 * @returns {number} The decimal representation of the hexadecimal value.
 */
export function hexadecimalToDecimal(hexadecimal: string): number {
  return Number(`0x${hexadecimal}`);
}

/**
 * Converts a decimal value to its hexadecimal equivalent.
 * @param {number} decimal - The decimal value to convert.
 * @returns {string} The hexadecimal representation of the decimal value.
 */
export function decimalToHexadecimal(decimal: number): string {
  return decimal.toString(16);
}
