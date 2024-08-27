// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { Request, Response} from 'express';

export default (req: Request, res: Response): void => {
  const num: string = req.params.num;

  const parsedNum: number = parseInt(num, 10);
  const fibN: number = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
