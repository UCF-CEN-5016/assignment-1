// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

interface FibRouteParams {
  num: string;
}

export default (req: Request<FibRouteParams>, res: Response) => {
  const num: number = parseInt(req.params.num, 10);

  const fibN: number = fibonacci(num);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

