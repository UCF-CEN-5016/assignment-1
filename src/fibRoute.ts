// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  let result: string;
  const num: string = req?.params?.num;
  const fibN: number | undefined = fibonacci(parseInt(num));
  // result = `fibonacci(${num}) is ${fibN}`;
  result = `fibonacci(${num}) is ${fibN !== undefined ? fibN : 'undefined'}`;
  // if (fibN < 0) {
  //   result = `fibonacci(${num}) is undefined`;
  // }
  if(res){
    res?.send(result);
  }
};
