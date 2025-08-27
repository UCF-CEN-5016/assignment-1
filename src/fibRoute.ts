// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const { num } = req.params;
  const n = parseInt(num, 10);

  if (isNaN(n) || n < 0) {
    res.status(400).send(`Invalid input: ${num}. Must be a non-negative integer.`);
    return;
  }

  const fibN = fibonacci(n);
  res.send(`fibonacci(${n}) is ${fibN}`);
};