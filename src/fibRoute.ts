// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default function fibRoute(req: Request, res: Response): void {
  const numStr: string = req.params.num;        // typed string
  const num: number = parseInt(numStr, 10);     // typed number

  const fibN: number = fibonacci(num);           // typed number
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
}
