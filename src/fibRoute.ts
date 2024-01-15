// Endpoint for querying the Fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  const num = parseInt(req.params.num); // Correctly extract the 'num' parameter

  if (isNaN(num) || num < 0) {
    // Check if 'num' is not a valid number or if it's negative
    res.send(`fibonacci(${num}) is undefined`);
  } else {
    const fibN = fibonacci(num);
    const result = `fibonacci(${num}) is ${fibN}`;

    res.send(result);
  }
};
