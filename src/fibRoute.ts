// Endpoint for querying the fibonacci numbers
import { Router, Request, Response } from 'express';
import { fibonacci } from './fib';

const router = Router();

// Type for route parameters
interface FibParams {
  n: string; // URL parameters are always strings
}

router.get('/:n', (req: Request<FibParams>, res: Response) => {
  // Access route parameter safely
  const nParam: string = req.params.n;

  // Convert to number
  const n: number = parseInt(nParam, 10);

  if (isNaN(n) || n < 1) {
    return res.status(400).json({ error: 'Please provide a positive integer' });
  }

  try {
    // Call the typed Fibonacci function
    const fibNumbers: number[] = fibonacci(n);
    res.json({ fibonacci: fibNumbers });
  } catch (err: unknown) {
    // Handle unknown errors safely
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
});

export default router;
