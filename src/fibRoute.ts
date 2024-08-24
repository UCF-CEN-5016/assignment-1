// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { Request, Response } from "express"; // Add type annotations

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10)); // Ensure 'num' is parsed as an integer
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
