// Endpoint for querying the fibonacci numbers
import fibonacci from "./fib";
import express from "express";
 // import the Fibonacci function

const router = express.Router();

// GET /fib/:n
router.get("/:n", (req, res) => {
  const n = parseInt(req.params.n, 10);

  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: "n must be a non-negative integer" });
  }

  try {
    const result = fibonacci(n);
    res.json({ n, fibonacci: result });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
