// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  let result: string
  let num: string
  if(req.params.num){
    num  = req.params.num;
    const fibN: number = fibonacci(parseInt(num));
    if (fibN < 0) {
      result = `fibonacci(${num}) is undefined`;
    }
    else{
      result = `fibonacci(${num}) is ${fibN}`;
    }
  }
  else{
      result = `Please provide number`;
    }
  res.send(result);
};
