import express from 'express';
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.send('Hello, Express!');
});

export default router;