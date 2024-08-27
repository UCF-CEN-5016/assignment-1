// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  const num: string = req.params.num;

  const parsedNum: number = parseInt(num, 10);
  const fibN: number = fibonacci(parsedNum);
  let result: string = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
