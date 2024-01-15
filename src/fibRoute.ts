// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: { params: { num: string } }, res: { send: (message: string) => void }) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10));
  let result: string;

  if (!isNaN(fibN)) {
    result = `fibonacci(${num}) is ${fibN}`;
  } else {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
