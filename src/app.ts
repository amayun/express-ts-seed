import 'express-async-errors';
import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import httpLogger from 'morgan';
import sassMiddleware from 'node-sass-middleware';

import router from './router';
import errorHandler from './middlewares/errorHandler';

const app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');

app.use(httpLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: 'public',
    dest: 'public',
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true,
  }),
);
app.use(express.static('public'));

router(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

export default app;
