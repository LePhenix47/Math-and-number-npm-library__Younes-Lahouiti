/**
 * Generates a random number within a specified range.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @param {boolean} includeMin - Whether to include the minimum value in the range.
 * @param {boolean} includeMax - Whether to include the maximum value in the range.
 *
 * @returns {number} A random number within the specified range.
 */
export declare function getRandomNumber(min?: number, max?: number, includeMin?: boolean, includeMax?: boolean): number;
/**
 * Converts a hexadecimal string to its decimal equivalent.
 * @param {string} hexadecimal - The hexadecimal string to convert.
 * @returns {number} The decimal representation of the hexadecimal value.
 */
export declare function hexadecimalToDecimal(hexadecimal: string): number;
/**
 * Converts a decimal value to its hexadecimal equivalent.
 * @param {number} decimal - The decimal value to convert.
 * @returns {string} The hexadecimal representation of the decimal value.
 */
export declare function decimalToHexadecimal(decimal: number): string;
