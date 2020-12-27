import express from 'express';
import db from '../database';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await db.query('SELECT NOW()');

  res.send(result.rows[0]);
});

export default router;
