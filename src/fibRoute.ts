// Endpoint for querying the fibonacci numbers
import { Router, Request, Response } from 'express';
import { fibonacci } from './fib';

const router = Router();

router.get('/:n', (req: Request<{ n: string }>, res: Response) => {
  const n = parseInt(req.params.n, 10); // req.params.n is now typed as string

  if (isNaN(n) || n < 1) {
    return res.status(400).json({ error: 'Please provide a positive integer' });
  }

  const fibNumbers = fibonacci(n); // fully typed now
  res.json({ fibonacci: fibNumbers });
});

export default router;