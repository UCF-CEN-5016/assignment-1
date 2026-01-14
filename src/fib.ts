// util function that computes the fibonacci numbers
/**
 * Returns the first n Fibonacci numbers
 * @param n Number of Fibonacci numbers to generate
 * @returns number[] - array of numbers
 */
export function fibonacci(n: number): number[] {
  if (n < 1) {
    throw new Error("Input must be a positive integer");
  }

  const fibNumbers: number[] = []; // Explicitly typed

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibNumbers.push(0);
    } else if (i === 1) {
      fibNumbers.push(1);
    } else {
      // Now TypeScript knows fibNumbers[i-1] and fibNumbers[i-2] are numbers
      fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }
  }

  return fibNumbers; // Explicitly number[]
}
