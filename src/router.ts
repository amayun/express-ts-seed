import rootRouter from './routes/root';
import healthRouter from './routes/health';
import { Express } from 'express';

export default function router(app: Express) {
  app.use('/', rootRouter);
  app.use('/health', healthRouter);
}
