// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  let result: string;
  const num: string = req?.params?.num;
  const fibN: number = fibonacci(parseInt(num));
  result = `fibonacci(${num}) is ${fibN}`;
  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }
  res?.send(result);
};
