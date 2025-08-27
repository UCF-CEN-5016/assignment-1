// util function that computes the fibonacci numbers
// using an iterative approach for efficiency with help from ChatGPT
export default function fibonacci(n: number): number {
  if (n < 0) throw new Error("n must be non-negative");
  if (n <= 1) return n;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
