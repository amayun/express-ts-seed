import { ErrorRequestHandler } from 'express';
import logger from '../util/logger';

const errorHandler: ErrorRequestHandler = function (err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  logger.error(err.message);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};

export default errorHandler;
