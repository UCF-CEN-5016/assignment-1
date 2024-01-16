// Endpoint for querying the fibonacci numbers
import fibonacci from "./fib";
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN: number = fibonacci(parseInt(num));
  let result: string;

  if (fibN < 0 || isNaN(fibN)) {
    result = `fibonacci(${num}) is undefined`;
  }
  else if(fibN>=0 && !isNaN(fibN)){
    result=`fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
};