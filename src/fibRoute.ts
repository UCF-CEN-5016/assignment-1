// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: { params:number; }, res: { send: (arg0: string) => void; }) => {
  const num: number = req.params;

  const fibN = fibonacci(num);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
