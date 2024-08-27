// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import express, {Request, Response} from "express";

export default (req:{ params: { num: string; } ;}, res: {send: Response}) => {
  const num = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
