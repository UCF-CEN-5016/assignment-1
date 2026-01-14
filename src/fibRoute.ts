// Endpoint for querying the fibonacci numbers
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/:n', (req: Request, res: Response) => {
  const n = parseInt(req.params.n, 10);

  if (isNaN(n) || n < 1) {
    return res.status(400).json({ error: 'Please provide a positive integer' });
  }

  const fib = (num: number): number[] => {
    const result: number[] = [0, 1];
    for (let i = 2; i < num; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, num);
  };

  res.json({ fibonacci: fib(n) });
});

export default router;
