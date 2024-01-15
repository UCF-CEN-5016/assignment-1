// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req, res) => {
  // req = { params: { num: 2}}
  // console.log(req.params.num);
  let result = ""
  if(req.params.num != undefined){
    const { num } = req.params;
    const fibN = fibonacci(parseInt(num));
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
