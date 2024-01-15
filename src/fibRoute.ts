// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  const { num } = req.params;
  let result = `fibonacci(${num}) is undefined`;
  if(num==undefined)
  {
    res.send(result);
  }
  else
  {
    const fibN = fibonacci(parseInt(num));
    result = `fibonacci(${num}) is ${fibN}`;
    if (fibN < 0) {
      result = `fibonacci(${num}) is undefined`;
    }
    res.send(result);
  }
};
