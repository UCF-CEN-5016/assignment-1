// util function that computes the fibonacci numbers
/**
 * Returns the first n Fibonacci numbers
 * @param n number of Fibonacci numbers
 * @returns number[]
 */

export function fibonacci(n: number): number[] {
  if (n < 1) {
    throw new Error("Input must be a positive integer");
  }

  const fibNumbers: number[] = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) fibNumbers.push(0);
    else if (i === 1) fibNumbers.push(1);
    else fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]); // fibNumbers[i-1] and [i-2] are guaranteed numbers
  }

  return fibNumbers; // properly typed number[]
}