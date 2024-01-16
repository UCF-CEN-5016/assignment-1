// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: { params: { num: string } }, res: { send: (result: string) => void }) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10)); // Parse as base 10
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
